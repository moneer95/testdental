"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import courseVector from "../../../public/imgs/courses/courseVector.png";
import Star from "../../../public/imgs/courses/Star.png";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

interface Package {
  name: string;
}

function Courses() {
  const [packagesName, setPackagesName] = useState<Package[]>([]);
  // const [selectedPackage, setSelectedPackage] = useState<string>('ORE Courses');
  const [coursesData, setCoursesData] = useState<any[]>([]);
  const { chooseFilter, setChooseFilter, selectedPackage, setSelectedPackage } =
    useAppContext(); // Filter context
  const username = process.env.NEXT_PUBLIC_API_USERNAME;
  const password = process.env.NEXT_PUBLIC_API_PASSWORD;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // if (!username || !password) {
  //   console.log("Environment variables for API credentials are not set.");
  // }

  const encodedCredentials = btoa(`${username}:${password}`);

  // Fetch package names and courses data
  useEffect(() => {
    const getProductsName = async () => {
      try {
        const response = await fetch(
          `https://backend.ea-dental.com/api/resource/Course Package?order_by=creation`,
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        setPackagesName(jsonResponse.data || []);
      } catch (error) {
        console.error(`Error fetching products`, error);
      }
    };

    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://backend.ea-dental.com/api/method/ea_dental.api.get_course_package?package_name=${selectedPackage}`,
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        setCoursesData(jsonResponse.message || []);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    getProductsName();
    getProduct();
  }, [selectedPackage, encodedCredentials]);

  // Group courses by category
  const groupedCourses = coursesData.reduce((acc: any, course: any) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  // Apply the filter if chosen
  const filteredCourses = Object.keys(groupedCourses).reduce(
    (acc: any, category: string) => {
      const filteredCategoryCourses = groupedCourses[category].filter(
        (course: any) => {
          // Check the chosen filter criteria here
          if (chooseFilter) {
            // Filter by category or any other filter logic
            return (
              course.category === chooseFilter || course.type === chooseFilter
            );
          }
          return true; // No filter, show all courses
        }
      );

      if (filteredCategoryCourses.length > 0) {
        acc[category] = filteredCategoryCourses;
      }

      return acc;
    },
    {}
  );

  return (
    <div>
      <div className="flex justify-start flex-wrap text-[14px] mb-12 border-b border-grayBorder pb-3 max-sm:pr-3">
        {packagesName.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => {
                setSelectedPackage(item.name);
                setChooseFilter("");
              }}
              className={`px-3 py-1 max-sm:w-full font-medium max-md:w-1/2 rounded-md ${selectedPackage === item.name
                  ? "bg-primarySkyBlue text-black"
                  : "bg-white text-headingBlack"
                }`}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>

      <div>
        <div className="space-y-8">
          {Object.keys(filteredCourses).length > 0 ? (
            Object.keys(filteredCourses).map((category, index) => (
              <div key={index}>
                {/* Render category name once */}
                <div className="my-3">
                  <p className="text-[18px] font-semibold">{category}</p>
                  <p className="text-[14px] text-textBlack">
                    Thrive in the evolving design industry.
                  </p>
                </div>

                {/* Render filtered courses in a row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredCourses[category].map(
                    (course: any, index: number) => (
                      <div
                        key={index}
                        className="bg-white my-4 rounded-md p-4 border border-grayBorder"
                      >
                        <div className="h-[203px] w-full">
                          <Image
                            src={`${baseUrl}${course.course_image}` || Star}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover object-center rounded-md"
                            alt={`${course.course_name} Image`}
                          />
                        </div>
                        <div className="flex gap-3 justify-between w-full items-center my-3">
                          <div className="flex justify-start gap-2 items-center">
                            <h3 className="text-[12px] text-primaryGray bg-gray-100 rounded-full p-1">
                              {course.category}
                            </h3>
                            <button className="w-auto text-[12px] py-1 rounded-full border border-grayBorder bg-secondryGreen p-2 text-primaryGreen">
                              {course.type}
                            </button>
                          </div>
                          <div className="flex justify-start items-center">
                            <div className="h-full flex justify-center items-center">
                              <Image
                                src={Star}
                                width={1000}
                                height={1000}
                                className="w-[14px] h-[14px] object-contain object-center rounded-md"
                                alt={`${course.course_name} Image`}
                              />
                            </div>
                            <div className="flex h-full justify-start item-center">
                              <Image
                                src={courseVector}
                                width={1000}
                                height={1000}
                                className="w-[14px] h-[14px] object-contain object-center rounded-md"
                                alt={`${course.course_name} Image`}
                              />
                              <p className="text-[12px]">{course.students}</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="font-semibold">{course.course_name}</h3>
                        <p
                          className="text-textBlack text-[14px]"
                          dangerouslySetInnerHTML={{
                            __html: course.description,
                          }}
                        ></p>
                        <Link
                          href={`/Courses/${selectedPackage}+${course.slug}`}
                          className="flex justify-between items-center my-3"
                        >
                          <p className="font-semibold text-primaryPurple">
                            £{course.price} inc VAT
                          </p>
                          <button className="px-4 py-2 rounded-md bg-primaryPurple text-white text-center">
                            {course.button_text || "Book Now"}
                          </button>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <span className="loader"></span>
            </div>
            // <p>No courses available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;

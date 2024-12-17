"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ORECourses from "../../../public/imgs/home/courses/ORECourses.png";
// import { useAppContext } from '@/context/AppContext';
import Link from "next/link";



function Courses() {
  const [courseName, setCourseName] = useState("ORE Courses");
  const [packagesName, setPackagesName] = useState<any[]>([]);
  const [coursesData, setCoursesData] = useState<any[]>([]);
  // const { chooseFilter, setChooseFilter, selectedPackage, setSelectedPackage } =
  //     useAppContext(); // Filter context
  const username = process.env.NEXT_PUBLIC_API_USERNAME;
  const password = process.env.NEXT_PUBLIC_API_PASSWORD;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!username || !password) {
    // console.log("Environment variables for API credentials are not set.");
  }

  const encodedCredentials = btoa(`${username}:${password}`);

  // Fetch course details for the selected package
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://backend.ea-dental.com/api/method/ea_dental.api.get_course_package?package_name=${courseName}`,
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

    if (courseName) getProduct();
  }, [courseName]);

  // Fetch list of packages
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

    getProductsName();
  }, []);

  return (
    <div className="p-3 linearBackground mt-[10%]">
      {/* Package selection buttons */}
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 text-[14px] mb-12 w-max">
        {packagesName.map((item, index) => (
          <button
            key={index}
            onClick={() => setCourseName(item.name)}
            className={`px-2 py-2 border border-grayBorder rounded-md ${courseName === item.name ? "bg-primarySkyBlue" : "bg-white"
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Courses display */}
      <div>
        <div className="flex justify-between items-center font-medium my-3">
          <p>{courseName}</p>
          <Link href={"/Courses"}>
            <p>Browse all</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          {coursesData.slice(0, 3).map(
            (
              course,
              index // Show only the first 3 courses
            ) => (
              <Link href={`/Courses/${courseName}+${course?.slug}`} key={index} className="bg-white my-4 rounded-md p-4">
                <div className="h-[203px] w-full">
                  <Image
                    src={`${baseUrl}${course.course_image}` || ORECourses} // Use the API image or fallback
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover object-center rounded-md"
                    alt={`${course?.course_name} Image`}
                  />
                </div>
                <h3 className="text-[12px] text-primaryGray">
                  {course.category || "Category"}
                </h3>
                <h3 className="font-semibold">{course?.course_name}</h3>
                <div className="flex gap-3 justify-start items-start my-3">
                  <button
                    className={`w-auto text-[12px] py-1 rounded-full border border-grayBorder bg-secondryPurple text-primaryPurple p-3`}
                  >
                    {course?.lectures} Lecture Notes
                  </button>
                  <button
                    className={`w-auto text-[12px] py-1 rounded-full border border-grayBorder bg-secondryGreen text-primaryGreen p-3`}
                  >
                    {course?.videos} Videos
                  </button>
                  <button
                    className={`w-auto text-[12px] py-1 rounded-full border border-grayBorder bg-primarySkyBlue text-secondorySkyBlue p-3`}
                  >
                    {course?.exams} Exams
                  </button>
                </div>
                <div
                  className="text-[12px]"
                  dangerouslySetInnerHTML={{ __html: course?.description }}
                ></div>{" "}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;

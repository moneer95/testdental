"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CourseAdvantage from "@/app/components/courses/CourseAdvantage";
import CourseContent from "@/app/components/courses/CourseContent";
import Docters from "@/app/components/courses/Docters";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Star from "../../../public/imgs/courses/Star.png";
import courseVector from "../../../public/imgs/courses/courseVector.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Page() {
  const { setCart } = useAppContext();
  const [slugCourse, setSlugCourse] = useState<any | null>(null);
  const [endpointParts, setEndpointParts] = useState({
    category: "",
    subcategory: "",
  });
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);


  const notify = (message: string) => {
    toast(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const username = process.env.NEXT_PUBLIC_API_USERNAME;
  const password = process.env.NEXT_PUBLIC_API_PASSWORD;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!username || !password || !baseUrl) {
    console.error(
      "Environment variables for API credentials or base URL are not set."
    );
  }

  const encodedCredentials = btoa(`${username}:${password}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const parts = path.split("/");

      if (parts.length > 2) {
        const categorySubcategory = parts[2].split("+");
        const category = decodeURIComponent(categorySubcategory[0]);
        const subcategory = categorySubcategory[1]
          ? decodeURIComponent(categorySubcategory[1])
          : "";

        setEndpointParts({ category, subcategory });
      }
    }
  }, []);

  useEffect(() => {
    const getSlugProduct = async () => {
      if (!endpointParts.subcategory) {
        console.warn(
          "SubCategory is not defined; skipping slug product fetch."
        );
        return;
      }

      try {
        const response = await fetch(
          `${baseUrl}/api/method/ea_dental.api.get_course_from_slug?slug=${endpointParts.subcategory}`,
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
        const fetchedCourse = jsonResponse.message?.[0] || null;
        setSlugCourse(fetchedCourse);

        // console.log("Slug product fetched successfully:", fetchedCourse);
      } catch (error) {
        console.error("Error fetching slug product:", error);
        setSlugCourse(null);
      }
    };

    const getRelatedProducts = async () => {
      if (!endpointParts.category) {
        console.warn(
          "Category is not defined; skipping related products fetch."
        );
        return;
      }

      try {
        const response = await fetch(
          `${baseUrl}/api/method/ea_dental.api.get_course_package?package_name=${endpointParts.category}`,
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
              "Content-Type": "application/json",
            },
          }
        );

        const jsonResponse = await response.json();
        setRelatedProducts(jsonResponse.message || []);

        // console.log("Related products fetched successfully:", jsonResponse.message);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setRelatedProducts([]);
      }
    };

    getSlugProduct();
    getRelatedProducts();
  }, [
    endpointParts.subcategory,
    endpointParts.category,
    baseUrl,
    encodedCredentials,
  ]);

  const handleAddToCart = () => {
    if (slugCourse) {
      // Retrieve the existing cart from localStorage or initialize it as an empty array
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Check if the course is already in the cart
      const existingCourse = storedCart.find(
        (item: any) => item.course_name === slugCourse.course_name
      );

      if (existingCourse) {
        // Update the quantity if the course already exists in the cart
        existingCourse.quantity += 1;
        notify("course quantity updated in cart");

      } else {
        // Create a new course object with quantity
        const courseWithQuantity = {
          ...slugCourse,
          quantity: 1, // Add initial quantity,
          item: "course"
        };


        notify("Course added to cart");
        storedCart.push(courseWithQuantity);
      }

      // Save the updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(storedCart));


      setCart((prev) => !prev); // Update the cart state to trigger a re-render
    }
  };




  // console.log(slugCourse?.category)

  return (
    <div className="pt-[120px] container px-20 max-lg:px-12 max-sm:px-4 mx-auto">
      <h2 className="font-medium text-[14px]">
        {`Courses / ${endpointParts.category} / `}
        <span className="text-textBlack">{endpointParts.subcategory}</span>
      </h2>

      <ToastContainer /> {/* Ensure this is added */}

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
        {/* Course Image */}
        <Image
          src={
            slugCourse?.course_image
              ? `${baseUrl}${slugCourse.course_image}`
              : "/imgs/courses/Star.png"
          }
          alt="Course Image"
          height={1000}
          width={1000}
          className="w-full h-full object-cover object-center"
        />

        {/* Course Content */}
        <div>
          <h3 className="text-[14px] font-medium">{slugCourse?.category}</h3>
          <h2 className="text-[24px] max-md:text-[20px] font-semibold">
            {slugCourse?.course_name}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-[24px] max-md:text-[20px]">
              <span className="text-textBlack line-through">
                £{Number(slugCourse?.price) + 200}
              </span>
              £{slugCourse?.price} inc VAT
            </p>
            <p className="text-primaryGreen bg-secondryGreen">ON SALE!</p>
          </div>
          <div className="border-t mt-4 py-8 border-grayBorder">
            <p className="text-[14px] font-semibold py-3">Description</p>
            <div
              className="text-textBlack font-medium"
              dangerouslySetInnerHTML={{
                __html: slugCourse?.description || "",
              }}
            />
          </div>
          {slugCourse?.category == 'In Person Courses' ? (
            <div></div>
          ) : (
            <div>
              <button
                onClick={handleAddToCart}
                className="flex justify-between items-center w-full bg-primaryPurple p-2 rounded-md"

              >
                <div></div>

                <div className="flex justify-start items-center gap-2 text-white">
                  <p className="font-medium">Add to cart</p>
                  <FaShoppingCart className="h-[17px] w-[17px]" />
                </div>
                <div className="bg-white p-3 rounded-md">£{slugCourse?.price}</div>
              </button>
            </div>
          )}


          {/* Additional Components */}
          <CourseAdvantage />
          <CourseContent />
        </div>
      </div >


      {/* docters  */}

      {
        slugCourse?.category == 'In Person Courses' ? (
          <div className="2xl:px-16 mb-12 my-12">

            <Docters data={slugCourse?.tickets} course={slugCourse} />
          </div>) : (
          <div>

          </div>
        )
      }

      {/* Related Products */}

      <div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 my-16">
          {relatedProducts.map((course: any, index: number) => (
            <div
              key={index}
              className="bg-white my-4 rounded-md p-4 border border-grayBorder"
            >
              <div className="h-[203px] w-full">
                <Image
                  src={`${baseUrl}${course.course_image}` || Star} // Use the default image if not available
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
                <div className="flex justify-start  items-center">
                  <div className="h-full flex justify-center items-center">
                    <Image
                      src={Star}
                      width={1000}
                      height={1000}
                      className="w-[14px] h-[14px] object-contain object-center rounded-md"
                      alt={`${course.course_name} Image`}
                    />
                  </div>
                  <div className="flex h-full justify-start item-center ">
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
                dangerouslySetInnerHTML={{ __html: course.description }}
              ></p>
              <Link
                href={`/Courses/${endpointParts.category}+${course.slug}`}
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
          ))}
        </div>
      </div>




    </div >
  );
}

export default Page;

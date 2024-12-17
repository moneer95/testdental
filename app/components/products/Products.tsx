"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Star from "../../../public/imgs/courses/Star.png";
import courseVector from "../../../public/imgs/courses/courseVector.png";
// import ORECourses from "../../../public/imgs/home/courses/ORECourses.png";
import Link from "next/link";

function Products() {
  const [coursesData, setCoursesData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [productCategories, setProductCategories] = useState<any[]>([])

  // console.log(productCategories)

  const username = "f159677cbad15a9";
  const password = "cda008a8375b35e";
  const baseUrl = "https://backend.ea-dental.com";

  const encodedCredentials = btoa(`${username}:${password}`);

  // Fetch product details for the selected package
  useEffect(() => {

    // const getCategories = async () => {
    //   try {
    //     const response = await fetch(`https://backend.ea-dental.com/api/resource/Products/`, {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Basic ${encodedCredentials}`,
    //         "Content-Type": "application/json",
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     const jsonResponse = await response.json();
    //     console.log(jsonResponse)
    //     setProductCategories(jsonResponse.data);
    //   } catch (error) {
    //     if (error instanceof TypeError) {
    //       console.error("Network error or CORS issue:", error);
    //     } else {
    //       console.error("Error in fetching categories:", error);
    //     }
    //   }
    // };

    const fetchCoursesData = async () => {
      setIsLoading(true); // Start loader
      try {
        const response = await fetch(
          `${baseUrl}/api/method/ea_dental.api.get_all_products`,
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
        // console.log(jsonResponse.message);

        // Check if there are products in the response
        if (jsonResponse.message && jsonResponse.message.length > 0) {
          setCoursesData(jsonResponse.message); // Set the data if available
        } else {
          setCoursesData([]); // Set empty array if no data is available
        }
      } catch (error: any) {
        console.error("Error fetching courses data:", error.message);
        setCoursesData([]); // Set empty array on error
      } finally {
        setIsLoading(false); // Stop loader
      }
    };
    // getCategories()
    fetchCoursesData();
  }, []);

  return (
    <div>
      {/* Display selected product details */}
      <div>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <span className="loader"></span>
          </div>
        ) : coursesData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coursesData.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white my-4 rounded-md p-4 border border-grayBorder"
              >
                <div className="h-[203px] w-full">
                  <Image
                    src={`https://backend.ea-dental.com${item.image}`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover object-center rounded-md"
                    alt={`${item.product_name} Image`}
                  />
                </div>
                <div className="flex gap-3 justify-between w-full items-center my-3">
                  <div className="flex justify-start gap-2 items-center">
                    <h3 className="text-[12px] text-primaryGray bg-gray-100 rounded-full p-1">
                      {item.category}
                    </h3>
                    <button className="w-auto text-[12px] py-1 rounded-full border border-grayBorder bg-secondryGreen p-2 text-primaryGreen">
                      {/* {item.doctype} */}type
                    </button>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="h-full flex justify-center items-center">
                      <Image
                        src={Star}
                        width={1000}
                        height={1000}
                        className="w-[14px] h-[14px] object-contain object-center rounded-md"
                        alt={`${item.product_name} Image`}
                      />
                    </div>
                    <div className="flex h-full justify-start item-center">
                      <Image
                        src={courseVector}
                        width={1000}
                        height={1000}
                        className="w-[14px] h-[14px] object-contain object-center rounded-md"
                        alt={`${item.product_name} Image`}
                      />
                      <p className="text-[12px]">owner</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold">{item.product_name}</h3>
                <Link
                  href={`/Products/${item.product_name}`}
                  className="flex justify-between items-center my-3"
                >
                  <p className="font-semibold text-primaryPurple">
                    £{item.variations[0]?.price} inc VAT
                  </p>
                  <button className="px-4 py-2 rounded-md bg-primaryPurple text-white text-center">
                    {"Book Now"}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Products;

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
import ProductSlider from "@/app/components/products/ProductSlider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Define the type for course


function Page() {
  const { setCart } = useAppContext();
  const [slugCourse, setSlugCourse] = useState<any>(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState('');
  const [variationName, setVariationName] = useState('');
  const [variationId, setVariationId] = useState('');
  const [stock, setStock] = useState('');
  let Variations = []
  let childProduct = []
  if (slugCourse !== null) {
    const { variations } = slugCourse
    Variations.push(...variations)
  }
  if (slugCourse !== null) {
    const { child_products } = slugCourse
    childProduct.push(...child_products
    )
  }



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

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);


    // Split the string into parts
    const parts = selectedValue.split(',').map((item: string) => item.trim());

    // Ensure there are two parts and set them separately
    if (parts.length) {
      setVariationName(parts[0]); // e.g., "Endo 29"
      setPrice(parts[1]); // e.g., "1"
      setStock(parts[2]); // e.g., "2"
      setVariationId(parts[3]); // e.g., "hkgjdfy"
    }
  };


  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  const [quantity, setQuantity] = useState(1); // Initial count set to 1

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(Math.max(1, quantity - 1)); // Prevent count from going below 1
  };


  const username = "f159677cbad15a9";
  const password = "cda008a8375b35e";
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
        // The product name is stored in parts[2]
        const encodedProductName = parts[2]; // This is the product part of the URL
        const decodedProductName = decodeURIComponent(encodedProductName); // Decode any special characters

        setProductName(decodedProductName); // Set the decoded product name in state
      }
    }
  }, []);

  useEffect(() => {
    const getSlugProduct = async () => {
      if (!productName) {
        console.warn(
          "SubCategory is not defined; skipping slug product fetch."
        );
        return;
      }

      try {
        const response = await fetch(
          `${baseUrl}/api/resource/Products/${productName}`,
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
        const fetchedCourse = jsonResponse.data || null;
        setSlugCourse(fetchedCourse);


        // console.log("Slug product fetched successfully:", fetchedCourse);
      } catch (error) {
        console.error("Error fetching slug product:", error);
        setSlugCourse(null);
      }
    };

    const getRelatedProducts = async () => {
      if (!productName) {
        console.warn(
          "Category is not defined; skipping related products fetch."
        );
        return;
      }

      try {
        const response = await fetch(
          `${baseUrl}/api/method/ea_dental.api.get_course_package?package_name=${productName}`,
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
  }, [productName, baseUrl, encodedCredentials]);

  const handleAddToCart = () => {
    if (stock === "0") {
      notify("Product is out of stock");
    } else {
      if (slugCourse && selectedOption) {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

        const cartIndex = storedCart.findIndex(
          (item: any) =>
            item.product_name === slugCourse.product_name &&
            item.variationName === variationName
        );

        

        if (cartIndex > -1) {
          // If product already exists, update its quantity
          storedCart[cartIndex].quantity += quantity; // Increase the quantity by the selected quantity
          notify("Product quantity updated in cart");
        } else {
          // Add a new product to the cart
          const newCartItem = {
            ...slugCourse,
            price: price,
            variationName: variationName,
            variationId: variationId,
            stock: stock,
            quantity: quantity,
            item: "product"
          };
          storedCart.push(newCartItem);
          notify("Product added to cart");
        }

        // Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(storedCart));
        setCart((prev) => !prev);
      } else {
        alert("Please select a variation before adding to the cart.");
      }
    }
  };



  return (
    <div className=" container px-20 max-lg:px-12 max-sm:px-4 mx-auto">
      <h2 className="font-medium text-[14px]">
        {`Products / ${productName} / `}
        <span className="text-textBlack">{productName}</span>
      </h2>
      <ToastContainer /> {/* Ensure this is added */}


      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
        {/* Course Image */}
        <div>
          <ProductSlider slugCourse={slugCourse} />
        </div>
        {/* <Image
                    src={
                        slugCourse?.image
                            ? `${baseUrl}${slugCourse.image}`
                            : "/imgs/courses/Star.png"
                    }
                    alt="Course Image"
                    height={1000}
                    width={1000}
                    className="w-full h-full object-cover object-center"
                /> */}

        {/* Course Content */}
        <div>
          <h3 className="text-[14px] font-medium">{slugCourse?.category}</h3>
          <h2 className="text-[24px] max-md:text-[20px] font-semibold">
            {slugCourse?.name}
          </h2>
          <div className="flex justify-between items-center">


            <p className="text-[24px] max-md:text-[20px]">

              £{String(price)} inc VAT
            </p>

            <p className="text-primaryGreen bg-secondryGreen p-1 rounded-lg">
              ON SALE!
            </p>
          </div>
          <div className="border-t mt-4 py-8 border-grayBorder">
            <p className="text-[14px] font-semibold py-3">Description</p>
            <div
              className="text-textBlack font-medium"
              dangerouslySetInnerHTML={{
                __html: slugCourse?.description || "",
              }}
            />

            <div className="flex justify-center items-center w-full gap-5">
              <div className="border border-grayBorder rounded-md p-1 ">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button onClick={decrement} style={{ fontSize: '18px' }}>–</button>
                  <span style={{ margin: '0 12px' }}>{quantity}</span>
                  <button onClick={increment} style={{ fontSize: '18px' }}>+</button>
                </div>
              </div>
              <div>
                <label htmlFor="dropdown" className="block text-sm font-semibold">Variations:</label>
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md outline-none"
                >
                  <option value="" disabled >-- Select an option --</option>
                  {Variations.map((variation: any, index: number) => (
                    <option key={index} value={`${variation.variation_name},  ${variation.price} , ${variation.in_stock}, ${variation.name}`}>
                      {variation.variation_name}
                    </option>
                  ))}
                </select>


              </div>

            </div>
          </div>
          <button
            className={`${stock == "0" ? 'cursor-not-allowed' : ''} flex justify-between items-center w-full bg-primaryPurple p-2 rounded-md`}
            onClick={handleAddToCart}
          >
            <div></div>
            <div className={` flex justify-start items-center gap-2 text-white`}>
              <p className="font-medium">Add to cart</p>
              <FaShoppingCart className="h-[17px] w-[17px]" />
            </div>
            <div className="bg-white p-3 rounded-md">£{slugCourse?.price}</div>
          </button>

          {/* Additional Components */}
          <CourseAdvantage />
          <CourseContent />
        </div>
      </div>

      {/* Related Products */}
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 my-16">
        {childProduct.map((course: any, index: number) => (
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
            <h3 className="font-semibold">{course.product}</h3>
            <p
              className="text-textBlack text-[14px]"
              dangerouslySetInnerHTML={{ __html: course.description }}
            ></p>
            <Link
              href={`/Products/${course.product}`}
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

      <div className="2xl:px-16 mb-12">
        <Docters />
      </div>
    </div>
  );
}

export default Page;

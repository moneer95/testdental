'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppContext } from '@/context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page() {
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

    const [cartItems, setCartItems] = useState<any[]>([]);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const { setCart } = useAppContext();

    console.log(cartItems)

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart);
    }, []);

    const handleRemoveFromCart = (index: any) => {
        const updatedCart = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart((prev) => !prev);
        notify("Item removed from cart!");
    };

    const username = process.env.NEXT_PUBLIC_API_USERNAME;
    const password = process.env.NEXT_PUBLIC_API_PASSWORD;

    // if (!username || !password) {
    //   console.log("Environment variables for API credentials are not set.");
    // }

    const encodedCredentials = btoa(`${username}:${password}`);

    // Fetch package names and courses data

    const handleCheckOut = async () => {
        // To store tickets data for courses
        let updatedCartItems = [...cartItems];

        for (const item of cartItems) {
            if (item.item === "course") {
                try {
                    // Fetch the course tickets based on the slug
                    const response = await fetch(
                        `https://backend.ea-dental.com/api/method/ea_dental.api.get_course_from_slug?slug=${item.slug}`,
                        {
                            method: "GET",
                            headers: {
                                Authorization: `Basic ${encodedCredentials}`,
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const responseJson = await response.json();

                    if (responseJson.message && responseJson.message[0]?.tickets) {
                        const courseTickets = responseJson.message[0].tickets;

                        // Check if the selected ticket is out of stock
                        const isTicketOutOfStock = courseTickets.some(
                            (ticket: any) =>
                                ticket.name === item.selectedTicket.name && ticket.in_stock === 0
                        );

                        if (isTicketOutOfStock) {
                            // Notify user about the out-of-stock course ticket
                            notify(`The course ${item.name} with the selected ticket is out of stock!`);

                            // Remove the course from updatedCartItems
                            updatedCartItems = updatedCartItems.filter(
                                (cartItem) => cartItem.slug !== item.slug
                            );
                        }
                    }
                } catch (error) {
                    console.error("Error fetching course data:", error);
                }
            } else if (item.item === "product") {
                try {
                    // Fetch the course tickets based on the slug
                    const response = await fetch(
                        `https://backend.ea-dental.com/api/resource/Products/${item.product_name}`,
                        {
                            method: "GET",
                            headers: {
                                Authorization: `Basic ${encodedCredentials}`,
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const responseJson = await response.json();

                    if (responseJson.data && responseJson.data.variations) {
                        const courseTickets = responseJson.data.variations;

                        // Check if the selected ticket is out of stock
                        const isTicketOutOfStock = courseTickets.some(
                            (variation: any) =>
                                variation.variation_name === item.variationName && variation.in_stock === 0
                        );

                        if (isTicketOutOfStock) {
                            // Notify user about the out-of-stock course ticket
                            notify(`The course ${item.name} with the selected ticket is out of stock!`);

                            // Remove the course from updatedCartItems
                            updatedCartItems = updatedCartItems.filter(
                                (cartItem) => cartItem.slug !== item.slug
                            );
                        }
                    }
                } catch (error) {
                    console.error("Error fetching course data:", error);
                }
            }
        }

        // Separate the items based on their stock availability
        const outOfStockItems = updatedCartItems.filter((item) => item.stock === "0");
        const inStockItems = updatedCartItems.filter((item) => item.stock !== "0");

        // Notify for out-of-stock items and remove them from the cart
        outOfStockItems.forEach((item) => {
            notify(`Item ${item.name} is out of stock`);
        });

        // Update the cart with only in-stock items
        setCartItems(inStockItems);
        localStorage.setItem("cart", JSON.stringify(inStockItems));
        setCart((prev) => !prev);

        if (outOfStockItems.length === 0) {
            notify("Proceeding to checkout!");
        }
    };



    return (
        <div className="container mx-auto px-12 pt-[50px] min-h-screen relative">
            <ToastContainer /> {/* Ensure this is added */}
            <div className="flex flex-wrap gap-6 items-start justify-between">
                <div className="relative z-0 w-full sm:w-[68%] space-y-6">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div
                                key={index}
                                className="border border-grayBorde h-[180px] p-4 rounded-xl flex justify-between items-center"
                            >
                                <div className="w-[20%] h-full">
                                    <Image
                                        src={`${baseUrl}${item.course_image || item.image || ''}`}
                                        width={1000}
                                        height={1000}
                                        alt={item.course_name || item.product_name || ''}
                                        className="w-full h-full rounded-xl object-cover object-center"
                                    />
                                </div>

                                <div className="flex flex-col justify-start px-3 items-start h-full w-[60%]">
                                    <h2 className="text-[18px] font-semibold">
                                        {item.course_name || item.product_name || 'No Name'}
                                    </h2>
                                    <p className="text-textBlack font-medium">{item.category || ''}</p>
                                    <h3>Quantity : {item.quantity}</h3>
                                    <h3>variationName : {item.variationName}</h3>
                                    {item?.selectedTicket?.start_time !== undefined &&
                                        item?.selectedTicket?.end_time !== undefined ? (
                                        <p>{`${item?.selectedTicket?.start_time} - ${item?.selectedTicket?.end_time}`}</p>
                                    ) : (
                                        <p>N/A</p>
                                    )}
                                </div>

                                <div className="w-[20%] h-full flex flex-col justify-between items-end">
                                    <div
                                        className="bg-gray-100 rounded-md p-1 cursor-pointer hover:bg-red-500 hover:text-white transition"
                                        onClick={() => handleRemoveFromCart(index)}
                                    >
                                        <RiDeleteBinLine />
                                    </div>
                                    <h3 className="text-[18px] font-semibold">
                                        £{item.price || 0}
                                    </h3>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>
                <div className="sm:w-[28%] h-auto bg-white border border-grayBorde rounded-xl p-4 space-y-3 flex flex-col justify-center items-center">
                    <div className="text-[18px] font-semibold w-full flex justify-between items-center">
                        <h3>SubTotal</h3>
                        <h3>
                            £
                            {cartItems.reduce((total, item) => total + (Number(item.price) || 0), 0)}
                        </h3>
                    </div>
                    <button
                        onClick={handleCheckOut}
                        className="bg-primaryPurple h-[52px] rounded-xl text-white font-medium w-full"
                    >
                        Continue to check out
                    </button>
                    <p className="text-[14px] text-textBlack text-center">
                        Taxes & shipping calculated at checkout
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;

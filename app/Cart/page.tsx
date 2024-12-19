'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppContext } from '@/context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { getCartPayload } from "../utils/cartUtils";


function Page() {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const payload = getCartPayload();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const { setCart } = useAppContext();

    const username = process.env.NEXT_PUBLIC_API_USERNAME;
    const password = process.env.NEXT_PUBLIC_API_PASSWORD;
    const encodedCredentials = btoa(`${username}:${password}`);


    console.log(payload)

    // Toast notifications
    const notify = (message: string) => {
        toast(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    

    const fetchCartData = async () => {

        try {
            const response = await fetch(
                `${baseUrl}/api/method/ea_dental.api.get_cart_items`,
                {
                    method: "POST", // Change to POST
                    headers: {
                        Authorization: `Basic ${encodedCredentials}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ cart_items: payload }), // Send the payload in the body
                }
            );

            const data = await response.json();


            if (data.message) {
                
                // Check for sufficient stock
                const validItems = data.message.filter((item: any, idx: any) => {
                    if (item.stock_status == "Stock Unavailable") {
                        handleRemoveFromCart(idx)
                        // Notify user about the insufficient stock
                        notify(`"${item.name}" removed from cart due to insufficient stock.`);
                        return false; // Exclude this item from the valid items
                    }
                    return true; // Keep the item in the cart
                });


                
                setCartItems(validItems);
                
                console.log(validItems)
    
            } else {
                notify("Failed to fetch cart details.");
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
            notify("Error fetching cart details.");
        }
    };


    useEffect(() => {
        fetchCartData();
    }, []);


const handleRemoveFromCart = (index: number) => {
    // Remove the item from the cartItems state
    setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.filter((_, i) => i !== index);
        return updatedCartItems; // Update state
    });

    // Remove the item from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedStoredCart = storedCart.filter((_: any, i: any) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedStoredCart));

    // Notify other components and the user
    setCart((prev) => !prev); // Trigger global cart update
    notify("Item removed from cart!");

};



    const handleCheckout = () => {
        // Logic to proceed to the checkout page


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
                                        src={`${baseUrl}${item.image || ''}`}
                                        width={1000}
                                        height={1000}
                                        alt={item.name || "item image"}
                                        className="w-full h-full rounded-xl object-cover object-center"
                                    />
                                </div>

                                <div className="flex flex-col justify-start py-2 px-5 items-start h-full w-[60%]">
                                    <h2 className="text-[18px] font-semibold">{item.name}</h2>
                                    <p className="text-textBlack font-medium">{item.doctype}</p>
                                    <h3>Quantity: {item.quantity}</h3>
                                </div>

                                <div className="w-[20%] h-full flex flex-col justify-between items-end">
                                    <div
                                        className="bg-gray-100 rounded-md p-1 cursor-pointer hover:bg-red-500 hover:text-white transition"
                                        onClick={() => handleRemoveFromCart(index)}
                                    >
                                        <RiDeleteBinLine />
                                    </div>
                                    <h3 className="text-[18px] font-semibold">
                                        £{item.total}
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
                            {cartItems.reduce((total, item) => total + (Number(item.total) || 0), 0)}
                        </h3>
                    </div>
                    <Link href="/checkout">
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-[#22207E] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#22207E] transition"
                        >
                            Proceed to Checkout
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
}

export default Page;

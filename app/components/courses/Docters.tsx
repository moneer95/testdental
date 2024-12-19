import { useAppContext } from '@/context/AppContext';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Course {
    slug: string;
    course_name: string;
    course_image: string;
    category: string;
    price: number;
    description: string;
    students?: number;
    type?: string;
    button_text?: string;
    tickets: [];
}

function Docters({ data = [], course }: any) { // Default data to an empty array
    const [length3, setLength3] = useState<number>(0);
    const { setCart } = useAppContext();

    console.log(data)

    useEffect(() => {
        if (data.length === 3) {
            setLength3(3);
        } else {
            setLength3(2);
        }
    }, [data]);


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




    const handleAddToCart = (selectedTicket: any, in_stock: number) => {

        if (in_stock === 0) {
            notify("Course is out of stock");
        } else if (course && data) {
            const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

            // Find the index of the course in the cart
            const existingCartItemIndex = storedCart.findIndex(
                (item: Course) => item.course_name === course.course_name
            );

            if (existingCartItemIndex !== -1) {
                // If the course is already in the cart, increase its quantity
                storedCart[existingCartItemIndex].quantity += 1;
                storedCart[existingCartItemIndex].selectedTicket = selectedTicket; // Update ticket if needed
                notify("Course quantity updated in cart");

            } else {
                // If the course is not in the cart, add it as a new item
                const doctorAndCourseName = `Dr ${data[0]?.doctor_name || "Unknown Doctor"}`;
                const updatedCourse = {
                    ...course,
                    doctor_and_course_name: doctorAndCourseName,
                    selectedTicket,
                    quantity: 1,
                    item: "course"

                };



                storedCart.push(updatedCourse);
                notify("Course added to cart");


            }

            // Update the cart in localStorage
            localStorage.setItem("cart", JSON.stringify(storedCart));

            // Update the cart state
            setCart((prev) => !prev);
            // notify("Add to cart");
            // console.log("Cart updated:", storedCart);
        }

    };

    if (!data || data.length === 0) {
        return (
            <div className="text-center text-gray-500">
                No data available.
            </div>
        );
    }

    return (
        <div className="space-y-6 w-full">
            {data.map((item: any, index: number) => (
                <div
                    key={index}
                    className="flex justify-between items-center w-full gap-8 max-sm:flex-col max-sm:justify-start max-sm:items-start border-b border-gray-200 pb-4"
                >
                    {/* Date Section */}
                    <div className="flex flex-col max-sm:flex-row max-sm:justify-between max-sm:w-full justify-center items-center text-primaryPurple text-center space-y-4 max-sm:space-y-0">
                        <p>
                            <span className="text-[40px] max-lg:text-[28px] max-md:text-[18px] font-semibold">
                                {new Date(item.start_date).getDate()}
                            </span>
                            <br className="max-sm:hidden" />
                            {new Date(item.start_date).toLocaleString("default", { month: "long" })}
                        </p>
                        <p>
                            <span className="text-[40px] max-lg:text-[28px] max-md:text-[18px] font-semibold">
                                {new Date(item.end_date).getDate()}
                            </span>
                            <br className="max-sm:hidden" />
                            {new Date(item.end_date).toLocaleString("default", { month: "long" })}
                        </p>
                    </div>

                    {/* Ticket Details */}
                    <div className="text-start space-y-2 w-[60%] max-sm:w-full">
                        <h3 className="font-semibold text-[22px] max-lg:text-[18px] max-md:text-[14px]">
                            Course Instructor: {item.ticket_name || "Unknown Ticket"}
                        </h3>
                        <p className="text-[14px] text-textBlack">
                            Time: {item.start_time || "N/A"} - {item.end_time || "N/A"}
                        </p>
                        <p className="text-[14px] text-textBlack">
                            In Stock: {item.in_stock || 0} Tickets Available
                        </p>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="max-sm:text-center max-sm:w-full">
                        <button
                            onClick={() => handleAddToCart(item, item.in_stock)}
                            className="bg-primaryPurple text-white py-2 px-4 rounded-md max-lg:text-[14px]"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Docters;

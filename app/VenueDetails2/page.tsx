'use client'


import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import DatePicker from "../components/VenueDetails/DatePicker";
import Image from "next/image";

const Calender = () => {
    const bookedTimes = [
        "12:00 PM",
        "12:00 PM",
        "14:00 PM",
        "12:30 AM",
        "02:30 PM",
        "17:00 PM",
        "12:00 AM",
        "12:00 PM",
        "12:00 PM",
        "12:00 AM",
        "12:00 PM",
        "01:00 AM",
        "07:00 PM",
        "12:50 PM",
        "01:30 PM",
        "12:00 AM",
    ];
    const bookingTypes = [
        {
            time: "1 hour",
            price: "£25",
        },
        {
            time: "2 hour",
            price: "£50",
        },
        {
            time: "3 hour",
            price: "£75",
        },
        {
            time: "4 hour",
            price: "£100",
        },
    ];
    const [selectedDate, setSelectedDate] = useState<any>(null);
    const [clickToggler, setClickToggler] = useState<any>(null);
    const [bookingTime, setBookingTime] = useState<any>(null);
    return (
        <div className="max-w-[1440px] mx-auto w-[90%]  mb-12 px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-[#444] font-medium">
                <span className="text-sm text-[#000] font-medium">Venue / </span> Manikin Facility Rental for ORE2 LDS2
            </p>
            <h3 className="text-[32px] text-headingBlack font-semibold leading-[38px] mt-6">
                Choose Your Start Date & Time
            </h3>
            <p className="text-[#5D5D5D] text-sm font-normal mb-10">
                Select a date and time slot for your clinic rental. Make sure to choose an available slot that suits your schedule.
            </p>

            {/* Responsive layout: stacks columns on smaller screens, side-by-side on larger screens */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Left Column */}
                <div className="w-full lg:w-[30%]">
                    <div className="rounded-xl p-3 bg-white border border-[#E4E8E9]">
                        <Image
                            className="w-full object-cover rounded-xl border border-[#E4E8E9] shadow-sm"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo33DKjYB_zIlX3mujytA_Z23UFS_2zSlqw&s"
                            alt="image"
                            width={1000}
                            height={1000}
                        />
                        <h3 className="text-[16px] font-semibold text-headingBlack my-2">
                            Room Rental for OSCE & ME Training
                        </h3>
                        <p className=" text-xs font-normal text-headingBlack w-[95%]">
                            Complete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2 KitComplete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2 Kit........
                        </p>
                        <div className="flex flex-col gap-[2px] mt-3 mb-1">
                            <div className="flex items-baseline">
                                <p className="inline-block text-[#F36611] text-[22px] font-semibold">25£</p>
                                <p className="text-textBlack text-base ">/hour</p>
                            </div>
                            <div className="bg-[#EDFAFF] rounded-md text-[#1199F3] p-1.5 flex items-center gap-1">
                                <IoLocationOutline color="#1199F3" />
                                <p className="text-xs font-normal">England 177 Field End Road, HA5 1QR</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-[#3795FA] rounded-lg bg-[#EFF8FF] p-2 gap-2 flex my-4">
                        <div className="pt-1">
                            <FaCircleExclamation color="#3795FA" size={18} />
                        </div>
                        <div className="flex-grow">
                            <p className="text-[#3795FA] text-xs font-normal">
                                Price excludes consumables ( Burs, Teeth ,Frasaco Jaws, Fillings, Impressions ). Dental supplies and equipment can be
                                purchased at our course venue. Visit the ORE-LDS store for pricing details.
                            </p>
                        </div>
                    </div>
                    <div className="border border-[#3795FA] rounded-lg bg-[#EFF8FF] p-2 gap-2 flex mb-4">
                        <div className="pt-1">
                            <FaCircleExclamation color="#3795FA" size={18} />
                        </div>
                        <div className="flex-grow">
                            <p className="text-[#3795FA]  text-xs font-normal">
                                Evening Slots Available from 10th to 18th of November 2024. Book your slot now!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle Column */}
                <div className="w-full lg:w-[40%]">
                    <div className="border border-[#E7E7E7] rounded-xl p-4">
                        <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    </div>
                    <div className="border border-[#E7E7E7] rounded-xl p-4 my-4">
                        <p className="text-base text-headingBlack font-medium leading-5 mb-4">Available times</p>
                        <div className="flex gap-3 flex-wrap">
                            {bookedTimes.map((item, index) => (
                                <div
                                    key={index}
                                    className={`w-[23%] cursor-pointer flex shadow-sm justify-center items-center text-headingBlack leading-5 text-sm font-medium rounded-lg border ${bookingTime === index ? "border-[#F36611] bg-[#FFF6ED]" : "border-[#E7E7E7]"}  p-3`}
                                    onClick={() => setBookingTime(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border border-[#E7E7E7] rounded-xl p-4 mb-4">
                        <p className="text-base text-headingBlack font-medium leading-5 mb-4">Select Duration</p>
                        <div className="flex flex-col gap-3">
                            {bookingTypes.map((item, index) => (
                                <div
                                    className={`border cursor-pointer ${clickToggler === index ? "border-[#F36611] bg-[#FFF6ED]" : "border-[#E7E7E7]"} rounded-lg shadow-sm p-2 flex justify-between text-base font-medium text-headingBlack`}
                                    onClick={() => setClickToggler(index)}  // This sets the index of the clicked option
                                    key={index}
                                >
                                    <div className="inline-flex items-center">
                                        <label className="relative flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                checked={clickToggler === index}  // Sets the checked state based on the index
                                                onChange={() => setClickToggler(index)}  // Handles the change event
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-[#F36611] transition-all"
                                            />
                                            <span className="absolute bg-[#F36611] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                        </label>
                                        <label className="ml-2 text-headingBlack cursor-pointer text-sm" htmlFor="html">
                                            {item.time}
                                        </label>
                                    </div>
                                    <p>{item.price}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-[30%]">
                    <div className="shadow-sm border border-[#E7E7E7] rounded-xl p-6 mb-4 flex flex-col text-sm font-medium">
                        <div className="w-full mb-6 flex justify-between items-center">
                            <p className="text-[#888888]">Date</p>
                            <p>{selectedDate?.toDateString()}</p>
                            {/* <p>30/11/2024</p> */}
                        </div>
                        <div className="w-full mb-6 flex justify-between items-center">
                            <p className="text-[#888888]">Time</p>
                            <p>{bookingTime && bookingTime >= 0 ? bookedTimes[bookingTime] : "00:00"}</p>
                            {/* <p>12:00 PM</p> */}
                        </div>
                        <div className="w-full mb-6 flex justify-between items-center">
                            <p className="text-[#888888]">Duration</p>
                            {/* <p>4 hours</p> */}
                            <p>{clickToggler && clickToggler >= 0 ? bookingTypes[clickToggler].time : "0 hours"}</p>

                        </div>

                        <div className="border-b w-[80%] border-#E7E7E7] mx-auto mb-6" />
                        <div className="w-full mb-6 flex justify-between items-center text-[18px] font-medium">
                            <p>Total</p>
                            <p>{clickToggler && clickToggler >= 0 ? bookingTypes[clickToggler].price : "00"}</p>

                        </div>
                        <button className="w-full rounded-lg bg-[#22207E] mt-5 text-white py-3.5 text-base font-medium leading-6">
                            Continue to check out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calender;

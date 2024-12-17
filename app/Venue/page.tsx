
import React from "react";
import { FaRegBellSlash } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const VenueHire = () => {
    return (
        <div className="max-w-[1440px] mx-auto w-[90%]  mb-12 px-4 sm:px-6 lg:px-8">
            {/* Section Titles */}
            <h3 className="text-sm font-medium text-primaryPurple text-center mb-2">
                Venue Hire
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-headingBlack">
                Rent our manikin facility for ORE2- LDS2 <br /> dental manikin practice
            </h2>
            <p className="text-base sm:text-lg font-normal text-textBlack text-center mt-2 mb-7">
                We Provide the Recommended Equipment and Materials Endorsed by the GDC.
            </p>

            {/* Notification Bar */}
            <div className="bg-[#ECF1FF] w-full sm:w-3/4 md:w-2/5 lg:w-1/3 rounded-[9px] p-4 flex flex-row gap-3 mx-auto mb-12">
                <div className="flex justify-center items-center bg-primaryPurple rounded-[6px] w-8 h-8 flex-shrink-0">
                    <FaRegBellSlash color="white" />
                </div>
                <div className="flex-grow">
                    <p className="text-xs sm:text-sm font-normal text-[#3D3D3D]">
                        Our service is 100% free of charge, until we are successful
                        in securing a new member of staff.
                    </p>
                </div>
            </div>

            {/* Rental Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Rental Card 1 */}
                <div className="p-4 rounded-xl border border-[#E4E8E9] shadow-lg flex flex-col">
                    <Image
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl border border-[#E4E8E9] shadow-sm"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo33DKjYB_zIlX3mujytA_Z23UFS_2zSlqw&s"
                        alt="Manikin Facility Rental"
                        width={1000}
                        height={1000}
                    />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-headingBlack my-2">
                        Manikin Facility Rental for ORE2 LDS2
                    </h3>
                    <p className="text-xs sm:text-sm font-normal text-headingBlack w-full sm:w-11/12">
                        Complete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2
                        KitComplete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2
                        Kit........
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-4 mb-3">
                        <div className="flex items-baseline">
                            <p className="inline-block text-[#F36611] text-lg sm:text-xl font-semibold">
                                £25
                            </p>
                            <p className="text-textBlack text-base ml-1">/hour</p>
                        </div>
                        <div className="bg-[#EDFAFF] rounded-md text-[#1199F3] px-2 py-1 flex items-center gap-1">
                            <IoLocationOutline color="#1199F3" />
                            <p className="text-xs font-normal">England 177 Field End Road, HA5 1QR</p>
                        </div>
                    </div>
                    <Link href={'/VenueDetails1'}>
                        <button className="mt-auto w-full bg-primaryPurple py-2 sm:py-3 px-3.5 rounded-[6px] text-white font-medium text-base sm:text-lg leading-5">
                            Book now
                        </button>
                    </Link>
                </div>

                {/* Rental Card 2 */}
                <div className="p-4 rounded-xl border border-[#E4E8E9] shadow-lg flex flex-col">
                    <Image
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl border border-[#E4E8E9] shadow-sm"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo33DKjYB_zIlX3mujytA_Z23UFS_2zSlqw&s"
                        alt="Room Rental for OSCE & ME Training"
                        height={1000}
                        width={1000}
                    />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-headingBlack my-2">
                        Room Rental for OSCE & ME Training
                    </h3>
                    <p className="text-xs sm:text-sm font-normal text-headingBlack w-full sm:w-11/12">
                        Complete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2
                        KitComplete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2
                        Kit........
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-4 mb-3">
                        <div className="flex items-baseline">
                            <p className="inline-block text-[#F36611] text-lg sm:text-xl font-semibold">
                                £25
                            </p>
                            <p className="text-textBlack text-base ml-1">/hour</p>
                        </div>
                        <div className="bg-[#EDFAFF] rounded-md text-[#1199F3] px-2 py-1 flex items-center gap-1">
                            <IoLocationOutline color="#1199F3" />
                            <p className="text-xs font-normal">England 177 Field End Road, HA5 1QR</p>
                        </div>
                    </div>
                    <Link href={'/VenueDetails2'}>
                        <button className="mt-auto w-full bg-primaryPurple py-2 sm:py-3 px-3.5 rounded-[6px] text-white font-medium text-base sm:text-lg leading-5">
                            Book now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VenueHire;

import React from 'react'
import logo from '../../../public/imgs/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-primarySkyBlue h-[273px]'>
            <div className='container px-12 mx-auto h-full flex flex-col justify-center items-center'>
                <div className=" flex justify-between items-center max-sm:flex-col max-sm:justify-center max-sm:space-y-6 h-full w-full">
                    {/* Logo */}
                    <div className="text-white font-bold text-xl">
                        <Link href="/">
                            <Image
                                src={logo}
                                width={1000}
                                height={1000}
                                className='object-cover object-center w-[180.79px] h-[#30px]'
                                alt='Logo'
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-[#616180] font-medium hover:text-gray-300 transition duration-200">Courses</Link>
                        <Link href="/about" className="text-[#616180] font-medium hover:text-gray-300 transition duration-200">Products</Link>
                        <Link href="/services" className="text-[#616180] font-medium hover:text-gray-300 transition duration-200">Venue</Link>
                        <Link href="/contact" className="text-[#616180] font-medium hover:text-gray-300 transition duration-200">Recruitment</Link>
                        <Link href="/contact" className="text-[#616180] font-medium hover:text-gray-300 transition duration-200">Contact</Link>
                        <Link href="/contact" className="text-[#616180] font-medium hover:text-gray-300 transition duration-200">Team</Link>
                    </div>

                    {/* Add to Cart and Sign Up */}
                    <div className='flex justify-start items-center gap-5'>
                        <div className='border border-primaryGray text-primaryPurple hover:bg-primaryPurple hover:text-white rounded-full p-2 cursor-pointer transition-all ease-in-out duration-200 hover:scale-125'>
                            <FaFacebook />
                        </div>
                        <div className='border border-primaryGray  text-primaryPurple hover:bg-primaryPurple hover:text-white rounded-full p-2 cursor-pointer transition-all ease-in-out duration-200 hover:scale-125'>
                            <AiFillInstagram />
                        </div>
                        <div className='border border-primaryGray  text-primaryPurple hover:bg-primaryPurple hover:text-white rounded-full p-2 cursor-pointer transition-all ease-in-out duration-200 hover:scale-125'>
                            <FaXTwitter />
                        </div>
                    </div>

                </div>

                <div className=' w-full '>
                    <p className='text-primaryGray border-t py-8 border-gray-200 text-[14px] text-center  bg-primarySkyBlue '>© Copyright 2022, All Rights Reserved by EADental</p>
                </div>


            </div>
        </div>
    )
}

export default Footer
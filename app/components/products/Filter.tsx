'use client';

import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

// Define types for filter data
interface FilterCategory {
    category: string;
    items: string[];
}

// Define the filter data
const filterData: FilterCategory[] = [
    {
        category: "Kits",
        items: ["Complete ORE2 Kit", "Rubber Dam Kit", "Essential ORE2 Starter kit", "Suture kit"],
    },
    {
        category: "Instruments",
        items: ["Behavioral Therapy", "Trauma Counseling", "Psychology Fundamentals"],
    },
    {
        category: "Endodontics",
        items: ["Dentistry Techniques", "Smile Makeover", "Dental Practitioners"],
    },
    {
        category: "Restorative",
        items: ["Scalers", "Dental Mirrors", "Forceps"],
    },
    {
        category: "Burs",
        items: ["Scalers", "Dental Mirrors", "Forceps"],
    },
    {
        category: "Equipment",
        items: ["Scalers", "Dental Mirrors", "Forceps"],
    },
    {
        category: "Impression Materials",
        items: ["Scalers", "Dental Mirrors", "Forceps"],
    },
    {
        category: "Printed Papers",
        items: ["Scalers", "Dental Mirrors", "Forceps"],
    },
];

function Filter() {
    // Define state for open categories
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

    // Toggle category function
    const toggleCategory = (category: string) => {
        setOpenCategories((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };

    return (
        <div className='border border-grayBorder w-[230px] max-2xl:w-full h-max rounded-md p-3'>
            <p className='text-textBlack text-[14px] text-start font-normal'>Filter by course type</p>

            {filterData.map((filter, index) => (
                <div key={index} className='my-3'>
                    <div
                        className='flex justify-start items-center cursor-pointer'
                        onClick={() => toggleCategory(filter.category)}
                    >
                        {openCategories[filter.category] ? <IoIosArrowDown /> : <IoIosArrowForward />}
                        <p className='font-medium text-[14px] text-black ml-2'>{filter.category}</p>
                    </div>

                    {openCategories[filter.category] && (
                        <div>
                            <ul className='list-none text-textBlack space-y-1 my-2 pl-5 text-[14px]'>
                                {filter.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Filter;

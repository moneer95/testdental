'use client';

import { useAppContext } from '@/context/AppContext';
import React, { useEffect, useMemo, useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface Package {
    name: string;
}

function Filter() {
    const [openCategories, setOpenCategories] = useState<string | null>(null); // Store only one open category
    const [packagesName, setPackagesName] = useState<Package[]>([]);
    const [filterCategories, setFilterCategories] = useState<any[]>([]);
    const { chooseFilter, setChooseFilter, setSelectedPackage } = useAppContext()
    const username = process.env.NEXT_PUBLIC_API_USERNAME;
    const password = process.env.NEXT_PUBLIC_API_PASSWORD;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!username || !password) {
        // console.log("Environment variables for API credentials are not set.");
    }

    // Memoize encoded credentials
    const encodedCredentials = useMemo(() => btoa(`${username}:${password}`), [username, password]);

    useEffect(() => {
        const getProductsName = async () => {
            try {
                const response = await fetch(`${baseUrl}/api/resource/Course Package?order_by=creation`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonResponse = await response.json();
                setPackagesName(jsonResponse.data || []);
            } catch (error) {
                console.error(`Error fetching products: ${error}`);
            }
        };

        getProductsName();
    }, [baseUrl, encodedCredentials]);

    useEffect(() => {
        const fetchAllCategories = async () => {
            if (packagesName.length === 0) return;

            try {
                const subcategories: any[] = [];

                const fetchPromises = packagesName.map(async (courseName) => {
                    const response = await fetch(
                        `https://backend.ea-dental.com/api/method/ea_dental.api.get_course_package?package_name=${courseName.name}`,
                        {
                            method: 'GET',
                            headers: {
                                Authorization: `Basic ${encodedCredentials}`,
                                'Content-Type': 'application/json',
                            },
                        }
                    );

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const jsonResponse = await response.json();

                    jsonResponse.message?.forEach((item: any) => {
                        subcategories.push({
                            category: courseName.name,
                            subcategory: item.category,
                        });
                    });
                });

                await Promise.all(fetchPromises);

                // Group subcategories
                const groupedCategories = subcategories.reduce((acc, item) => {
                    const category = item.category;

                    if (!acc[category]) {
                        acc[category] = { subCategories: [] };
                    }

                    if (!acc[category].subCategories.includes(item.subcategory)) {
                        acc[category].subCategories.push(item.subcategory);
                    }

                    return acc;
                }, {});

                const result = Object.entries(groupedCategories).map(([key, value]) => ({ [key]: value }));

                setFilterCategories((prev) => (JSON.stringify(prev) !== JSON.stringify(result) ? result : prev));
            } catch (error) {
                console.error(`Error fetching categories: ${error}`);
            }
        };

        fetchAllCategories();
    }, [packagesName, encodedCredentials]);

    // Toggle category function (only allows one open category)
    const toggleCategory = (category: string) => {
        setOpenCategories(prevState => prevState === category ? null : category);
    };

    return (
        <div className='border border-grayBorder w-[230px] max-2xl:w-full h-max rounded-md p-3'>
            <p className='text-textBlack text-[14px] text-start font-normal'>Filter by course type</p>

            {packagesName.map((filter, index) => (
                <div key={index} className='my-3'>
                    <div
                        className='flex justify-start items-center cursor-pointer'
                        onClick={() => {
                            toggleCategory(filter.name)
                            setSelectedPackage(filter.name)
                            setChooseFilter('')
                        }}
                    >
                        {openCategories === filter.name ? <IoIosArrowDown /> : <IoIosArrowForward />}
                        <p className='font-medium text-[14px] text-black ml-2'>{filter.name}</p>
                    </div>

                    {/* Render subcategories */}
                    {openCategories === filter.name && (
                        <div>
                            <ul className='list-none text-textBlack space-y-1 my-2 pl-5 text-[14px]'>
                                {filterCategories
                                    .filter((category) => category[filter.name])
                                    .flatMap((category) => category[filter.name].subCategories)
                                    .map((subcategory, idx) => (
                                        <li className={`${chooseFilter == subcategory ? 'bg-primarySkyBlue text-black' : ''} cursor-pointer px-2 py-1 rounded-xl`} onClick={() => setChooseFilter(subcategory)} key={idx}>{subcategory}</li>
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

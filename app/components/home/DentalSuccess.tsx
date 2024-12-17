import Image from 'next/image';
import React from 'react';
import dental1 from '../../../public/imgs/home/dental1.png';
import dental2 from '../../../public/imgs/home/dental2.png';
import dental3 from '../../../public/imgs/home/dental3.png';

const products = [
    {
        id: 1,
        name: 'Instruments',
        description: '12 products',
        image: dental1,
    },
    {
        id: 2,
        name: 'Tools',
        description: '8 products',
        image: dental2,
    },
    {
        id: 3,
        name: 'Equipment',
        description: '5 products',
        image: dental3,
    },
    {
        id: 4,
        name: 'Equipment',
        description: '5 products',
        image: dental3,
    },
    {
        id: 5,
        name: 'Equipment',
        description: '5 products',
        image: dental3,
    },
    {
        id: 6,
        name: 'Equipment',
        description: '5 products',
        image: dental3,
    },
    {
        id: 7,
        name: 'Equipment',
        description: '5 products',
        image: dental3,
    },
];

function DentalSuccess() {
    return (
        <div className="container  mx-auto  ">
            <div>
                <h2 className="text-[32px] max-xl:text-[24px]  max-lg:text-[20px] font-semibold max-md:text-center">
                    Get ORE2 & LDS3 products,{' '}
                    <span className="text-[#536167]">
                        Trusted Tools for <br className='max-lg:hidden' /> Dental Success
                    </span>
                </h2>
                <div className='w-full max-md:text-center'>
                    <button className="bg-[#22207E] my-4 text-white px-3 py-1 rounded-md ">
                        Explore all
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mt-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-[257px] h-[257px] max-sm:w-full max-sm:h-full bg-[#F4F6F7]  rounded-md flex flex-col justify-between"
                        >
                            <div className='p-3'>
                                <h2 className="text-[18px] font-bold">{product.name}</h2>
                                <p className="text-[#6D6D6D] text-[12px]">{product.description}</p>
                            </div>
                            <div>
                                <Image
                                    src={product.image}
                                    width={1000}
                                    height={10000}
                                    alt={product.name}
                                    className="w-[100%] h-[100%] object-cover object-center"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DentalSuccess;

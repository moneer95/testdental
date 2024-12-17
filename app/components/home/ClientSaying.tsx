import React from 'react'
import peopleFrame from '../../../public/imgs/home/peopleFrame.png'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

function ClientSaying() {
    return (
        <div className='w-full linearBackground'>
            <div className='flex max-md:flex-col justify-between items-center w-full px-3 max-md:space-y-2'>

                <div >
                    <h2 className="text-[32px]  max-xl:text-[24px]  max-lg:text-[20px] font-semibold max-md:text-center">
                        See What Our Clients <span className="text-[#536167]">Are Saying
                        </span>
                    </h2>
                    <div className='w-full max-md:text-center'>
                        <button className="bg-[#22207E] my-4 text-white w-[143px] h-[35px] max-sm:w-[100px] max-sm:h-[32px] max-sm:text-[12px] rounded-md">
                            View all services
                        </button>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-3">

                    <Image src={peopleFrame} alt='speed' className='w-[105px] h-[36px] object-cover object-center' />

                    <div>

                        <div className="flex flex-col justify-start items-start  ">
                            <div className="flex justify-start items-center gap-1">
                                <FaStar className="text-yellow-500 w-[11px] h-[11px]" />
                                <FaStar className="text-yellow-500 w-[11px] h-[11px]" />
                                <FaStar className="text-yellow-500 w-[11px] h-[11px]" />
                                <FaStar className="text-yellow-500 w-[11px] h-[11px]" />
                                <FaStar className="text-yellow-500 w-[11px] h-[11px]" />
                                <p className="font-medium text-[12px]">5.0</p>
                            </div>
                            <p className="text-[12px] text-[#092134] font-light">
                                Trusted by 5,152 Dentists
                            </p>
                        </div>



                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 p-3 max-md:my-6">


                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>

                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>

                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>
                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>
                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>
                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>
                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>
                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>
                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>
                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>

                <div className='bg-white p-3 rounded-md  max-h-max h-full'>
                    <div className='flex justify-start items-center gap-2 pb-4'>
                        <Image
                            src={peopleFrame}
                            width={1000}
                            height={1000}
                            className='w-[24px] h-[24px] object-cover object-center rounded-xl'
                            alt='image'
                        />
                        <h3 className='font-semibold text-[14px]'>Reviewer Name</h3>
                    </div>
                    <p className='text-[14px] text-[#6D6D6D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo mollitia, eos dolorum blanditiis iusto laudantium eligendi provident ea earum illum vel. Quibusdam harum repellendus deserunt.!</p>
                </div>


            </div>

        </div>
    )
}

export default ClientSaying
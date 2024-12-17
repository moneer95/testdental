import Image from "next/image";

import speed from '../public/imgs/home/speed.png'
import peopleFrame from '../public/imgs/home/peopleFrame.png'
import { FaStar } from "react-icons/fa";
import DentalSuccess from "./components/home/DentalSuccess";
import sectionimage1 from '../public/imgs/home/sectionimage1.png'
import sectionimage2 from '../public/imgs/home/sectionimage2.png'
import sectionimage3 from '../public/imgs/home/sectionimage3.png'
import sectionimage4 from '../public/imgs/home/sectionimage4.png'
import ClientSaying from "./components/home/ClientSaying";
import HomeLeftImage from '../public/imgs/home/HomeLeftImage.png'
import Faq from "./components/home/Faq";
import Courses from "./components/home/Courses";
import homeTopRight from '../public/imgs/home/homeTopRight.png'
import Link from "next/link";


export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ------------- header ------------------ */}
      <div className=" bg-[#eff8ff]   h-[90vh] max-sm:h-[80vh] relative overflow-hidden">


        <div className="container px-12  max-lg:px-4  mx-auto h-full  ">
          <div className="flex items-center h-full">
            <div className="w-1/2 max-md:w-full max-md:text-center">
              <button className="bg-white flex justify-start items-center p-2 max-xl:p-1 rounded-full  gap-2 max-xl:mx-auto">
                <Image src={speed} alt='speed' className='w-[28px] h-[28px] max-xl:w-[20px] max-xl:h-[20px] object-cover object-center' />
                <p className="text-[12px] max-xl:text-[10px]">
                  Largest Library of Dentist Courses
                </p>
              </button>
              <h1 className="text-[48px] max-xl:text-[36px] max-lg:text-[24px]  font-bold text-[#3d3d3d] mb-4">
                Elevate your Dental Career in the UK with our High-quality Dental Courses              </h1>
              <p className="text-[18px] max-xl:text-md  max-lg:text-[12px]  text-[#616180] mb-8">
                Embark on a transformative journey with our Dental Academy. Add purpose to your career by joining a community dedicated to excellence in dental education.
              </p>

              <div className="flex justify-start max-md:justify-center items-start gap-3 max-xl:mx-auto w-full">

                <Image src={peopleFrame} alt='speed' className='w-[105px] h-[36px] max-xl:w-[80px] max-xl:h-[30px]  object-cover object-center' />

                <div>

                  <div className="flex flex-col justify-start items-start  ">
                    <div className="flex justify-start items-center gap-1">
                      <FaStar className="text-yellow-500 w-[11px] h-[11px] max-xl:w-[9px] max-xl:h-[9px]" />
                      <FaStar className="text-yellow-500 w-[11px] h-[11px] max-xl:w-[9px] max-xl:h-[9px]" />
                      <FaStar className="text-yellow-500 w-[11px] h-[11px] max-xl:w-[9px] max-xl:h-[9px]" />
                      <FaStar className="text-yellow-500 w-[11px] h-[11px] max-xl:w-[9px] max-xl:h-[9px]" />
                      <FaStar className="text-yellow-500 w-[11px] h-[11px] max-xl:w-[9px] max-xl:h-[9px]" />
                      <p className="font-medium text-[12px] max-xl:text-[10px]">5.0</p>
                    </div>
                    <p className="text-[12px] max-xl:text-[10px] text-[#092134] font-light">
                      Trusted by 5,152 Dentists
                    </p>
                  </div>



                </div>

              </div>
              <div className="my-4 space-x-3">
                <Link href={'/Courses'}>
                  <button className="bg-[#22207E] max-xl:text-[10px]  max-xl:w-[110px] max-xl:h-[33px]  font-medium text-white rounded-md w-[169px] h-[44px] text-center">Browse Courses</button>
                </Link>
                <Link href={'/Products'}>
                  <button className="bg-white font-medium max-xl:text-[10px] max-xl:w-[110px] max-xl:h-[33px] text-[#22207E] rounded-md w-[153px] h-[44px] text-center border border-grayBorder">View Products</button>
                </Link>
              </div>



            </div>

          </div>
        </div>
        <div className="w-1/1  max-md:hidden absolute top-0 right-0 overflow-hidden flex justify-center items-center">
          <Image
            src={HomeLeftImage}
            alt="image"
            width={1000}
            height={1000}
            className="w-full h-full max-md:hidden object-cover object-center overflow-hidden"
          />
        </div>
        <div className="absolute w-1/1   top-0 -right-44    h-full">
          <Image
            src={homeTopRight}
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-top"
            alt="image"
          />
        </div>
      </div>

      {/* advance faster elevate your skills section */}


      <div className="container  px-20 max-lg:px-12 max-sm:px-4 mx-auto my-12 ">
        <h2 className="text-[32px] max-xl:text-[24px]  max-lg:text-[20px] font-semibold">Advance Faster,<span className="text-[#536167]"> Elevate Your Skills with <br className="max-lg:hidden" /> Courses Trusted by UK Dental Professionals.</span></h2>

        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 justify-center gap-10 my-10">

          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-start">
              <h2 className="border-l-4 border-[#F36611] text-[24px] max-md:text-[20px] max-md:pl-6 font-semibold pl-10">5000+</h2>
              <p className="pl-10 max-md:pl-6  text-[#888888] max-md:text-[14px]">Dentists Enhanced Their Skills with Our <br className="max-sm:hidden" /> Practical, Hands-on Training</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-start">
              <h2 className="border-l-4 border-[#F36611] text-[24px] max-md:text-[20px] max-md:pl-6  font-semibold pl-10">20+ Years+</h2>
              <p className="pl-10 max-md:pl-6  text-[#888888] max-md:text-[14px]">Providing High-Quality Dental <br className="max-sm:hidden" /> Education Trusted Across the UK</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-start">
              <h2 className="border-l-4 border-[#F36611] text-[24px] max-md:text-[20px] max-md:pl-6  font-semibold pl-10">1,500+</h2>
              <p className="pl-10 max-md:pl-6  text-[#888888] max-md:text-[14px]">Dental Graduates Successfully <br className="max-sm:hidden" /> Prepared for UK Licensing Exams</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-start">
              <h2 className="border-l-4 border-[#F36611] text-[24px] max-md:text-[20px] max-md:pl-6  font-semibold pl-10">100+</h2>
              <p className="pl-10 max-md:pl-6  text-[#888888] max-md:text-[14px]">On-Demand and Live Courses Covering <br className="max-sm:hidden" /> All Aspects of Modern Dentistry</p>
            </div>
          </div>

        </div>


        <div>
          <Courses />
        </div>

      </div>

      {/* dental success section */}

      <div className="my-36 container mx-auto px-20 max-lg:px-12 max-sm:px-4">
        <DentalSuccess />
      </div>


      {/* 4 images section  */}

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 container  px-20 max-lg:px-12 max-sm:px-4 mx-auto  ">

        <div>
          <Image
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
            alt="image"
            src={sectionimage4}
          />
        </div>


        <div>
          <Image
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
            alt="image"
            src={sectionimage2}
          />
        </div>

        <div>
          <Image
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
            alt="image"
            src={sectionimage3}
          />
        </div>

        <div>
          <Image
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center"
            alt="image"
            src={sectionimage1}
          />
        </div>


      </div>


      {/* client saying  */}

      <div className="container  px-20 max-lg:px-12  max-sm:px-4 mx-auto my-28">
        <ClientSaying />
      </div>



      {/* Faq section  */}


      <div className="container  px-20 max-lg:px-12  max-sm:px-4 mx-auto my-8">
        <Faq />
      </div>

      {/* banner section */}


      <div className="container  mx-auto px-20 max-lg:px-12 max-sm:px-4">
        <div className=" bg-secondryPurple  h-[203px]  my-10 flex justify-center items-center flex-col gap-y-3 rounded-md">
          <h3 className="text-headingBlack font-semibold">Still need help?</h3>
          <p className="text-primaryGray text-[12px] max-md:text-center max-md:px-4"> Ask your question and stay up to date with the latest news, announcements, and articles.</p>
          <button className='w-[126px] h-[44px] max-sm:w-[100px] max-sm:h-[32px] max-sm:text-[12px] bg-[#22207E] text-white rounded-md font-medium'>Contact Us</button>
        </div>

      </div>

      {/* last cards  */}

      <div className="container  px-20 max-lg:px-12 max-sm:px-4 mx-auto mt-36 max-md:mt-16 mb-20 flex justify-between items-center gap-5 max-md:flex-col">

        {/* left card */}
        <div className="LastCardLeftBg h-[303px] max-lg:h-[230px] w-full rounded-md flex flex-col justify-end items-start p-10 gap-y-6  max-lg:gap-y-3 max-lg:p-4">
          <h3 className="text-[32px] max-lg:text-[23px] text-white font-semibold z-10">Start Your Dental <br className="max-md:hidden" /> Journey Today</h3>
          <p className="text-[14px] text-white font-medium z-10" >Explore our expert-led courses and join thousands <br className="max-md:hidden" /> of professionals elevating their careers</p>
          <button className='w-[126px] h-[44px] max-lg:text-w-[60px] max-lg:h-[36px]  bg-white text-black rounded-md font-medium z-10'>Enroll Now</button>
        </div>

        {/* right card */}
        <div className="LastCardRightBg h-[303px] max-lg:h-[230px] w-full rounded-md flex flex-col justify-end items-start p-10 gap-y-6  max-lg:gap-y-3 max-lg:p-4">
          <h3 className="text-[32px] max-lg:text-[23px] text-white font-semibold z-10">Get the Tools You <br className="max-md:hidden" /> Need to Succeed</h3>
          <p className="text-[14px] text-white font-medium z-10" >Shop trusted ORE2 & LDS3 products designed to <br className="max-md:hidden" />  streamline your exam preparation.</p>
          <button className='w-[126px] h-[44px] max-lg:text-w-[60px] max-lg:h-[36px]  bg-white text-black rounded-md font-medium z-10'>Enroll Now</button>
        </div>


      </div>

    </div>
  );
}

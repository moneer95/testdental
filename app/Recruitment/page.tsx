'use client'
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaRegBellSlash } from "react-icons/fa";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { BsExclamationCircle } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import Image from "next/image";
const Page = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto w-[90%] pt-12 px-4 sm:px-6 lg:px-8">
      <h3 className="text-sm sm:text-base font-medium text-primaryPurple text-center mb-2">
        Recruitment
      </h3>
      <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-center text-headingBlack">
        Looking for dentists & dental care providers?
      </h2>
      <p className="text-base sm:text-lg font-normal text-textBlack text-center mt-2 mb-7">
        With no fee, unless we are successful for you
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

      {/* Recruitment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Employer Card */}
        <div
          className="p-4 rounded-xl border border-[#E4E8E9] shadow-lg flex flex-col"
          onClick={() => setIsModalOpen1(true)}
        >
          <Image
            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl border border-[#E4E8E9] shadow-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo33DKjYB_zIlX3mujytA_Z23UFS_2zSlqw&s"
            alt="Employer"
            width={1000}
            height={1000}
          />
          <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-headingBlack my-2">
            Employer
          </h3>
          <p className="text-xs sm:text-sm font-normal text-headingBlack w-full sm:w-11/12">
            Complete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2
            KitComplete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2
            Kit........
          </p>
          <button className=" w-full bg-primaryPurple py-2 sm:py-3 px-3.5 rounded-[6px] text-white font-medium text-base sm:text-lg leading-5 mt-4" onClick={() => setIsModalOpen1(true)}>
            Apply
          </button>
        </div>

        {/* Candidate Card */}
        <div
          className="p-4 rounded-xl border border-[#E4E8E9] shadow-lg flex flex-col"
          onClick={() => setIsModalOpen2(true)}
        >
          <Image
            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl border border-[#E4E8E9] shadow-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo33DKjYB_zIlX3mujytA_Z23UFS_2zSlqw&s"
            alt="Candidate"
            height={1000}
            width={1000}
          />
          <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-headingBlack my-2">
            Candidate
          </h3>
          <p className="text-xs sm:text-sm font-normal text-headingBlack w-full sm:w-11/12">
            Complete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2
            KitComplete ORE2 Kit Complete ORE2 KitComplete ORE2 KitComplete ORE2
            Kit........
          </p>
          <button className=" w-full bg-primaryPurple py-2 sm:py-3 px-3.5 rounded-[6px] text-white font-medium text-base sm:text-lg leading-5 mt-4" onClick={() => setIsModalOpen2(true)}>
            Apply
          </button>
        </div>
      </div>

      {isModalOpen1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-[8px] p-6 overflow-hidden shadow-lg max-w-2xl w-full h-[90vh]">

            <div className="overflow-y-auto max-h-[calc(100vh-170px)]">
              <div className="flex">
                <div className="flex-grow">
                  <h3 className="text-primaryPurple mb-4 font-semibold text-[22px]">
                    EA Dental Backend - Employer
                  </h3>
                  <p className="text-sm font-semibold text-primaryPurple">
                    with no obligation and one of our consultants will be in touch
                    with you to discuss your requirements in confidence and how we
                    can help you.  If you prefer to call, we are always happy to
                    talk on 07447931179.
                  </p>
                </div>
                <div className="bg-[#F4F6F7] rounded-[6px] p-[6px] h-fit cursor-pointer" onClick={() => setIsModalOpen1(false)}>
                  <RxCross1 size={22} />
                </div>
              </div>
              <div className="w-full border border-[#F4F6F7] my-8" />
              <p className="font-medium text-sm text-headingBlack mb-4">
                Please complete the details below
              </p>
              {/* FORM */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="fullName"
                    className=" leading-5 font-medium text-sm text-headingBlack"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="py-2.5 mt-1.5 px-3.5 text-base font-normal border-[#D0D5DD] border leading-6 outline-none rounded-lg text-textBlack "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="jobTitle"
                    className=" leading-5 font-medium text-sm text-headingBlack"
                  >
                    Job Title
                  </label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    className="py-2.5 mt-1.5 px-3.5 text-base font-normal border-[#D0D5DD] border leading-6 outline-none rounded-lg text-textBlack "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="practiceName"
                    className=" leading-5 font-medium text-sm text-headingBlack"
                  >
                    Practice Name
                  </label>
                  <input
                    id="practiceName"
                    name="practiceName"
                    type="text"
                    className="py-2.5 mt-1.5 px-3.5 text-base font-normal border-[#D0D5DD] border leading-6 outline-none rounded-lg text-textBlack "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="practiceAddress"
                    className=" leading-5 font-medium text-sm text-headingBlack"
                  >
                    Practice Address
                  </label>
                  <input
                    id="practiceAddress"
                    name="practiceAddress"
                    type="text"
                    className="py-2.5 mt-1.5 px-3.5 text-base font-normal border-[#D0D5DD] border leading-6 outline-none rounded-lg text-textBlack "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="practicePostcode"
                    className=" leading-5 font-medium text-sm text-headingBlack"
                  >
                    Practice Postcode
                  </label>
                  <input
                    id="practicePostcode"
                    name="practicePostcode"
                    type="text"
                    className="py-2.5 mt-1.5 px-3.5 text-base font-normal border-[#D0D5DD] border leading-6 outline-none rounded-lg text-textBlack "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className=" leading-5 font-medium text-sm text-headingBlack"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="py-2.5 mt-1.5 px-3.5 text-base font-normal border-[#D0D5DD] border leading-6 outline-none rounded-lg text-textBlack "
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="phone-number"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Phone number
                  </label>
                  <div className="mt-[6px]">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 ">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2.5 pl-3.5 pr-7 text-base text-[#101828] placeholder:text-[#667085] "
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                        <IoChevronDownOutline
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="message"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Vacancy details
                  </label>
                  <div className="mt-[6px]">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Type here..."
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none resize-none"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <button className="text py-[11px] px-3.5 rounded-[8px] text-lg text-black font-medium border border-[#D5E1EA]" onClick={() => setIsModalOpen1(false)}>
                    Cancel
                  </button>
                  <button className="text py-[11px] bg-primaryPurple text-white px-3.5 rounded-[8px] text-lg font-medium">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen2 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full p-6 max-h-[90vh]">

            <div className="overflow-y-auto max-h-[calc(100vh-170px)] ">
              <div className="flex">
                <div className="flex-grow">
                  <h3 className="text-primaryPurple mb-4 font-semibold text-[22px]">
                    EA Dental Backend - Candidate
                  </h3>
                  <p className="text-sm font-semibold text-primaryPurple">
                    We find jobs for Dentists, Dental care professionals &
                    Specialist Dentists throughout the UK.
                  </p>
                </div>
                <div className="bg-[#F4F6F7] rounded-[6px] p-[6px] h-fit cursor-pointer" onClick={() => setIsModalOpen2(false)}>
                  <RxCross1 size={22} />
                </div>
              </div>
              <div className="flex gap-3 p-4 items-start rounded-[9px] bg-[#ECF1FF] my-6">
                <div className="h-6 w-6 rounded-md bg-primaryPurple flex justify-center items-center p-1"><BsExclamationCircle color="white" /></div>
                <div className="flex-grow"><p className="text-xs font-normal text-[#3D3D3D]">If you are a dentist seeking a new associate, PLVE or a permanent position, please register your CV below in addition to detailing your requirements, e.g. full or part-time, days available, location, etc. and we will be in touch directly to advise you of the next steps and how EA DENTAL can help you find your perfect match.</p></div>
              </div>
              <div className="flex gap-3 items-center p-4 rounded-[9px] bg-[#ECFDF3]">
                <div className="h-6 w-6 rounded-md bg-[#12B76A] flex justify-center items-center p-1"><CiLock color="white" /></div>
                <div className="flex-grow"><p className="text-xs font-normal text-[#3D3D3D]">All information is secure and confidential.</p></div>
              </div>
              <div className="my-8">
                <p className="font-medium text-sm text-headingBlack mb-4">
                  Please complete the details below
                </p>

                <div className="border border-[#E7E7E7] rounded-lg p-3 gap-3 flex items-center">
                  <p className="text-primaryPurple text-base font-medium">
                    Personal Information
                  </p>
                  <HiMiniChevronDoubleRight color="#22207E" size={22} />
                  <p className="text-[#B0B0B0] text-base font-medium">
                    Other Relevant Qualifications
                  </p>
                  <HiMiniChevronDoubleRight color="#B0B0B0" size={22} />
                  <p className="text-[#B0B0B0] text-base font-medium">
                    Right To Work
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-1/2">
                    <label
                      htmlFor="first-name"
                      className="block text-[14px] font-medium text-[#344054]"
                    >
                      First name
                    </label>
                    <div className="mt-[6px]">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="last-name"
                      className="block text-[14px] font-medium text-[#344054]"
                    >
                      Last name
                    </label>
                    <div className="mt-[6px]">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full">
                  <div className="w-1/2">
                    <label
                      htmlFor="town-city"
                      className="block text-[14px] font-medium text-[#344054]"
                    >
                      Town/City
                    </label>
                    <div className="mt-[6px]">
                      <input
                        id="town-city"
                        name="town-city"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="postcode"
                      className="block text-[14px] font-medium text-[#344054]"
                    >
                      Postcode
                    </label>
                    <div className="mt-[6px]">
                      <input
                        id="postcode"
                        name="postcode"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="town-city"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Town/City
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="town-city"
                      name="town-city"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="phone-number"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Phone number
                  </label>
                  <div className="mt-[6px]">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 ">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2.5 pl-3.5 pr-7 text-base text-[#101828] placeholder:text-[#667085] "
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                        <IoChevronDownOutline
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className=" leading-5 font-medium text-sm text-headingBlack"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="py-2.5 mt-1.5 px-3.5 text-base font-normal border-[#D0D5DD] border leading-6 outline-none rounded-lg text-textBlack "
                  />
                </div>
                <div className="">
                  <p className="font-medium text-sm text-headingBlack mb-4">
                    Do you have an active GDC registration?
                  </p>

                  <div className="flex gap-4">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"

                      >
                        <input
                          name="framework"
                          type="radio"
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primaryPurple transition-all"
                          id="html"
                        />
                        <span className="absolute bg-primaryPurple w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-headingBlack cursor-pointer text-sm"
                        htmlFor="html"
                      >
                        Yes
                      </label>
                    </div>

                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="react"
                      >
                        <input
                          name="framework"
                          type="radio"
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primaryPurple transition-all"
                          id="react"
                        />
                        <span className="absolute bg-primaryPurple w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-headingBlack cursor-pointer text-sm"

                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="joblocationpreference"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Job Location Preference
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="joblocationpreference"
                      name="joblocationpreference"
                      type="text"
                      placeholder="Type here..."
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <button className="text py-[10px] px-3.5 rounded-[8px] text-lg text-black font-medium border border-[#D5E1EA]" onClick={() => setIsModalOpen2(false)}>
                    Cancel
                  </button>
                  <div className="flex gap-4 mt-4">
                    <button className="text py-[10px] opacity-55 px-3.5 rounded-[8px] text-lg text-black font-medium border border-[#D5E1EA]">
                      Back
                    </button>
                    <button className="text py-[10px] bg-primaryPurple text-white px-3.5 rounded-[8px] text-lg font-medium">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen3 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full p-6 max-h-[90vh]">

            <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
              <div className="flex">
                <div className="flex-grow">
                  <h3 className="text-primaryPurple mb-4 font-semibold text-[22px]">
                    EA Dental Backend - Candidate
                  </h3>
                  <p className="text-sm font-semibold text-primaryPurple">
                    We find jobs for Dentists, Dental care professionals &
                    Specialist Dentists throughout the UK.
                  </p>
                </div>
                <div className="bg-[#F4F6F7] rounded-[6px] p-[6px] h-fit cursor-pointer" onClick={() => setIsModalOpen3(false)}>
                  <RxCross1 size={22} />
                </div>
              </div>
              <div className="w-full border border-[#F4F6F7] my-8" />
              <div>
                <p className="font-medium text-sm text-headingBlack mb-4">
                  Please complete the details below
                </p>

                <div className="border border-[#E7E7E7] rounded-lg p-3 gap-3 flex items-center">
                  <p className="text-primaryPurple text-base font-medium">
                    Personal Information
                  </p>
                  <HiMiniChevronDoubleRight color="#22207E" size={22} />
                  <p className="text-primaryPurple text-base font-medium">
                    Other Relevant Qualifications
                  </p>
                  <HiMiniChevronDoubleRight color="#22207E" size={22} />
                  <p className="text-[#B0B0B0] text-base font-medium">
                    Right To Work
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-10">
                <div className="">
                  <label
                    htmlFor="countrydegreeobtained"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    In which country did you obtain your dental degree
                    qualification
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="countrydegreeobtained"
                      name="countrydegreeobtained"
                      type="text"
                      placeholder="Type here..."
                      autoComplete="countrydegreeobtained"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="BOSUniversity"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Which University issued your BOS
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="BOSUniversity"
                      name="BOSUniversity"
                      type="text"
                      placeholder="Type here..."
                      autoComplete="BOSUniversity"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="BOSEquivalent"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    What year did you obtain your BOS or equivalent
                    qualification?
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="BOSEquivalent"
                      name="BOSEquivalent"
                      type="text"
                      placeholder="Type here..."
                      autoComplete="BOSEquivalent"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>

                <div className="">
                  <p className="font-medium text-sm text-headingBlack mb-4">
                    Do you have an active GDC registration?
                  </p>

                  <div className="flex gap-4">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"

                      >
                        <input
                          name="framework"
                          type="radio"
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primaryPurple transition-all"
                          id="html"
                        />
                        <span className="absolute bg-primaryPurple w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-headingBlack cursor-pointer text-sm"
                        htmlFor="html"
                      >
                        Yes
                      </label>
                    </div>

                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="react"
                      >
                        <input
                          name="framework"
                          type="radio"
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primaryPurple transition-all"
                          id="react"
                        />
                        <span className="absolute bg-primaryPurple w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-headingBlack cursor-pointer text-sm"

                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="postGradExperience"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    How many years of Postgraduate eperience do you have?
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="postGradExperience"
                      name="postGradExperience"
                      type="text"
                      placeholder="Type here..."
                      autoComplete="postGradExperience"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button className="text py-[10px] px-3.5 rounded-[8px] text-lg text-black font-medium border border-[#D5E1EA]" onClick={() => setIsModalOpen3(false)}>
                    Cancel
                  </button>
                  <div className="flex gap-4 mt-4">
                    <button className="text py-[10px] px-3.5 rounded-[8px] text-lg text-black font-medium border border-[#D5E1EA]">
                      Back
                    </button>
                    <button className="text py-[10px] bg-primaryPurple text-white px-3.5 rounded-[8px] text-lg font-medium">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen4 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full p-6 max-h-[90vh]">


            <div className="overflow-y-auto overflow-x-hidden max-h-[calc(100vh-180px)]">
              <div className="flex">
                <div className="flex-grow">
                  <h3 className="text-primaryPurple mb-4 font-semibold text-[22px]">
                    EA Dental Backend - Candidate
                  </h3>
                  <p className="text-sm font-semibold text-primaryPurple">
                    We find jobs for Dentists, Dental care professionals &
                    Specialist Dentists throughout the UK.
                  </p>
                </div>
                <div className="bg-[#F4F6F7] rounded-[6px] p-[6px] h-fit cursor-pointer" onClick={() => setIsModalOpen4(false)}>
                  <RxCross1 size={22} />
                </div>
              </div>
              <div className="w-full border border-[#F4F6F7] my-8" />
              <div>
                <p className="font-medium text-sm text-headingBlack mb-4">
                  Please complete the details below
                </p>

                <div className="border border-[#E7E7E7] rounded-lg p-3 gap-3 flex items-center">
                  <p className="text-primaryPurple text-base font-medium">
                    Personal Information
                  </p>
                  <HiMiniChevronDoubleRight color="#22207E" size={22} />
                  <p className="text-primaryPurple text-base font-medium">
                    Other Relevant Qualifications
                  </p>
                  <HiMiniChevronDoubleRight color="#22207E" size={22} />
                  <p className="text-primaryPurple text-base font-medium">
                    Right To Work
                  </p>
                </div>
              </div>
              {/* Radio */}
              <div className="mt-7 mb-6">
                <p className="font-medium text-sm text-headingBlack mb-4">
                  Do you currently hold eligibility to work in the UK?
                </p>

                <div className="flex gap-4">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center cursor-pointer"

                    >
                      <input
                        name="framework"
                        type="radio"
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primaryPurple transition-all"
                        id="html"
                      />
                      <span className="absolute bg-primaryPurple w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                    </label>
                    <label
                      className="ml-2 text-headingBlack cursor-pointer text-sm"
                      htmlFor="html"
                    >
                      Yes
                    </label>
                  </div>

                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center cursor-pointer"
                      htmlFor="react"
                    >
                      <input
                        name="framework"
                        type="radio"
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primaryPurple transition-all"
                        id="react"
                      />
                      <span className="absolute bg-primaryPurple w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                    </label>
                    <label
                      className="ml-2 text-headingBlack cursor-pointer text-sm"

                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* Nationality */}

              <div className="mb-5">
                <label
                  htmlFor="contact-method"
                  className="block text-[14px] font-medium text-[#344054]"
                >
                  Your Nationality
                </label>
                <div className="mt-[6px]">
                  <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 ">
                    <div className="grid shrink-0 grid-cols-1 w-full  focus-within:relative">
                      <select className="col-start-1  row-start-1 w-full appearance-none rounded-md py-2.5 pl-3.5 pr-7 text-base text-[#101828] placeholder:text-[#667085] ">
                        <option>Nationality</option>
                        <option>American</option>
                        <option>Indian</option>
                      </select>
                      <IoChevronDownOutline
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>
                    <input
                      id="contact-method"
                      name="contact-method"
                      type="text"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-[#101828] placeholder:text-[#667085] focus:outline focus:outline-0 text-[16px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex ">
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primaryPurple checked:border-slate-800"
                      id="check"
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <p className="text-headingBlack text-sm font-medium leading-5 ml-2.5">
                  I Agree
                </p>
              </div>
              <p className="text-xs text-[#888888] leading-5 font-normal mb-8 mt-2">
                I hereby give my consent to EA Dental to use and share my
                information provided in the application with employers for
                recruitment purposes. I confirm that the information provided in
                this application form is true, accurate, complete and up-to-date
                to the best of my knowledge. In the event that the information
                submitted to EA Dental becomes incorrect, inaccurate, incomplete
                or out-of-date, I am responsible to submit appropriately revised
                information to the Agency as soon as is reasonably possible.
              </p>
              <div className="flex justify-between items-center">
                <button onClick={() => setIsModalOpen4(false)} className="text py-[10px] px-3.5 rounded-[8px] text-lg text-black font-medium border border-[#D5E1EA]">
                  Cancel
                </button>
                <div className="flex gap-4 mt-4">
                  <button className="text py-[10px] px-3.5 rounded-[8px] text-lg text-black font-medium border border-[#D5E1EA]">
                    Back
                  </button>
                  <button className="text py-[10px] bg-primaryPurple text-white px-3.5 rounded-[8px] text-lg font-medium">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

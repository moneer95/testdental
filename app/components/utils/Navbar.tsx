"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import logo from "../../../public/imgs/logo.png";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const { cart } = useAppContext();
  // console.log(cartItems);
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    if (newState) {
      document.body.classList.add("__nav_open__");
    } else {
      document.body.classList.remove("__nav_open__");
    }
    setMobileMenuOpen(newState);
  };
  //   useEffect(() => {
  //     if (isMobileMenuOpen) {
  //       document.querySelector(".__nav__")!.classList.remove("hidden");
  //     } else {
  //       setTimeout(() => {
  //         document.querySelector(".__nav__")!.classList.add("hidden");
  //       }, 1000);
  //     }
  //   }, [isMobileMenuOpen]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
    setNumberOfCartItems(storedCart.length); // Update the number of items
  }, [cart]);

  return (
    <div className="relative">
      <header className="p-4 w-full z-[9999] bg-transparent">
        <nav className="container px-12 max-lg:px-0 mx-auto flex justify-between items-center max-md:gap-5">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            <Link href="/">
              <Image
                src={logo}
                width={1000}
                height={1000}
                className="object-cover object-center w-[180.79px] min-w-[90px]"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 max-lg:space-x-2">
            <Link
              href="/Courses"
              className="text-[#616180] font-medium hover:text-gray-300 transition duration-200"
            >
              Courses
            </Link>
            <Link
              href="/Products"
              className="text-[#616180] font-medium hover:text-gray-300 transition duration-200"
            >
              Products
            </Link>
            <Link
              href="/Venue"
              className="text-[#616180] font-medium hover:text-gray-300 transition duration-200"
            >
              Venue
            </Link>
            <Link
              href="/Recruitment"
              className="text-[#616180] font-medium hover:text-gray-300 transition duration-200"
            >
              Recruitment
            </Link>
            <Link
              href="/Contact"
              className="text-[#616180] font-medium hover:text-gray-300 transition duration-200"
            >
              Contact
            </Link>
            <Link
              href="/Team"
              className="text-[#616180] font-medium hover:text-gray-300 transition duration-200"
            >
              Team
            </Link>
          </div>

          {/* Add to Cart and Sign Up */}
          <div className="flex justify-start items-center gap-5 max-md:gap-2">
            <Link
              href="/Cart"
              className="flex justify-start items-center gap-2 cursor-pointer"
            >
              <div className="relative">
                <BsCart3 className="h-[15.19px] w-[15.19px]" />
                <p className="absolute -top-2 bg-primaryPurple text-white rounded-full w-[15px] h-[15px] text-[10px] text-center -left-2">
                  {numberOfCartItems}
                </p>
              </div>
              <p className="text-[#000000] font-medium">Cart</p>
            </Link>
            <button className="w-[80px] h-[35px] bg-[#22207E] max-sm:w-[60px] max-sm:h-[28px] max-sm:text-[12px] text-white rounded-md font-medium cursor-pointer">
              Sign in
            </button>
            {/* Hamburger Menu Icon */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`__nav__ overflow-hidden md:hidden z-[999] transition-all duration-300 transform absolute top-16 right-0 bg-primarySkyBlue h-screen ${
            isMobileMenuOpen ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/Courses"
              className="text-textBlack transition duration-200"
              onClick={toggleMobileMenu}
            >
              Courses
            </Link>
            <Link
              href="/Products"
              className="text-textBlack transition duration-200"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <Link
              href="/Venue"
              className="text-textBlack transition duration-200"
              onClick={toggleMobileMenu}
            >
              Venue
            </Link>
            <Link
              href="/Recruitment"
              className="text-textBlack transition duration-200"
              onClick={toggleMobileMenu}
            >
              Recruitment
            </Link>
            <Link
              href="/Contact"
              className="text-textBlack transition duration-200"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="/Team"
              className="text-textBlack transition duration-200"
              onClick={toggleMobileMenu}
            >
              Team
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

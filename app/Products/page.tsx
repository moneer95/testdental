"use client";

import React, { useEffect } from "react";
import Filter from "../components/products/Filter";
import Products from "../components/products/Products";
import { GiHamburgerMenu } from "react-icons/gi";

function Page() {
  const [filter, setFilter] = React.useState<boolean>(true);



  const handleOpenFilter = () => {
    setFilter((prev) => !prev);
  };

  return (
    <div className=" min-h-screen container px-20 max-lg:px-12 max-sm:px-4 mx-auto">
      <h2 className="text-[24px] font-semibold">Products</h2>

      <div className="flex justify-between items-start mt-6">
        <div onClick={handleOpenFilter} className="2xl:hidden cursor-pointer">
          <GiHamburgerMenu />
        </div>

        {filter && (
          <div className="w-[20%] max-sm:w-[40%] max-xl:absolute max-2xl:top-24  max-2xl:left-20 bg-white z-10">
            <Filter />
          </div>
        )}
        <div className="w-[80%]">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Page;

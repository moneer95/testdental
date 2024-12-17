"use client";

import React, { useEffect } from "react";
import Courses from "../components/courses/Courses";
import Filter from "../components/courses/Filter";
import { GiHamburgerMenu } from "react-icons/gi";

function Page() {
  // const [filter, setFilter] = React.useState(() => window.innerWidth > 1536);
  const [filter, setFilter] = React.useState<boolean>(true);


  const handleOpenFilter = () => {
    setFilter((prev) => !prev);
  };

  return (
    <div className=" min-h-screen container px-20 max-lg:px-12 max-sm:px-4 mx-auto">
      <h2 className="text-[24px] font-semibold">Courses</h2>

      <div className="flex justify-between items-start mt-6 gap-6 relative">
        <div onClick={handleOpenFilter} className="2xl:hidden cursor-pointer">
          <GiHamburgerMenu />
        </div>
        {filter && (
          <div className="w-[20%] max-sm:w-[40%] max-xl:absolute max-2xl:top-0 max-2xl:left-10 bg-white z-10">
            <Filter />
          </div>
        )}
        <div className="w-full">
          <Courses />
        </div>
      </div>
    </div>
  );
}

export default Page;

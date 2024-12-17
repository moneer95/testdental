'use client'

import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
function CourseContent() {

    const [openConent, setOpenConent] = useState(false)

    const handleToogleCotent = () => {
        setOpenConent((prev) => !prev)
    }

    

    return (
        <div>

            <div>
                <div className='flex justify-between items-center  w-full my-2 py-4 font-medium cursor-pointer' onClick={handleToogleCotent}>
                    <p>Cotent</p>
                    <div>
                        {openConent ? (
                            <MdKeyboardArrowUp />
                        ) : (
                            <MdKeyboardArrowDown size={20} />
                        )}
                    </div>
                </div>
                {openConent && (
                    <div>
                        <p className='text-textBlack text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam eveniet quos quisquam inventore quae placeat excepturi illum enim iusto laborum beatae, dignissimos non fugiat eos nihil tempore rerum cum soluta. Eaque sed error perspiciatis, reiciendis voluptatum modi omnis animi.</p>
                    </div>
                )}
            </div>

        </div >
    )
}

export default CourseContent
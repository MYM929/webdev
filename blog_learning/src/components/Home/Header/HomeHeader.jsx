import React, { useState } from "react";
import { BsMedium } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";

const HomeHeader = () => {
  return (
    <header className="border-b border-grey-200">
      <div className="size h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <span className="text-5xl"><BsMedium/></span> {/* Medium icon */}
          </Link>
          <Search/>
        </div>
        <div className="flex items-center gap-3 sm:gap-7">
          <Link to={"/write"} className="hidden md:flex items-center gap-1 text-grey-500">
            <span className="text-3xl"><LiaEditSolid/></span>  {/* write icon */}
            <span className="text-sm mt-2">Write</span>
          </Link>
          <span className="text-3xl text-grey-500 cursor-pointer">
            <IoMdNotificationsOutline/> {/* Notification icon */}
          </span> 
          <div className="flex items-center relative">
            <img 
              className="w-[2.3rem] hr-[2.3rem] object-cover rounded-full cursor-pointer" 
              src="/profile.jpg" alt="profile-img" 
            />  {/* Profile image */}
            <span className="text-grey-500 cursor-pointer">
              <MdKeyboardArrowDown/> {/* Drop down icon */}
            </span>
          </div>
        </div>
      </div>
    </header> 
  )
}

export default HomeHeader
import React, { useState } from "react";
import { BsMedium } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import Modal from "../../../utils/Modal";
import UserModal from "./UserModal";
import { Blog } from "../../../Context/Context";
import Loading from "../../Loading/Loading";

const HomeHeader = () => {

  const [modal, setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { allUsers, userLoading, currentUser, setPublish } = Blog();
  const getUserData = allUsers.find(
    (user) => user.id === currentUser?.uid
  );

  const { pathname } = useLocation();
  const editPath = pathname.split("/")[1];
  const postId   = pathname.split("/")[2];
  // console.log(pathname);















  return (
    <header className="border-b border-grey-200">
      {userLoading && <Loading/>}
      <div className="size h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <span className="text-5xl"><BsMedium/></span> {/* Medium icon */}
          </Link>
          <Search searchModal={searchModal} setSearchModal={setSearchModal}/> {/* Search modal */}
        </div>
        <div className="flex items-center gap-3 sm:gap-7">
          <span 
            onClick={() => setSearchModal(true)}
            className="flex sm:hidden text-3xl text-gray-300 cursor-pointer">
            <CiSearch/> {/* Small device search Icon */}
          </span>

          {/* write to publish button */}
          {pathname === "/write" 
            ?
            (
              <button 
                onClick={() => setPublish(true)}
                className="btn !bg-green-700 !py-1 !text-white !rounded-full">
                Publish
              </button>
            )
            : editPath === "editPost"
            ?
            (
              <button
                onClick={handleEdit}
                className={`btn !bg-green-700 !py-1 !text-write !rounded-full
                            ${loading ? "opacity-40" : ""}`}>
                {loading ? "updating..." : "Save and Update"}
              </button>
            )
            :
            (
              <Link to={"/write"} className="hidden md:flex items-center gap-1 text-grey-500">
              <span className="text-3xl"><LiaEditSolid/></span>  {/* write icon */}
              <span className="text-sm mt-2">Write</span>
             </Link>
            )
          }







          <span className="text-3xl text-grey-500 cursor-pointer">
            <IoMdNotificationsOutline/> {/* Notification icon */}
          </span> 
          <div className="flex items-center relative">
            <img 
              onClick={() => setModal(true)}
              className="w-[2.3rem] hr-[2.3rem] object-cover rounded-full cursor-pointer" 
              src={getUserData?.userImg ? getUserData?.userImg : "/profile.jpg"} alt="profile-img" 
            />  {/* Profile image */}
            <span className="text-grey-500 cursor-pointer">
              <MdKeyboardArrowDown/> {/* Drop down icon */}
            </span>
            <Modal modal={modal} setModal={setModal}>
              <div
                className={`${modal ? "visible opacity-100%" : "invisible opacity-0"}
                            transition-all duration-100`}>
                <UserModal setModal={setModal}/>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header> 
  )
}

export default HomeHeader
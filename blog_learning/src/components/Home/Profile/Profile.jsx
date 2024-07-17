import React, { useState } from 'react'
import ProfileHome from './Activities/ProfileHome';
import ProfileLists from './Activities/ProfileLists';
import ProfileAbout from './Activities/ProfileAbout';
import Modal from '../../../utils/Modal';
import { LiaTimesSolid } from "react-icons/lia";
import { discoverActions } from '../../../data';
import { IoSettingsSharp } from "react-icons/io5";
import EditProfile from './EditProfile';
import { Blog } from "../../../Context/Context";
import { useParams } from "react-router-dom";
import useSingleFetch from '../../hooks/useSingleFetch';

const Profile = () => {

  const activities = [
    {title: "Home" , comp: ProfileHome ,},
    {title: "Lists", comp: ProfileLists,},
    {title: "About", comp: ProfileAbout,},
  ];

  //Holds the current activity modal
  const [currentActive, setCurrentActive] = useState(activities[0]);
  //set the modal for small screen user details
  const [modal, setModal] = useState(false);
  //set the modal for edit profile
  const [editModal, setEditModal] = useState(false);


  //get all the user objects
  const { allUsers } = Blog();
  //destructured the userId from URL Parameters
  const { userId } = useParams();
  const getUserData = allUsers.find(
    (user) => user.id === userId
  );
  //console.log(getUserData);


  //get the follower data
  const { data:follows   } = useSingleFetch("users", userId, "follows");
  const { data:followers } = useSingleFetch("users", userId, "followers");









  return (
    <section className='size flex gap-[4rem] relative'>






        {/* User activity */} {/* user activity will take 2 space */}
        <div className='mt-[9rem] flex-[2]'> 
            <div className='flex items-end gap-4'>
                <h2 className='text-3xl sm:text-5xl font-bold capitalize'>
                    {getUserData?.username} {/* Username */}
                </h2>
                <p className='text-gray-500 text-xs sm:text-sm'>
                    Followers({followers.length}) {/* Followers */}
                </p>
                <p className='text-gray-500 text-xs sm:text-sm'>
                    Following({follows.length}) {/* Followings */}
                </p>
            </div>
            <div className='flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]'>
                {activities.map((item, i) => (
                    <div key={i} className={`py-[0.5rem]
                                             ${item.title===currentActive.title  
                                             ? "border-b border-gray-500" 
                                             : ""}`}>
                        <button onClick={() => setCurrentActive(item)}>
                            {item.title} {/* Home, List, About */}
                        </button> 
                    </div>
                ))}
            </div>
            <currentActive.comp getUserData={getUserData} setEditModal={setEditModal}/>
        </div>


        



        {/* button to open the side bar */}
        <button 
            onClick={() => setModal(true)}
            className='fixed top-[8rem] right-0 w-[2rem] h-[2rem] bg-black text-white
                       grid place-items-center md:hidden'>
            <IoSettingsSharp/>
        </button>









        {/* user details */} {/* user details will take 1 space */}
        <Modal modal={modal} setModal={setModal}>
            <div className={`flex-[1] border-l border-gray-300 p-[2rem] z-10
                             fixed right-0 bottom-0 top-0 w-[18rem] bg-white md:sticky
                             ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"}
                             transition-all duration-500`}> 
                <div className='pb-4 text-right'>
                    <button
                        onClick={() => setModal(false)} 
                        className='inline-block md:hidden'>
                        <LiaTimesSolid/> {/* close button icon */}
                    </button>
                </div>
                <div className='sticky top-7 flex flex-col justify-between'>
                    <img               // Profile image
                        className='w-[3.5rem] h-[3.5rem] object-cover rounded-full'
                        src={getUserData?.userImg || "/profile.jpg" }
                        alt="profile-img" 
                    />
                    <h2 className='py-2 font-bold capitalize'>
                        Yongming Mai {/* Username */}
                    </h2> 
                    <p className='text-gray-500 first-letter:uppercase text-sm'>
                        I am a content creator in Youtube channel. {/* Bio description */}
                    </p>
                    <button
                        onClick={() => setEditModal(true)} 
                        className='text-green-700 pt-6 text-sm w-fit'>
                        Edit Profile {/* Edit Profile button */}
                    </button>
                    <div className='flex-[1] flex items-center flex-wrap gap-3 pt-8'>
                        {discoverActions.map((item) => (
                            <button key={item} className='text-xs text-black1'>
                                {item} {/* discoverActions small buttons */}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>


        {/* Edit Profile display */}
        {editModal && 
            <EditProfile editModal={editModal} 
            setEditModal={setEditModal}
            getUserData={getUserData}/>
        }



    </section>
  )
}

export default Profile
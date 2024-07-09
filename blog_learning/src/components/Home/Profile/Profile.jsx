import React, { useState } from 'react'
import ProfileHome from './Activities/ProfileHome';
import ProfileLists from './Activities/ProfileLists';
import ProfileAbout from './Activities/ProfileAbout';

const Profile = () => {

  const activities = [
    {title: "Home" , comp: ProfileHome ,},
    {title: "Lists", comp: ProfileLists,},
    {title: "About", comp: ProfileAbout,},
  ];

  //Holds the current activity modal
  const [currentActive, setCurrentActive] = useState(activities[0]);










  return (
    <section className='size flex gap-[4rem] relative'>
        {/* User activity */}
        <div className='mt-[9rem] flex-[2]'>
            <div className='flex items-end gap-4'>
                <h2 className='text-3xl sm:text-5xl font-bold capitalize'>
                    Yongming Mai {/* Username */}
                </h2>
                <p className='text-gray-500 text-xs sm:text-sm'>
                    Followers(2) {/* Followers */}
                </p>
                <p className='text-gray-500 text-xs sm:text-sm'>
                    Following(2) {/* Followings */}
                </p>
            </div>
            <div className='flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]'>
                {activities.map((item) => (
                    <div className={`py-[0.5rem]
                                     ${item.title===currentActive.title  
                                     ? "border-b border-gray-500" 
                                     : ""}`}>
                        <button onClick={() => setCurrentActive(item)}>
                            {item.title} {/* Home, List, About */}
                        </button> 
                    </div>
                ))}
            </div>
            <currentActive.comp/>
        </div>
    </section>
  )
}

export default Profile
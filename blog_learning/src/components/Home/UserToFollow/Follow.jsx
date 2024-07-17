import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { Blog } from '../../../Context/Context';
import FollowBtn from './FollowBtn';

const Follow = () => {

  // get users data
  const { data, loading } = useFetch("users");
  const { currentUser } = Blog();
  // get first 5 of the users data and filter out me
  const [count, setCount] = useState(5);
  const users = data && data?.slice(0, count).filter(
    (user) => user.userId!==currentUser?.uid
  );
  // console.log(users);

















  return (
    <>
      {
        data && 
        users?.map((user, i) => {

          const {username, bio, userImg, userId} = user;

          return (
            <div key={i} className='flex items-start gap-2 my-4'>
              <div className='flex-1 flex items-center gap-2 cursor-pointer'>
                <img // Follow round image
                  className='w-[3rem] h-[3rem] object-cover gap-2 cursor-pointer rounded-full' 
                  src={userImg} alt="userImg" 
                />
                <div className='flex flex-col gap-1'>
                  <h2 className='font-bold capitalize'>{username}</h2> {/* Follow username */}
                  <span className='leading-4 text-gray-500 text-sm line-clamp-2'>
                    {bio || "This user has no bio"} {/* Follow bio */}
                  </span> 
                </div>
              </div>
              <FollowBtn/> {/* Follow button */}
            </div>
          )
        })
      }
    </>
  )
}

export default Follow
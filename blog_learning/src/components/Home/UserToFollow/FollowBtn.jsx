import React, { useEffect, useState } from 'react'
import { Blog } from '../../../Context/Context';
import { toast } from "react-toastify";
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import useSingleFetch from '../../hooks/useSingleFetch';

const FollowBtn = ({ userId }) => {

  const [isFollowed, setIsFollowed] = useState(false);
  const { currentUser } = Blog();

  const { data, loading } = useSingleFetch(
    "users", currentUser?.uid, "follows"
  );
  useEffect(() => {
    // indicates whether the specific user (userId) 
    // is followed by the current user
    setIsFollowed(
      data && data?.findIndex((item) => item.id===userId) !== -1
    );
  }, [data]);



  const handleFollow = async () => {
    try {
      if(currentUser){
        const followRef = doc(
          db, "users", currentUser?.uid, "follows", userId
        );
        const followerRef = doc(
          db, "users", userId, "followers", currentUser?.uid
        );


        if(isFollowed){
          await deleteDoc(followRef);
          await deleteDoc(followerRef);
          toast.success("User is unFollowed");
        }
        else{
          await setDoc(followRef  , {userId: userId});
          await setDoc(followerRef, {userId: userId});
          toast.success("User is Followed");
        }
      } 
    } 
    catch (error) {
      toast.error(error.message);
    }
  }













  return (
    <>
      <button 
        onClick={handleFollow}
        className='border border-black px-3 py-[0.2rem] rounded-full'>
        {isFollowed ? "Followed" : "Follow"}
      </button>
    </>
  )
}

export default FollowBtn
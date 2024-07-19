import React, { useState } from 'react'
import { Blog } from '../../../Context/Context'
import moment from 'moment';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import DropDown from '../../../utils/DropDown';

const Comment = ({item: comment, postId}) => {

  const { currentUser, allUsers } = Blog();
  const getUserData = allUsers.find(
    (user) => user.id===comment?.userId
  )
  const {userId, commentText, created} = comment;
  const [drop, setDrop] = useState(false);
  const [more, setMore] = useState(false);











  return (
    <section className='border-b'>
        <div className='flex items-center gap-5 pt-[1rem]'>
            <img // Profile image
                className='w-[2rem] h-[2rem] object-cover rounded-full' 
                src={getUserData?.userImg || "/profile.jpg"} 
                alt="user-img" 
            />
            <div className='flex-1 flex justify-between'>
                <div className=''>
                    <h2 className='text-sm capitalize'>
                        {getUserData?.username} {/* Username */}
                    </h2> 
                    <p className='text-sm text-gray-400'>
                        {moment(created).fromNow()} {/* mins ago */}
                    </p>
                </div>
                <div className='relative'>
                    {
                        currentUser && currentUser?.uid===userId && 
                        (
                            <>
                                <button
                                    onClick={() => setDrop(!drop)} 
                                    className='text-2xl hover:opacity-70'>
                                    <BiDotsHorizontalRounded/> {/* Three dots icon */}
                                </button>
                                <DropDown showDrop={drop} setShowDrop={setDrop} size="w-[10rem]">
                                    <Button click="" title="Edit this response"/>  {/* Dropdown 1 */}
                                    <Button click="" title="Delete"/> {/* Dropdown 2 */}
                                </DropDown>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
        <p className='py-4 text-sm'> 
            {more ? commentText : commentText.substring(0,100)} {/* Comment text area */}
            {
                commentText.length > 100 &&
                (
                    <button onClick={() => setMore(!more)}>
                        {more ? "...less" : "...more"}
                    </button>
                )
            }
        </p> 
    </section>
  )
}

export default Comment



const Button = ({click, title}) => {
    return(
        <button className='p-2 hover:bg-gray-200 text-black/80 w-full text-sm text-left'>
            {title}
        </button>
    )
}
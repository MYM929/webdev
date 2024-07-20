import React, { useState } from 'react'
import { Blog } from '../../../Context/Context'
import moment from 'moment';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import DropDown from '../../../utils/DropDown';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { toast } from 'react-toastify';

const Comment = ({item: comment, postId}) => {

  const { currentUser, allUsers } = Blog();
  const getUserData = allUsers.find(
    (user) => user.id===comment?.userId
  )
  const {userId, commentText, created} = comment;
  const [drop, setDrop] = useState(false);
  const [more, setMore] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, setEditComment] = useState("");
  const [loading, setLoading] = useState(false);

  const removeComment = async () => {
    try {
        const ref = doc(db, "posts", postId, "comments", comment?.id);
        await deleteDoc(ref);
        setDrop(false);
        toast.success("Comment has been removed")
    } 
    catch (error) {
        toast.error(error.message);
    }
  }

  const editCommentText = () => {
    setIsEdit(true);
    setDrop(false);
    setEditComment(commentText);
  };

  const handleEdit = async () => {
    setLoading(true);
    try {
        const ref = doc(db, "posts", postId, "comments", comment.id);
        await updateDoc(ref, {
            commentText: editComment,
            create: Date.now(),
            userId: currentUser?.uid
        })
        setEditComment("");
        setIsEdit(false);
        setDrop(false);
        toast.success("Comment has been updated");
    } 
    catch (error) {
        toast.error(error.message);
    }
    finally{
        setLoading(false);
    }
  }










  return (
    <section className='border-b'>
        {
            !isEdit // if it !isEdit, display the history comment section
            ?
            (
                <>
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
                                                <Button click={editCommentText} 
                                                        title="Edit this response"/>  {/* Dropdown 1 */}
                                                <Button click={removeComment} title="Delete"/> {/* Dropdown 2 */}
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
                </>
            )
            : 
            (
                <div className='bg-white shadows p-4'>
                    <textarea // textarea to update comments
                        value={editComment}
                        onChange={(e) => setEditComment(e.target.value)}
                        placeholder='Write your update text...'
                        className='w-full resize-none outline-none text-sm'>
                    </textarea>
                    <div className='flex items-center justify-end gap-2'>
                        <button 
                            onClick={() => setIsEdit(false)}
                            className='w-fit text-sm'>
                            Cancel {/* Cancel button */}
                        </button>
                        <button
                            onClick={handleEdit} 
                            className='btn !text-white !bg-green-700 !rounded-full !text-xs'>
                            {loading ? "Updating" : "Update"} {/* Update button */}
                        </button>
                    </div>
                </div>
            )
        }
    </section>
  )
}

export default Comment



const Button = ({click, title}) => {
    return(
        <button
            onClick={click} 
            className='p-2 hover:bg-gray-200 text-black/80 w-full text-sm text-left'>
            {title}
        </button>
    )
}
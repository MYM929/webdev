import React, { useEffect, useState } from 'react'
import Modal from '../../../utils/Modal'
import { LiaTimesSolid } from "react-icons/lia";
import { Blog } from '../../../Context/Context';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import useSingleFetch from '../../hooks/useSingleFetch';
import Loading from '../../Loading/Loading';
import Comment from './Comment';

const Comments = ({postId}) => {

  
  const { currentUser, allUsers, showComment, setShowComment, setCommentLength } = Blog();
  const getUserData = allUsers.find(
    (user) => user.id===currentUser.uid
  )
  const [comment, setComment] = useState("");
  const {data, loading} = useSingleFetch("posts", postId, "comments");
  // console.log(data);

  const writeComment = async () => {
    try {
        if(comment===""){
            toast.error("The input must be filled")
        }

        const commentRef = collection(
            db, "posts", postId, "comments"
        )
        await addDoc(commentRef, {
            commentText: comment,
            created: Date.now(),
            userId: currentUser?.uid
        })
        toast.success("Comment has been added");
        setComment("");
    } 
    catch (error) {
        toast.error(error.message);
    }
  }

  // Update comment length useEffect
  useEffect(() => {
    if(data){
        setCommentLength(data.length);
    }
  }, [data])













  return (
    <Modal modal={showComment} setModal={setShowComment}>
        <section 
            className={`fixed top-0 right-0 bottom-0 z-50 bg-white w-[22rem] shadows p-5
                        overflow-y-auto transition-all duration-500
                        ${showComment ? "translate-x-0" : "translate-x-[23rem]"}`}>
            



            {/* Header */}
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Responses({data.length})</h3> {/* Some text */}
                <button 
                    onClick={() => setShowComment(false)}
                    className='text-xl'>
                    <LiaTimesSolid/> {/* Close icon */}
                </button>
            </div>


            {/* comment form */}
            {
                currentUser &&
                (
                    <div className='shadows p-3 my-5 overflow-hidden'>
                        <div className='flex items-center gap-2 mb-5'>
                            <img className='w-[2rem] h-[2rem] object-cover rounded-full'
                                src={getUserData?.userImg || "/profile.jpg"}
                                alt="user-img" // Profile image
                                />
                            <h3 className='capitalize text-sm'>
                                {getUserData?.username} {/* Username */}
                            </h3>
                        </div>
                        <textarea // Comment textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='What are your thoughts?'
                            className='w-full outline-none resize-none text-sm border px-2 pt-4'>
                        </textarea>
                        <div className='flex items-center justify-end gap-4 mt-[1rem]'>
                            <button
                                onClick={() => setComment("")} 
                                className='text-sm'>
                                Cancel {/* Cancel button */}
                            </button>
                            <button
                                onClick={(writeComment)} 
                                className='btn !text=xs !bg-green-700 !text-white !rounded-full'>
                                Response {/* Response button */}
                            </button>
                        </div>
                    </div>
                )
            }


            {/* Display comment history */}
            {
                data && data?.length===0 
                ? <p>This post has no comments</p>
                :
                (
                    <div className='border-t py-4 mt-8 flex flex-col gap-8'>
                        {
                            data && data.map((item, i) => (
                                loading ? <Loading/> : <Comment item={item} postId={postId} key={i}/>
                            ))
                        }
                    </div>
            
                )
            }
            


        </section>
    </Modal>
  )
}

export default Comments
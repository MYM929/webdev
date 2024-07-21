import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { db } from '../../../firebase/firebase';
import { toast } from "react-toastify";
import Loading from '../../Loading/Loading';
import { Blog } from '../../../Context/Context';
import FollowBtn from '../../Home/UserToFollow/FollowBtn';
import { readTime } from '../../../utils/helper';
import moment from "moment/moment";
import Like from './Actions/Like';
import SavedPost from './Actions/SavedPost';
import SharePost from './Actions/SharePost';
import Actions from "../Posts/Actions/Actions";
import Comment from './Actions/Comment';
import Recommended from './Recommended';
import Comments from '../Comments/Comments';

const SinglePost = () => {



  const {postId} = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const {title, desc, postImg, username, created, userImg, userId} = post;
  const {currentUser} = Blog();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
        setLoading(true);
        try {
            const postRef = doc(db, "posts", postId); 
            const getPost = await getDoc(postRef);
            
            if(getPost.exists()){
                const postData = getPost.data();
                if(postData?.userId){
                    const userRef = doc(db, "users", postData?.userId);
                    const getUser = await getDoc(userRef);

                    if(getUser.exists()){
                        const {created, ...rest} = getUser.data();
                        setPost({...postData, ...rest, id: postId});
                    }
                }
            }
            setLoading(false);
        } 
        catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    fetchPost();
  }, [postId, post?.userId])
  // console.log(post);













  return (
    <>
        {
            loading ? <Loading/> 
            :
            (
                <>
                    <section className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>


                        {/* Title and user */}
                        <h2 className='text-4xl font-extrabold capitalize'>{title}</h2> {/* SinglePost title */}
                        <div className='flex items-center gap-2 py-[2rem]'>
                            <img 
                                onClick={() => navigate(`/profile/${userId}`)}
                                className='w-[3rem] h-[3rem] object-cover rounded-full cursor-pointer' 
                                src={userImg} alt="userImg"  // SinglePost profile image
                            />
                            <div>
                                <div className='capitalize'>
                                    <span>{username} .</span> {/* SinglePost username */}
                                    {
                                        currentUser && currentUser?.uid !== userId &&
                                        (
                                            <FollowBtn userId={userId}/> // SinglePost Following button
                                        )
                                    }
                                </div>
                                <p className='text-sm text-gray-500'>
                                    {readTime({__html : desc})} min read . {/* SinglePost min read */}
                                    <span className='ml-1'>{moment(created).fromNow()}</span> {/* SinglePost days ago */}
                                </p>
                            </div>
                        </div>



                        {/* React/Action icons */}
                        <div className='flex items-center justify-between border-b border-t border-gray-200 py-[0.5rem]'>
                            <div className='flex items-center gap-5'>
                                <Like postId={postId}/> {/* Like button */}
                                <Comment/> {/* Comment button */}
                            </div>
                            <div className='flex items-center pt-2 gap-5'>
                                {post && <SavedPost post={post}/>} {/* SavePost button */}
                                <SharePost/> {/* SharePost button */}
                                {
                                    currentUser && currentUser?.uid===post?.userId && 
                                    <Actions postId={postId} title={title} desc={desc}/> // Actions button 
                                } 
                            </div>
                        </div>


                        {/* Text, description and image */}
                        <div className='mt-[3rem]'>
                            {
                                postImg &&
                                (
                                    <img className='w-full h-[400px] object-cover' 
                                         src={postImg} alt="postImg" // Post Image 
                                    />
                                )
                            }
                            <div className='mt-6' dangerouslySetInnerHTML={{__html: desc}} /> {/* Post description */}
                        </div>


                    </section>


                    {post && <Recommended post={post}/>} {/* Recommended Post */}
                    <Comments postId={postId}/> {/* Comments modal */}

                </>
            )
        }
    </>
  )
}

export default SinglePost
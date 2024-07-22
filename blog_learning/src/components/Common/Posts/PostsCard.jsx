import React from 'react'
import useFetch from '../../hooks/useFetch';
import { readTime } from '../../../utils/helper';
import moment, { months } from "moment/moment";
import SavedPost from './Actions/SavedPost';
import { Blog } from '../../../Context/Context';
import Loading from '../../Loading/Loading';
import Actions from './Actions/Actions';
import { useNavigate } from "react-router-dom";

const PostsCard = ({post}) => {

  const { title, desc, created, postImg, id:postId, userId, username} = post;
  const { currentUser } = Blog();
  // get the data from the "users" collection
  const { data, loading } = useFetch("users");


  const navigate = useNavigate();

  return (
    <section>
        <div
           onClick={() => navigate(`/post/${postId}`)}
           className='flex flex-col sm:flex-row gap-4 cursor-pointer'>
           {loading && <Loading/>} 
            <div className='flex-[2.5]'>
                <p className='pb-2 font-semibold capitalize'>
                    {username} {/* PostCard username */}
                </p>
                <h2 className='text-xl font-bold line-clamp-2 leading-6 capitalize'>
                    {title} {/* PostCard title */}
                </h2>
                <div className='py-1 text-gray-500 line-clamp-2 leading-5' 
                    dangerouslySetInnerHTML={{__html: desc}} // PostCard description
                />
            </div>
            {
                postImg && 
                (
                    <div className='flex-[1]'>
                        <img src={postImg} alt="postImg" // PostCard image
                            className='w-[53rem] h-[8rem] object-cover'/> 
                    </div>
                )
            }


        </div>


        <div className='flex items-center justify-between w-full md:w-[70%] mt-[2rem] md:mt-0'>
            <p className='text-xs text-gray-600'>
                {readTime({__html: desc})} min read . {/* PostCard read time */}
                {moment(created).format("MMM DD")} {/* PostCard created date */}
            </p>
            <div className='flex items-center gap-3'>
                <SavedPost post={post}/> {/* PostCard save post icon*/}
                {
                    currentUser?.uid===userId && 
                    <Actions postId={postId} title={title} desc={desc}/> // PostCard actions icon
                } 
            </div>
        </div>
    </section>
    
  )
}

export default PostsCard
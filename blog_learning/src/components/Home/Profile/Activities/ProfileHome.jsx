import React from 'react'
import Loading from '../../../Loading/Loading';
import PostsCard from '../../../Common/Posts/PostsCard';

const ProfileHome = ({getUserData}) => {

  const userPost = postData && postData?.filter(
    (post) => post?.userId===getUserData?.userId
  );
  // console.log(userPost);









  return (
    <div className='flex flex-col gap-5 mb-[4rem]'>
      {
        userPost.length===0 && 
        <p className='text-gray-500'>
          <span className='capitalize'>{getUserData?.username}</span> has no post
        </p>
      }

      {
        postLoading 
        ? <Loading/>
        : (
          userPost.map((post, i) => <PostsCard post={post} key={i}/>)
        )
      }
    </div>
  )
}

export default ProfileHome
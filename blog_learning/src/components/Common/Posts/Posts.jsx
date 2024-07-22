import React from 'react'
import Loading from '../../Loading/Loading';
import PostsCard from './PostsCard';
import { Blog } from '../../../Context/Context';

const Posts = () => {

  // const { data, loading } = useFetch("posts");
  // console.log(data);
  const { postData, postLoading } = Blog();





  return (
   <section className='flex flex-col gap-[2.5rem]'>
      {
        postLoading
        ? <Loading/>
        : postData.map((post, i) => <PostsCard post={post} key={i}/>)
      }
    </section>
  )
}

export default Posts
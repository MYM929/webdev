import React from 'react'
import Posts from '../Common/Posts/Posts'
import Follow from './UserToFollow/Follow'

const home = () => {
  return (
    <section className='size flex gap-[5rem] relative'>



      {/* Left side */}
      <div className='flex-[2] py-10 mb-[4rem]'>
        <Posts/> {/* Posts component */}
      </div>

      {/* Right side */}
      <div className='hidden md:inline-block md:w-[21rem] p-7 border-l border-gray-300'>
        <h3>Who to follow?</h3> {/* Some text */}
        <Follow/>
      </div>


    </section>
  )
}

export default home
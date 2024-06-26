import React from 'react'
import { Link } from 'react-router-dom';

const DemoHeader = () => {
  return (
    <header className='border-b border-black sticky top-0 z-50'>
      <div className='size h-[70px] flex items-center justify-between'>
        <Link to={"/"}>
          <img
            className="h-[2.5rem]"
            src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="logo"
          />
        </Link>
      </div>
    </header>
  )
}

export default DemoHeader


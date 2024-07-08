import React from 'react'
import { CiSearch } from "react-icons/ci";
import Modal from '../../../utils/Modal';

const Search = ({ searchModal, setSearchModal }) => {










  // Only small screen has modal, big screen does not
  return (
    <>
      <Modal modal={searchModal} setModal={setSearchModal}>
        <div className={`absolute sm:relative right-4 left-4 top-[4rem] sm:left-0 sm:top-0
                         ${searchModal ? "visible opacity-100" : 
                                         "invisible sm:visible sm:opacity-100 opacity-0"}
                         transition-all duration-100`}>
          <div className='flex items-center gap-1 bg-gray-100 px-2 rounded-full relative z-10'>
            <span className='text-2xl text-gray-400'><CiSearch/></span> {/* Search icon */}
            <input className='bg-transparent outline-none py-[0.7rem] text-sm w-full' 
                   type="text" placeholder='Search Medium'/>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Search
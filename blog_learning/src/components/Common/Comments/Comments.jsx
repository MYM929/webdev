import React, { useState } from 'react'
import Modal from '../../../utils/Modal'
import { LiaTimesSolid } from "react-icons/lia";
import { Blog } from '../../../Context/Context';

const Comments = () => {

  const [showModal, setShowModal] = useState(true);
  const { currentUser } = Blog();












  return (
    <Modal modal={showModal} setModal={setShowModal}>
        <section 
            className={`fixed top-0 right-0 bottom-0 z-50 bg-white w-[22rem] shadows p-5
                        overflow-y-auto transition-all duration-500
                        ${showModal ? "translate-x-0" : "translate-x-[23rem]"}`}>
            



            {/* Header */}
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Responses(1)</h3> {/* Some text */}
                <button 
                    onClick={() => setShowModal(false)}
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
                                src="/profile.jpg" alt="user-img" // Profile image
                                />
                            <h3 className='capitalize text-sm'>
                                Yongming Mai {/* Username */}
                            </h3>
                        </div>
                        <textarea // Comment textarea
                            placeholder='What are your thoughts?'
                            className='w-full outline-none resize-none text-sm border px-2 pt-4'>
                        </textarea>
                        <div className='flex items-center justify-end gap-4 mt-[1rem]'>
                            <button className='text-sm'>
                                Cancel {/* Cancel button */}
                            </button>
                            <button className='btn !text=xs !bg-green-700 !text-white !rounded-full'>
                                Response {/* Response button */}
                            </button>
                        </div>
                    </div>
                )
            }
            


        </section>
    </Modal>
  )
}

export default Comments
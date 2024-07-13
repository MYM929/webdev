import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../../utils/Modal';
import { LiaTimesSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const EditProfile = ({editModal, setEditModal, getUserData}) => {

    // use to access the choose file button
    const imgRef = useRef(null);
    const openFile = () => {
        imgRef.current.click();
    }

    // stores the image path Url from the choose file button
    const [imgUrl, setImgUrl] = useState("");

    // css for the bottom two buttons
    const btn = "border border-green-600 py-2 px-5 rounded-full text-green-600";

    // stores the edit content object
    const [form, setForm] = useState({
        username: "",
        userImg: "",
        bio: "",
    });

    // if there is data inside the db, display the profile data
    useEffect(() => {
        if(getUserData) {setForm(getUserData)}
        else            {setForm({username: "", bio: "", userImg: ""})}
    }, [getUserData])

    // display error when editProfile is not complete
    const saveForm = async () => {
        if(form["username"]==="" || form["bio"]===""){
            toast.error("All inputs are required!");
            return;
        }
        // console.log(form)
    }













  return (
    <Modal modal={editModal} setModal={setEditModal}>
        <div className='center w-[95%] md:w-[45rem] bg-white mx-auto
                        shadows my-[1rem] z-20 mb-[3rem] p-[2rem]'>





            {/* header div*/}
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-xl'>Profile information</h2> {/* Profile information */}
                {/* {editModal && <EditProfile editModal={editModal} setEditModal={setEditModal}/>} */}
                <button onClick={() => setEditModal(false)} className='text-xl'>
                    <LiaTimesSolid/> {/* close button icon */}
                </button>
            </div>





            {/* body div */}
            <section className='mt-6'>
                <p className='pb-3 text-sm text-gray-500'>Photo</p> {/* text photo */}

                <div className='flex gap-[2rem]'>
                    <div className='w-[5rem]'>
                        <img className='min-h-[5rem] min-w-[5rem] object-cover border border-gray-400 rounded-full' 
                             src={imgUrl ? imgUrl : "/profile.jpg" }
                             alt="profile-img" 
                        /> {/* Profile picture */}
                        <input 
                            onChange={(e) => {
                                setImgUrl(URL.createObjectURL(e.target.files[0]));
                                setForm({ ...form, userImg: e.target.files[0] }); // update the form with image
                            }}
                            accept='image/jpg, image/png, image/jpeg'
                            ref={imgRef} type="file" hidden
                        /> {/* choose file button */}
                    </div>
                    <div>
                        <div className='flex gap-4 text-sm'>
                            <button className='text-green-600'
                                    onClick={openFile}>
                                Update
                            </button> {/* Update button */}
                            <button className='text-red-600'>Remove</button> {/* Remove button */}
                        </div>
                        <p className='w-full sm:w-[20rem] text-gray-500 text-sm pt-2'> {/* Paragraph */}
                            Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per side.
                        </p> 
                    </div>
                </div>
            </section>







            {/* Profile edit form */}
            <section className='pt-[1rem] text-sm'>
                {/* Name input */}
                <label className='pb-3 block'>Name*</label>
                <input
                    onChange={(e) => setForm(
                        { ...form, username: e.target.value } // update the form with username
                    )}
                    value={form.username}
                    type="text" placeholder="username..."
                    className="p-1 border-b border-black w-full outline-none"
                    maxLength={50}
                />
                <p className='text-sm text-gray-600 pt-2'>
                    Appears on your Profile page, as your byline, and in your responses.10/50
                </p>
                {/* Bio input */}
                <section className='pt-[1rem] text-sm'>
                    <label className='pb-3 block'>Bio*</label>
                    <input
                        onChange={(e) => setForm(
                            { ...form, bio: e.target.value } // update the form with bio
                        )}
                        value={form.bio}
                        type="text" placeholder="bio..."
                        className="p-1 border-b border-black w-full outline-none"
                        maxLength={160}
                    />
                    <p className='text-sm text-gray-600 pt-2'>
                    Appears on your Profile and next to your stories.42/160
                    </p>
                </section>
            </section>



            {/* Footer: Bottom two buttons */}
            <div className='flex items-center justify-end gap-4 pt-[2rem]'>
                <button className={btn}>
                    Cancel
                </button> {/* Cancel button */}
                <button 
                    onClick={saveForm}
                    className={`${btn} bg-green-800 text-white`}>
                    Save
                </button> {/* Save button */}
            </div>

 

        </div>
    </Modal>
  )
}

export default EditProfile
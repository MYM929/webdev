import React, { useEffect, useState } from 'react'
import { CiSaveDown2 } from "react-icons/ci";
import { Blog } from '../../../../Context/Context';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import { toast } from "react-toastify";
import useSingleFetch from '../../../hooks/useSingleFetch';

const SavedPost = ({post}) => {

  // stores isSaved state
  const [isSaved, setIsSaved] = useState(false);
  const { currentUser } = Blog();

  // fetch subcollection data from Firebase
  const { data, loading } = useSingleFetch(
      "users", post?.uid, "savePost"
  );
  // console.log(data);

  // find if the user have saved this post or not
  useEffect(() => {
    setIsSaved(data && data.find((item) => item.id===post.id));
  }, [data, post?.id])
  


  const handleSave = async () => {
    try {
        if(currentUser){
            const saveRef = doc(db, "users", currentUser?.uid, 
                "savePost", post?.id
            );
        
            if(isSaved){
                await deleteDoc(saveRef);
                toast.success("Post has been unsaved");
            }
            else{
                await setDoc(saveRef, {...post,});
                toast.success("Post has been saved");
            }
        }   
    } 
    catch (error) {
        
    }
  }













  return (
    <>
        <button onClick={handleSave} className='hover:opacity-60'> {/* Download/Save icon */}
            <CiSaveDown2 className={`text-2xl mb-1 pointer-events-none 
                                    ${isSaved ? "text-yellow-600" : ""}`}/>
        </button>
    </>
  )
}

export default SavedPost
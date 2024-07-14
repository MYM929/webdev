import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import ReactQuill from "react-quill";
import TagsInput from "react-tagsinput";
import { toast } from "react-toastify";
import { db, storage } from '../../../firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Blog } from '../../../Context/Context';
import { useNavigate } from 'react-router-dom';

const Preview = ({ setPublish, title, description }) => {

  //choose image
  const imageRef = useRef(null);
  const handleClick = () => {
    imageRef.current.click();
  }
  const [imageUrl, setImageUrl] = useState("");

  // react-tagsinput
  const [tags, setTags] = useState([]);

  // preview object contains title and photo
  const [preview, setPreview] = useState({
    title: "",
    photo: "",
  });
  // description input
  const [desc, setDesc] = useState("");

  // receive the title and description from Write.jsx
  useEffect(() => {
    if(title || description){
      setPreview({...preview, title: title});
      setDesc(description);
    }
    else{
      setPreview("");
      setDesc("");
    }
  }, [title, description])

  //import blog(), navigate and loading
  const { currentUser } = Blog();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // publish now button
  const handleSubmit = async () => {
    setLoading(true);
    try {
      // input validation
      if(preview.title==="" || desc==="" || tags.length===0){
        toast.error("All fields are required!");
        return;
      }
      if(preview.title.length<15){
        toast.error("Title must be at least 15 letters");
        return;
      }


      // backend to publish
      const collections = collection(db, "posts");
      // upload the image to Firebase storage
      let url;
      if(imageUrl){
        const storageRef = ref(storage, `image/${preview.photo.name}`);
        await uploadBytes(storageRef, preview?.photo);
        url = await getDownloadURL(storageRef);
      }



      // update the collection to Firebase
      await addDoc(collections, {
        userId: currentUser?.uid,
        title: preview.title,
        desc,
        tags,
        postImg: url || "",
        created: Date.now(),
        pageViews: 0,
      });
      toast.success("Post has been added");
      navigate("/"); // direct to the home page
      setPublish(false);
      setPreview({title: "", photo: ""});
    } 
    catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false);
    }
  }
  












  return (
    <section className='absolute inset-0 bg-white z-30'>
      <div className='size my-[2rem]'>
        <span
          onClick={() => setPublish(false)} 
          className='absolute right-[1rem] md:right-[5rem] top-[3rem] text-2xl cursor-pointer'>
          <LiaTimesSolid/> {/* close button */}
        </span>








        {/* preview the text */}
        <div className='mt-[8rem] flex flex-col md:flex-row gap-10'>



          {/* left side */}
          <div className='flex-[1]'>
            <h3>Story Preview</h3> {/* Story Preview text */}
            <div // Add Image box
              style={{backgroundImage : `url(${imageUrl})`}}
              onClick={handleClick}
              className='w-full h-[200px] object-cover bg-gray-100 my-3
                         grid place-items-center cursor-pointer
                         bg-cover bg-no-repeat'>
              {!imageUrl && "Add Image"}
            </div>
            <input // choose file input
              onChange={(e) => {
                setImageUrl(URL.createObjectURL(e.target.files[0]));
                setPreview({...preview, photo: e.target.files[0]});
              }}
              ref={imageRef} type="file" hidden 
            /> 
            <input // title input
              type="text" placeholder="Title"
              className="outline-none w-full border-b border-gray-300 py-2"
              value={preview.title} 
              onChange={(e) => setPreview({
                ...preview, title: e.target.value
              })}
            />
            <ReactQuill // tell your story input
              theme="bubble"
              value={desc} onChange={setDesc}
              placeholder="Tell Your Story..."
              className="py-3 border-b border-gray-300"
            />
            <p className='text-gray-500 pt-4 text-sm'> {/* some text */}
              <span className='font-bold'>Note: </span>
              Changes here will affect
              how your story appears in public places like Medium's homepage and
              in subscribers' inboxes — not the contents of the story itself.
            </p>
          </div>



          {/* right side */}
          <div className='flex-[1] flex flex-col gap-4 mb-5 md:mb-0'>
            <h3 className="text-2xl"> {/* some text */}
                Publishing to:
                <span className="font-bold capitalize"> Milad Tech</span>
            </h3>
            <p> {/* some text */}
              Add or change topics up to 5 so readers know what your story is
              about
            </p>
            <TagsInput value={tags} onChange={setTags}/> {/* Tags Input */}
            <button // Publish Now button
              onClick={handleSubmit}
              className='btn !bg-green-800 !w-fit !text-white !rounded-full'>
              {loading ? "Submitting" : "Publish Now"}
            </button>
          </div>  
        </div>
      </div>











    </section>
  )
}

export default Preview
import React, { useRef, useState } from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import ReactQuill from "react-quill";
import TagsInput from "react-tagsinput";

const Preview = ({ setPublish }) => {

  //choose image
  const imageRef = useRef(null);
  const handleClick = () => {
    imageRef.current.click();
  }
  const [imageUrl, setImageUrl] = useState("");


  // react-tagsinput
  const [tags, setTags] = useState([]);












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
              onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))} 
              ref={imageRef} type="file" hidden 
            /> 
            <input // title input
              type="text" placeholder="Title"
              className="outline-none w-full border-b border-gray-300 py-2"
            />
            <ReactQuill // tell your story input
              theme="bubble"
              placeholder="Tell Your Story..."
              className="py-3 border-b border-gray-300"
            />
            <p className='text-gray-500 pt-4 text-sm'>
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
              className='btn !bg-green-800 !w-fit !text-white !rounded-full'>
              Publish Now
            </button>
          </div>  
        </div>
      </div>











    </section>
  )
}

export default Preview
import React, { useState } from "react";
import ReactQuill from "react-quill";
import Preview from "./Preview";
import { Blog } from "../../../Context/Context";

const Write = () => {

  // define for ReactQuill text editor
  const [description, setDescription] = useState('');
  // display preview page or no
  const { publish, setPublish } = Blog();










  return (
    <section className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]">
        <input // title editor
            type="text" placeholder='Title' 
            className='text-4xl outline-none w-full'
        />
        {/* text editor, using ReactQuill */}
        <ReactQuill 
            theme="bubble" value={description} onChange={setDescription} 
            placeholder="Tell Your Story..."
            className='write my-5'
        />
        <div className={`${publish ? "visible opacity-100" : "invisible opacity-0"}
                         transition-all duration-200`}> {/* decide to open preview or not */}
            <Preview setPublish={setPublish}/>
        </div>
    </section>
  )
}

export default Write
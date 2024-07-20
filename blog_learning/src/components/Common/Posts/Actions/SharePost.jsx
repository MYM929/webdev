import React, { useState } from 'react'
import DropDown from '../../../../utils/DropDown'
import { CiShare1 } from "react-icons/ci";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import {
  BiLink,
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { toast } from "react-toastify";

const SharePost = () => {

  const [showDrop, setShowDrop] = useState(false);

  const path = window.location.href; // url of the search bar
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(path);
      toast.success("Link has been copied");
      setShowDrop(false);
    } 
    catch (error) {
      toast.error(error.message)
      setShowDrop(false);
    }
  }









  return (
    <div className='relative'>
      <button onClick={() => setShowDrop(!showDrop)}>
        <CiShare1 className='text-2xl'/> {/* SharePost button */}
      </button> 
      <DropDown showDrop={showDrop} setShowDrop={setShowDrop} size='w-[12rem]'>
        <Button click={copyLink} title="Copy Link"         icon={<BiLink/>}/> {/* Copy Link icon */}
        <Button click="" title="Share On Twitter"  icon={<BiLogoFacebookCircle/>}/> {/* Twitter icon */}
        <Button click="" title="Share On Facebook" icon={<BiLogoTwitter/>}/> {/* Facebook icon */}
        <Button click="" title="Share On Linkedin" icon={<BiLogoLinkedinSquare/>}/> {/* Linkedin icon */}
      </DropDown>
    </div>
  )
}

export default SharePost


const Button = ({click, icon, title}) => {
  return (
    <button
      onClick={click}
      className='p-2 hover:bg-gray-200 hover:text-black/80 w-full text-sm text-left
                 flex items-center gap-2 cursor-pointer text-gray-500'>
      
      <span className='text-[1.2rem]'>{icon}</span>
      {title}

    </button>
  )
}
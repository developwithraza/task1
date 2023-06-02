import React from 'react'
import { AiOutlineFacebook,AiOutlineInstagram ,AiOutlineTwitter,AiOutlineYoutube} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa"
import '../App.css'
function SocialIcons() {
  return (
    <div className='icons'>
       <AiOutlineFacebook className="icons_item"/>
       <AiOutlineInstagram className="icons_item"/>
       <AiOutlineTwitter className="icons_item"/>
       <AiOutlineYoutube className="icons_item"/>
       <FaPinterestP className="icons_item"/>
    </div>
  )
}

export default SocialIcons

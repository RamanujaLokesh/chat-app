import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx';
import useConversation from '../../zustand/useConversation.js';
import { extractTime } from '../../utils/extractTime.js';

const Message = ({message}) => {
  // console.log("here");
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId ===authUser._id;
  const chatClassName = fromMe?'chat-end':'chat-start'
const profilePic = fromMe?authUser.profilePic:selectedConversation?.profilePic;
const bubbleBgColor = fromMe?"bg-blue-500":"";
                     
const fromattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-img avatar'>
        <div className='w-12 rounded-full'
        >
            <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-1` }>{message.message} </div>
      <div className=" chat-footer flex gap-1 items-center text-xs text-slate-100 opacity-70">{fromattedTime}</div>

    </div>
  )
}

export default Message

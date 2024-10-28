import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-start'>
      <div className='chat-img avatar'>
        <div className='w-12 rounded-full'
        >
            <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className='chat-bubble text-white bg-blue-500'> hey! What is uPP?</div>
      <div className=" chat-footer flex gap-1 items-center text-xs text-slate-100 opacity-70">12:45</div>

    </div>
  )
}

export default Message

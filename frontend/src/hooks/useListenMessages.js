import React, { useEffect } from 'react'
import {useSocketContext} from '../context/SocketContext.jsx'
import useConversation from '../zustand/useConversation.js'
const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages , setMessagses} = useConversation()
  useEffect(()=>{
    socket?.on("newMessage" , (newMessage)=>{
      setMessagses([...messages , newMessage])  
    })

    return ()=>socket?.off("newMessage")
  },[socket,setMessagses,messages])
}

export default useListenMessages

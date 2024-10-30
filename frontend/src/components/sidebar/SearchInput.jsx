import React, { useState } from 'react'
import { MdPersonSearch  } from "react-icons/md";
import {FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js"
import toast from 'react-hot-toast';

const Searchinput = () => {
  const [search , setSearch] = useState("");
  const {setSelectedConversation}= useConversation();
  const {conversations} = useGetConversations();
  
  
  const handleSubmit = (e)=>{
e.preventDefault();
if(!search)return;

const conversation = conversations.find((c)=>c.userName.includes(search))

if(conversation){
  setSelectedConversation(conversation);
  setSearch("");

}else{
  toast.error("No user found")
}


  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='search..' className='input input-bordered rounded-full'
        value = {search}  
        onChange={(e)=>setSearch(e.target.value)} />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        {/* <MdPersonSearch /> */}
        <FaSearch />
        </button>
    </form>
  )
}

export default Searchinput

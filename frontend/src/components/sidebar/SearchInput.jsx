import React from 'react'
import { MdPersonSearch  } from "react-icons/md";
import {FaSearch } from "react-icons/fa";

const Searchinput = () => {
  return (
    <form action="#" className='flex items-center gap-2'>
        <input type="text" placeholder='search..' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        {/* <MdPersonSearch /> */}
        <FaSearch />
        </button>
    </form>
  )
}

export default Searchinput

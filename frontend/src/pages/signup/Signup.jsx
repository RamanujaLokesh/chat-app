import { useState } from 'react'
import {Link} from 'react-router-dom'
import GenderCheckBox from "./GenderCheckBox"
import useSignup from '../../hooks/useSignup'

const Signup = () => {
const [inputs, setInputs] = useState({
  fullName:"",
  userName:"",
  password:"",
  confirmPassword:"",
  gender:""
})

const {loading , signup} = useSignup();

const handleCheckBox = (gender)=>{
setInputs({...inputs , gender})
}
const handleSubmit = async (e)=>{
  e.preventDefault();
  console.log(inputs);
  await signup(inputs)
}


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullName"
              className="w-full input input-bordered h-10"
              value = {inputs.fullName} onChange={(e)=>setInputs({...inputs , fullName:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">username</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
              value = {inputs.userName} onChange={(e)=>setInputs({...inputs , userName:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value = {inputs.password} onChange={(e)=>setInputs({...inputs , password:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">confirm password</span>
            </label>
            <input
              type="password"
              placeholder=" enter password again"
              className="w-full input input-bordered h-10"
              value = {inputs.confirmPassword} onChange={(e)=>setInputs({...inputs , confirmPassword:e.target.value})}
            />
          </div>
          <div>
            
{/* gender check box here */}
<GenderCheckBox onCheckBoxChange = {handleCheckBox} selectedGender = {inputs.gender}/>
</div>
          <Link
            to="/login"
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"already"} have an account click here!
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 " disabled={loading}>
              {loading? <span className='loading loading-spinner'></span>:"Sign Up"}
              </button>
          </div>
        </form>
      </div>      
    </div>
  )
}

export default Signup
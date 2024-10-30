import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js";



export const loginUser = async (req,res)=>{
   try {
    
       console.log("login");
       const {userName , password} = req.body;   
   
       const user = await User.findOne({userName})
const isPasswordCorrect = await bcrypt.compare(password , user?.password||"");
       if(!user){
           console.log("incorect username")
           res.status(400).json({error:"username not found"})
           // throw error;
        }
        else if( !isPasswordCorrect){
            console.log("incorrect password")
               res.status(400).json({error:"password incorrect"})

       }else{
           generateTokenAndSetCookie(user._id , res);
        
            res.status(201).json({
                _id: user._id,
                fullName:user.fullName,
                userName:user.userName,
                profilePic:user.profilePic
            })
        }

       

   } catch (error) {
    console.log("error in login controller: ", error.message);
    res.status(500).json({error:"internal server error"})
    
   } 

}


export const signupUser = async (req,res)=>{
 
 try{

    //  console.log(req.body)
     const { fullName , userName, password,confirmPassword , gender } = req.body;
    //  console.log("here");
     // res.send(req);
     if(password !==confirmPassword){
         return res.status(400).json({error:"passwords dont match"});
        }
        const user = await User.findOne({userName})
        if(user){
            return res.status(400).json({error: "username already exists"});
        }
    //hash password here
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password , salt);


    //profile pic

    const profilePic = `https://avatar.iran.liara.run/public/${gender=="male"?"boy":"girl"}?username=${userName}`;
    // const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
const newUser = new User({
    fullName,
    userName,
    password : hashpassword,
    gender,
    profilePic
})
if(newUser){

    await newUser.save()
    generateTokenAndSetCookie(newUser._id , res)
    
    res.status(201).json({
        _id: newUser._id,
        fullName:newUser.fullName,
        userName:newUser.userName,
        profilePic:newUser.profilePic
    })
}
else{
    res.status(400).json({error:"invalid user data"});
}



}catch(error){
    console.log("error in signup controller: ", error.message);
    res.status(500).json({error:"internal server error"})
}

}
export const logoutUser = (req,res)=>{
    try {
        console.log('logout')
        res.cookie("jwt" , "" , {maxAge:0});
        res.status(201).json({message: "loggedout successfully"});

        
    } catch (error) {
        console.log("error in logout controller: " ,error.message);
        res.status(500).json({error:"internal server error"});
    }
    
}

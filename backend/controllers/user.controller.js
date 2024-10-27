import User from "../models/user.model.js";

export const getUsersForSideBar = async(req, res)=>{
    try {
        const userId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:userId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("error in getuserForSideBar: ", error.message);
        res.status(500).json({error:"internal server error"})
    }
}
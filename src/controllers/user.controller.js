import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (requestAnimationFrame,res)=>{
    return res.status(500).json({
        message: "chai aur code"
    })
})

export {registerUser}
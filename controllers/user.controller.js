

import User from "../models/user.model.js";


export const getUsers = async (req, res, next) => {
    try {

        const Users = await User.find();

        res.status(200).json({success: true, data: Users});
        
    } catch (error) {
        next(error);
    }
}


export const getOneUser = async (req, res, next) => {
   try {

    const oneUser = await User.findById(req.params.id)

    if(!oneUser){
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    };

    res.status(200).json({success: true, data: oneUser});
    
   } catch (error) {
        next(error)
   }
}
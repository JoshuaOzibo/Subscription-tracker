import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const authorize = async (req, res, next) => {
  try {
    let token;
    //makes sure headers is avaliable and checks if authorization header starts with Bearer.
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      // this splits the two string and get the string with the index of 1. e.g: "Bearer" : '123123123'
      token = req.headers.authorization.split(' ')[1];
    };

    if(!token){
        return res.status(401).json({message: 'Unthorized'});
    };

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById(decoded.userId);

    if(!user) return res.status(401).json({message: 'Unthorized'})

        req.user = user;


        next()

  } catch (error) {
    res.status(401).json({message: 'Unauthorized', error: error.message});

  }
};


export default authorize;
import { Router } from "express";
import {getUsers, getOneUser} from '../controllers/user.controller.js'
import authorize from "../middlewares/auth.middleware.js";


const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize,  getOneUser)


userRouter.post('/', (req, res) => {
    res.send({title: 'Create new user'})
});


userRouter.put('/:id', (req, res) => {
    res.send({title: 'Update user'})
});


userRouter.delete('/:id', (req, res) => {
    res.send({title: 'Delete a user'})
});

export default userRouter;
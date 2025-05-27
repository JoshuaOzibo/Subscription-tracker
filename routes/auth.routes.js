import { Router } from "express";
import { signUp, signIn, signOut } from "../config/controllers/auth.contorller";

const authRouter = Router();

authRouter.post("/sign-up", signUp);

authRouter.post("/sign-in", (req, res), signIn);

authRouter.post("/sign-out", (req, res), signOut);

export default authRouter;

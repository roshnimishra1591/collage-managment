import { Router } from "express";
import authRouter from "../modules/auth/authRouter.js";

const router = Router();

router.use('/auth', authRouter);



export default router
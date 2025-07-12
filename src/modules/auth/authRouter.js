import { Router } from "express";
import authCtrl from "./auth.controller.js";
import authSVC from "./auth.service.js";

const authRouter = Router();

authRouter.post("/login",authCtrl.login);
authRouter.post("/register",authCtrl.userRegister)


export default authRouter;
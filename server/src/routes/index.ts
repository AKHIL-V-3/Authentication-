import express, { Request, Response } from 'express'
import  controller from "../controller";


const router =  express.Router()

router.post("/signup",controller.signup)
router.post("/verifyotp",controller.verifyOtp)
router.post("/logout",controller.logout)
router.post("signin",controller.signin)

export default router
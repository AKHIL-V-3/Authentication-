import express, { Request, Response } from 'express'
import  controller from "../controller";


const router =  express.Router()

router.post("/signup",controller.signup)

export default router
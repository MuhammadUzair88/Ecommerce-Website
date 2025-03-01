import express from 'express'
import {registerController,loginController, testController, forgotPasswordController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
const router =express.Router()


router.post('/register',registerController)
router.post('/login',loginController)
router.get('/test',requireSignIn,isAdmin,testController)

router.post('/forgot-password',forgotPasswordController)

//protected route auth

router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
});

router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
});

export default router

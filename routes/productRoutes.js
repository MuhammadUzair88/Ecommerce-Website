import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'


const router =express.Router()

//routes

router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)


router.get('/get-product',getProductController)

router.get('/get-product/:slug',getSingleProductController)

router.get('/product-photo/:pid',productPhotoController)

router.delete('/product/:pid',deleteProductController)

router.post('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)

router.post('/delete-product/:pid',requireSignIn,isAdmin,formidable(),deleteProductController)


export default router
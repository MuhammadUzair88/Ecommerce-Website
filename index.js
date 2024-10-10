
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config();

connectDB();

//rest object
const app =express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes)


app.get('/',(req,res)=>{
    res.send({
        message:"Welcome TO purana Pakistan"
    })
})

const PORT=process.env.PORT || 8080;


app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});
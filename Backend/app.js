const express=require('express');
const app=express();
require('dotenv').config();


// ALL THE DB CONNECTION
const Connection=require('./utils/dbConnect');
Connection();

const UserRouter=require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const movieRouter = require('./routes/moviesRoutes');
const bookingRouter=require('./routes/bookingRoutes');
const cors=require('cors');

// PORT NUMBER 
const PORT=process.env.PORT;
app.use(cors());

// middleware routes
app.use(express.json());
app.use('/users',UserRouter); //UserRouter
app.use('/admin',adminRouter);//adminRouter
app.use('/movies',movieRouter);//movieRouter
app.use('/booking',bookingRouter);//bookingRouter


app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})
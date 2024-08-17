const express = require('express')
const mongoose = require('mongoose')
let cors = require('cors')

let env = require('dotenv')

env.config()

const userRouter = require('./routes/users')
const jobsRouter = require('./routes/jobs')
const messageRouter = require('./routes/messages')
const paymentRouter = require('./routes/payment')
const categoriesRouter = require('./routes/categories')
const proposalsRouter = require('./routes/proposals')
const reviewsRouter = require('./routes/reviews')
const projectRouter = require('./routes/project')
const complaintRoutes = require('./routes/Complaint');
const adminRoutes = require('./routes/Admin');
const Notification = require('./routes/Notification');

//const authRouter = require('./routes/auth')


const app = express();
mongoose.connect('mongodb+srv://rehab:rehab123@cluster0.9o18wq0.mongodb.net/Mostaql').then(()=>{
  console.log("connect on database succsesfully");
}).catch((err) => {
  console.log(err);
})

app.use(express.json())
app.use(cors({
  origin:'*'
}))

//error handelling middelware
app.use((err , req ,res , next)=>{
  let statusCode = err.statusCode?err.statusCode:500
  res.status(statusCode).send({message : err.message})
})

app.use(express.json())
app.use('/users',userRouter)
app.use('/jobs',jobsRouter)
app.use('/messages',messageRouter)
app.use('/payment',paymentRouter)
app.use('/categories',categoriesRouter)
app.use('/proposals',proposalsRouter)
app.use('/reviews',reviewsRouter)
app.use('/projects',projectRouter)
app.use('/complaints', complaintRoutes);
app.use('/admins', adminRoutes);
app.use('/notifications', Notification);


app.use('*' , function(req , res , next){
  next({statusCode:404 , message : "not found"})
 })


app.listen(3344,()=>{
  console.log("Connect successfully");
})

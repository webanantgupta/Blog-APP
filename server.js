const express = require('express');
const app = express();
const port = 8080;
const connectToDb = require('./db')
connectToDb()

let userCollection = require('./models/UserSchema')

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('welcome page')
})

// app.post('/register',async(req,res)=>{
//     let {name,email,password } = req.body;
//    try {
//     let data = await userCollection.create({
//         name:name,
//         password:password,
//         email:email
//     })
//     res.json({msg:"user registered successfully",data,success:true})
//    } catch (error) {
//     res.json({msg:"error in user registration",success:false,error})
//    }

// })


app.use('/users',userRouter)
app.use('/post',postRouter)


app.listen(port,()=>{
    console.log('server is running on port '+port+` http://localhost:${port}/`);
})
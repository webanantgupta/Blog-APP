const userCollection = require('../models/UserSchema')
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const createUser = async(req,res)=>{
        let {name,email,password} = req.body;
        if(!name){
            return res.json({msg:"name is required",success:false});
        }
        if(!email){
            return res.json({msg:"email is required",success:false});
        }
        if(!password){
            return res.json({msg:"password is required",success:false});
        }
        try {
            let hashedPassword  =  bcrypt.hashSync(password, salt);
        let data = await userCollection.create({
            name,
            email,
            password:hashedPassword
        })

       
            return res.json({msg:"user created successfully",success:true,data})
        } catch (error) {
            return res.json({msg:"error in creating user",success:false,error})
        }

}

const loginUser = async(req,res)=>{
    let {email,password} = req.body;
    try {
        let checkUser = await userCollection.findOne({email});
    if(checkUser){
        let checkPassword = bcrypt.compareSync(password, checkUser.password);
        if(checkPassword){
            return res.json({msg:"user login successfull",success:true,user:checkUser})
        }
        else{
            return res.json({msg:"invalid credentials",success:false})
        }
    }
    else{
        return res.json({msg:"user not found",success:false})
    }
    } catch (error) {
        res.json({msg:"error in logi in user",success:false,error:error})
    }
}


const getAllUSer = async(req,res)=>{

}

const updateUser = async(req,res)=>{
    const {name,password} = req.body
    let hashedPassword;
    if(password){
        hashedPassword = bcrypt.hashSync(password,salt)
    }
    let id = req.params._id
    try {
      let data = await userCollection.findByIdAndUpdate(id,{$set:{name,password:hashedPassword}},{new:true})
      return res.json({msg:"user updated successfully",success:true,data})
    } catch (error) {
        return res.json({msg:"error in updating user",success:false,error:error.message}) 
    }

}
const deleteUser = async(req,res)=>{
    let id = req.params._id
    try {
        let data = await userCollection.findByIdAndDelete(id)
        res.json({msg:"user deleted successfully",success:true})
    } catch (error) {
        res.json({msg:"error in deleting user",success:false,error:error.message})
    }
}

module.exports = {
    createUser,
    getAllUSer,
    updateUser,
    deleteUser,
    loginUser
}
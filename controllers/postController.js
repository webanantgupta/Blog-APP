const POST = require('../models/postSchema')
const createPost = async(req,res)=>{
    const {title,description,image,video,user} = req.body;
    try {
        let data = await POST.create({
            title,
            description,
            image,
            video,
            user
        })
      return res.json({msg:"post created successfully",success:true,data})
    } catch (error) {
        return res.json({msg:"error in creating post",success:false,error:error.message})
    }
}
const getAllUSerPost = async(req,res)=>{

}
const getSingleUserPost = async(req,res)=>{

}
const updatePost = async(req,res)=>{

}
const deletePost = async(req,res)=>{

}

module.exports = {
    createPost,
    getAllUSerPost,
    getSingleUserPost,
    updatePost,
    deletePost
}
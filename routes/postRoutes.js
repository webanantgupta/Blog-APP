const express = require('express');
const { createPost, updatePost, deletePost, getAllUSerPost, getSingleUserPost } = require('../controllers/PostController');

const router = express.Router();

router.post('/create',createPost)
router.put('/update/:_id',updatePost)
router.delete('/delete/:_id',deletePost)
router.get('/getall',getAllUSerPost)
router.get('/getuserAll/:_id',getSingleUserPost)


module.exports = router
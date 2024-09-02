const express = require('express');
const { createUser, deleteUser, updateUser, getAllUSer, loginUser } = require('../controllers/userController');
const router = express.Router();


router.post('/create',createUser);
router.delete('/delete/:_id',deleteUser)
router.put('/update/:_id',updateUser)
router.get('/getall',getAllUSer)
router.post('/login',loginUser)

module.exports = router;
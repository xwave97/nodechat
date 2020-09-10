import express from 'express'
import makeCallBack from '../makeCallback/index.js'
import {deleteUser,getAllUsers,postUser,updateUser} from '../controllers/usersController/index.js'

const userRouter = express.Router()

userRouter.route('')
.post(makeCallBack(postUser))

export default userRouter
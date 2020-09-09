import MakeDeleteUser from './usersController/deleteUser.js'
import MakePostUser from './usersController/postUser.js'
import MakeGetAllUsers from './usersController/getAllUsers.js'
import MakeUpdateUser from './usersController/updateUser.js'
import MakeGetUser from './usersController/getUser.js'

import {usersGetHandler,userUpdateHandler,deleteUserHandler,addUserHandler} from '../services/index.js'

const deleteUser = MakeDeleteUser(deleteUserHandler)
const postUser = MakePostUser(addUserHandler)
const updateUser = MakeUpdateUser(userUpdateHandler)
const getAllUsers = MakeGetAllUsers(usersGetHandler)

const UserController = Object.freeze({
    deleteUser,
    postUser,
    updateUser,
    getAllUsers
})

export {deleteUser,postUser,updateUser,getAllUsers}
export default UserController
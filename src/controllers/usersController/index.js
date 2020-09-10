import MakeDeleteUser from './deleteUser.js'
import MakePostUser from './postUser.js'
import MakeGetAllUsers from './getAllUsers.js'
import MakeUpdateUser from './updateUser.js'
import MakeGetUser from './getUser.js'

import {usersGetHandler,userUpdateHandler,deleteUserHandler,addUserHandler} from '../../services/index.js'

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
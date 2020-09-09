import userAdd from './userService/userAdd.js'
import userDelete from './userService/userDelete.js'
import userGet from './userService/userGet.js'
import userUpdate from './userService/userUpdate.js'

import database from '../models/index.js'

const addUserHandler = userAdd({database})
const deleteUserHandler = userDelete({database})
const usersGetHandler = userGet({database})
const userUpdateHandler = userUpdate({database})

const UserHandlerService = Object.freeze({
    addUserHandler,
    deleteUserHandler,
    usersGetHandler,
    userUpdateHandler
})

export {addUserHandler, deleteUserHandler, userUpdateHandler, usersGetHandler}
export default UserHandlerService

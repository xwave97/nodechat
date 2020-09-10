import userAdd from './userService/userAdd.js'
import userDelete from './userService/userDelete.js'
import getAllUsers from './userService/userGet.js'
import userUpdate from './userService/userUpdate.js'

import database from '../models/index.js'

const usersTable = database.users;
const addUserHandler = userAdd(usersTable);
const deleteUserHandler = userDelete(usersTable);
const usersGetHandler = getAllUsers(usersTable);
const userUpdateHandler = userUpdate(usersTable);

const UserHandlerService = Object.freeze({
    addUserHandler,
    deleteUserHandler,
    usersGetHandler,
    userUpdateHandler
})

export {addUserHandler, deleteUserHandler, userUpdateHandler, usersGetHandler}
export default UserHandlerService

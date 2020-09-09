import BuildCreateUser from './User.js'
import BuildCreateMessage from './Message.js'
import BuildCreateDialog from './Chat.js'

const makeUser = BuildCreateUser()
const MakeMessage = BuildCreateMessage()
const CreateDialog = BuildCreateDialog()

export {makeUser,MakeMessage,CreateDialog}

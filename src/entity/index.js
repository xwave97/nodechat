import BuildCreateUser from './user.js'
import BuildCreateMessage from './message.js'
import BuildCreateDialog from './chat.js'

const makeUser = BuildCreateUser()
const MakeMessage = BuildCreateMessage()
const CreateDialog = BuildCreateDialog()

export {makeUser, MakeMessage, CreateDialog}

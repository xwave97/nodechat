import EValidator from 'email-validator'
export default function BuildCreateUser() {
  return function CreateUser({
    user_id,
    user_login, 
    user_password, 
    user_mail,
    createAt=Date.now(),
    updated =Date.now()
  }={}) {
    if (user_login<2) {
      throw new Error('User must be longer than 2 characters')
    }
    if (user_password.length<6) {
      throw new Error('')
    }
    if (!EValidator.validate(user_mail)) {
      throw new Error('Uncorrect Email')
    }
    return Object({
      GetId: () => user_id,
      GetLogin: () => user_login,
      GetPass: () => user_password,
      GetMail: () => user_mail,
      GetDateCreated: () => createAt,
      GetUpdatedDate: () => updated
    })
  }
}

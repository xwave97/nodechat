import {makeUser} from "../../entity/index.js";

export default function updateUser(userTable) {
    return async function (userInfo) {
        const {user_mail,...other} = userInfo
        const updatedAt =Date.now()    
        const user = makeUser({user_mail,updatedAt,...other});
        console.log(user)
        userTable.update({
                user_login: user.GetLogin(),
                user_password: user.GetPass(),
                updatedAt:user.GetUpdatedDate()
            },
            {where: {user_mail: user_mail}},
        )
        return {user_login: user.GetLogin(),updatedAt:new Date(user.GetUpdatedDate())};
    }
}
import userEntity from "../../entity/user.js";

export default function updateUser(userTable) {
    return async function (userInfo) {
        const {login,...other} = userInfo
        const user = userEntity(other);
        userTable.update({
                user_login: user.GetLogin(),
                user_mail: user.GetMail(),
                user_password: user.GetPass(),
            },
            {where: {user_login: login}},
        )
        return user;
    }
}
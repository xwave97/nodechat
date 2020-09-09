export default function getUser({userTable}) {
    return async function (userLogin) {
        return userTable.findAll({
            where: {user_login: userLogin}
        });
    }
}
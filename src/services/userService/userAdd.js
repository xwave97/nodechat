import userEntity from "../../entity/user.js"

export default function addUser({userTable}) {
    return async function (userInfo) {
        const user = userEntity({...userInfo});
        await userTable.create({user});
        return user;
    }
}
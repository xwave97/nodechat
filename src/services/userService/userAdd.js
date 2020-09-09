import {makeUser} from "../../entity/index.js"

export default function addUser(userTable) {
    return async function (userInfo) {
        const user =makeUser({...userInfo});
        userTable.create({...userInfo});
        return {userInfo};
    }
}
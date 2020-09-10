export default function getAllUsers(userTable) {
    return async function () {
        const users =userTable.findAll({
        }).then((result) => {
            return result.map((user)=>{
                const {user_id,user_login,user_mail} =user.dataValues
                return {user_id,user_login,user_mail}
            })  
        }).catch((err) => {
            return err
        });;   
        return users   
    }
}
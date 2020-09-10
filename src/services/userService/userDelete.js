export default function deleteUser(userTable) {
    return async function (userId) {
        const {user_id} = userId
        await userTable.destroy({
            where: {
                user_id: user_id,
            }
        });
        return user_id
    }
}
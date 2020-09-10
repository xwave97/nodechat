export default function deleteUser(userTable) {
    return async function (userId) {
        await userTable.destroy({
            where: {
                user_id: userId,
            }
        });
        return userId
    }
}
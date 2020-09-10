export default function MakeDeleteUser(deleteUserService){
    return async function deleteUser(httpRequest){
        try {
            const userId = httpRequest.body
            const deleteUser = await deleteUserService(userId)
            return {
                headers: {'Content-Type': 'application/json'},
                statusCode:201,
                body:{
                   mes:'User was deleted',
                   user:deleteUser
                }     
            }
        } catch (error) {
            console.log(error)
            return {
                headers: {'Content-Type': 'application/json'},
                statusCode:500,
                body:{
                    error:error.message
                }
            }
        }
    }
}
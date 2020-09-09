export default function MakeDeleteUser(deleteUserService){
    return async function deleteUser(httpRequest){
        try {
            const userId = httpRequest.body
            const deleteUser = await deleteUserService({...userId})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(post.updated).toUTCString()},
                statusCode:201,
                body:'User was deleted'     
            }
        } catch (error) {
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(post.updated).toUTCString()},
                statusCode:500,
                body:{
                    error:error.message
                }
            }
        }
    }
}
export default function MakeGetAllUser(getAllUserService){
    return async function getAllUser(httpRequest){
        try {
            const userId = httpRequest.body
            const allUsers = await getAllUserService({...userId})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(post.updated).toUTCString()},
                statusCode:201,
                body:{allUsers}     
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
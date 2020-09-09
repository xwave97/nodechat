export default function MakeUpdateUser(updateUserService){
    return async function postUser(httpRequest){
        try {
            const userInfo = httpRequest.body
            const updateUser = await updateUserService({userInfo})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(post.updated).toUTCString()},
                statusCode:201,
                body:{
                    postUser
                }
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
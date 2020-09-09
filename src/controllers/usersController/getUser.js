export default function MakeGetUser(getUserService){
    return async function getUser(httpRequest){
        try {
            const userEmail = httpRequest.body
            const getUser = await getUserService({userEmail})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(post.updated).toUTCString()},
                statusCode:201,
                body:{
                    getUser
                }
            }
        } catch (error) {
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
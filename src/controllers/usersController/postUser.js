export default function MakePostUser(createUserService){
    return async function postUser(httpRequest){
        try {
            const {...userInfo} = httpRequest.body
            const postUser = await createUserService({...userInfo})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(postUser.updated).toUTCString()},
                statusCode:201,
                body:{
                    postUser
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
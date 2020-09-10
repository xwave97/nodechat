export default function MakeUpdateUser(updateUserService){
    return async function postUser(httpRequest){
        try {
            const userInfo = httpRequest.body
            const updateUser = await updateUserService(userInfo)
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(Date.now()).toUTCString()},
                statusCode:201,
                body:{
                    updateUser
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
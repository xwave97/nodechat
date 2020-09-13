export default function MakeGetAllMessagesByUser(GetAllMessagesByUserService){
    return async function postUser(httpRequest){
        try {
            const {...messageInfo} = httpRequest.body
            const UserMessages = await GetAllMessagesByUserService({...messageInfo})
            return {
                headers: {'Content-Type': 'application/json'},
                statusCode:201,
                body:{
                    UserMessages
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
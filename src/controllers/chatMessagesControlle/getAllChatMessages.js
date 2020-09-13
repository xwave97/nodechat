export default function MakeGetAllChatMessages(getAllChatMessagesService){
    return async function postUser(httpRequest){
        try {
            const {...messageInfo} = httpRequest.body
            const Messages = await getAllChatMessagesService({...messageInfo})
            return {
                headers: {'Content-Type': 'application/json'},
                statusCode:201,
                body:{
                    Messages
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
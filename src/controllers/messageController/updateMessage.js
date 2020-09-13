export default function MakeUpdateMessage(UpdateMessageService){
    return async function postUser(httpRequest){
        try {
            const {...messageInfo} = httpRequest.body
            const UpdatedMessage = await UpdateMessageService({...messageInfo})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(UpdatedMessage.updated).toUTCString()},
                statusCode:201,
                body:{
                    UpdatedMessage
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
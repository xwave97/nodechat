export default function MakeDeleteMessage(deleteMessageService){
    return async function postUser(httpRequest){
        try {
            const {...messageInfo} = httpRequest.body
            const deletedMessage = await deleteMessageService({...messageInfo})
            return {
                headers: {'Content-Type': 'application/json'},
                statusCode:201,
                body:{
                    deletedMessage
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
export default function MakePostMessage(createMessageService){
    return async function postUser(httpRequest){
        try {
            const {...messageInfo} = httpRequest.body
            const postMessage = await createMessageService({...messageInfo})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(postMessage.updated).toUTCString()},
                statusCode:201,
                body:{
                    postMessage
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
export default function MakePostUserInParty(insertUserInPartyService){
    return async function postUser(httpRequest){
        try {
            const {...userInfo} = httpRequest.body
            const insertedUser = await insertUserInPartyService({...userInfo})
            return {
                headers: {'Content-Type': 'application/json'},
                statusCode:201,
                body:{
                    insertedUser
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
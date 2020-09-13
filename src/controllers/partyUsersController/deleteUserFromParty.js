export default function MakeDeleteUserFromParty(deleteUserFromPartyService){
    return async function postUser(httpRequest){
        try {
            const {...userInfo} = httpRequest.body
            const deteledUser = await deleteUserFromPartyService({...userInfo})
            return {
                headers: {'Content-Type': 'application/json'},
                statusCode:201,
                body:{
                    deteledUser
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
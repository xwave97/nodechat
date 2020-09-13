export default function MakeDeleteParty(deletePartyService){
    return async function postUser(httpRequest){
        try {
            const {...partyInfo} = httpRequest.body
            const deteledParty = await deletePartyService({...partyInfo})
            return {
                headers: {'Content-Type': 'application/json'},
                statusCode:201,
                body:{
                    deteledParty
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
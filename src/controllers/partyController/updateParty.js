export default function MakeUpdateParty(updatePartyService){
    return async function postUser(httpRequest){
        try {
            const {...partyInfo} = httpRequest.body
            const updatedParty = await updatePartyService({...partyInfo})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(Date.now()).toUTCString()},
                statusCode:201,
                body:{
                    updatedParty
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
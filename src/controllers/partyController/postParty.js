export default function MakePostParty(createPartyService){
    return async function postUser(httpRequest){
        try {
            const {...partyInfo} = httpRequest.body
            const postedParty = await createPartyService({...partyInfo})
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified': new Date(postedParty.updated).toUTCString()},
                statusCode:201,
                body:{
                    postedParty
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
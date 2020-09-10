export default function MakeGetAllUser(getAllUserService){
    return async function getAllUser(httpRequest){
        try {
            const allUsers = await getAllUserService()
            return {
                headers: {'Content-Type': 'application/json', 'Last-Modified':new Date(Date.now()).toUTCString()},
                statusCode:201,
                body:{allUsers}     
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
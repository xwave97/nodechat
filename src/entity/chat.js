export default function BuildCreateDialog(Id){
    return function CreateDialog({
        chat_id,
        chat_name,
        createAt=Date.now(),
        updatedAt =Date.now()
    }){
        return Object.freeze({
            GetId:()=>chat_id,
            GetName:()=>chat_name,
            GetDateCreated:()=>createAt,
            GetUpdatedDate:()=>updatedAt
        })
    }
}
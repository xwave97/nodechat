export default function BuildCreateMessage(){
  return function CreateMessage({
    message_id,
    chat_id,
    user_id,
    message_text,
    createAt=Date.now(),
    updatedAt =Date.now()
  }){
    return Object.freeze({
        GetId:()=>message_id,
        GetText:()=>message_text,
        GetAuthor:()=>user_id,
        GetChatId:()=>chat_id,
        GetDateCreated:()=>createAt,
        GetUpdatedDate:()=>updatedAt
    })
  }
}
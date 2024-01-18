 "use server"
import { ConnectToDb } from "../mongoose"
import  { User,Item } from "../models"

const GetUser=async(username:string,password:string)=>{
 const data={user_name:"Admin",
    password:"Admin"}
    try {
        ConnectToDb()
        const user =await User.findOne(
            {user_name:username},
        ) 
     if(user?.password===password){
             return true
        }else{
            return false
        } 
    } catch (error) {
       console.log(error);   
    }
}
const GetItems=async()=>{
       try {
           ConnectToDb()
           const item =await Item.find( ) 
        if(item){
            console.log(item);
           return item
        }
       } catch (error) {
          console.log(error);   
       }
   }
 const CreateItems=async(data:{name,type,description,quantity,expriredate})=>{
    try {
        ConnectToDb()
        const item =await Item.create(data) 
     if(item){
        console.log(item);
        return item
     }
    } catch (error) {
       console.log(error);   
    }
}

export {GetUser,GetItems,CreateItems}
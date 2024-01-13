 "use server"
import { ConnectToDb } from "../mongoose"
import User from "../models"

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

export {GetUser}
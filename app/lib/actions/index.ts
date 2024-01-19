 "use server"
import { ConnectToDb } from "../mongoose"
import  { User,Item, BorrowItem, TransferItem } from "../models"

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
 const CreateItems=async(data)=>{
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

const CreateBorrowedItem=async(data)=>{
   try {
       ConnectToDb()
       const item =await BorrowItem.create(data) 
    if(item){
       console.log(item);
       return item
    }
   } catch (error) {
      console.log(error);   
   }
}

const CreateTransferItem=async(data)=>{
   try {
       ConnectToDb()
       const item =await TransferItem.create(data) 
    if(item){
       console.log(item);
       return item
    }
   } catch (error) {
      console.log(error);   
   }
}

const GetBorrowedItems=async()=>{
   try {
       ConnectToDb()
       const item =await BorrowItem.find( ) 
    if(item){
        console.log(item);
       return item
    }
   } catch (error) {
      console.log(error);   
   }
}
const GetTransferedItems=async()=>{
   try {
       ConnectToDb()
       const item =await TransferItem.find( ) 
    if(item){
        console.log(item);
       return item
    }
   } catch (error) {
      console.log(error);   
   }
}
export {GetUser,GetItems,CreateItems, CreateBorrowedItem,CreateTransferItem,GetBorrowedItems,GetTransferedItems}
"use client"
import Navbar from "../components/Navbar"
import { GiBoxUnpacking } from "react-icons/gi";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { TbClockX } from "react-icons/tb";
import { MdOutlineHandshake } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { useState,useMemo,useEffect } from 'react'
import { Login } from "../components/Login";
import Link from 'next/link'
import { GetItems,GetBorrowedItems,GetTransferedItems } from "../lib/actions";



const Dashbord = () => {
 const [expire,setExpire]=useState<number>(0)



useEffect(()=>{
  const handleFech=async()=>{
  try {
    const items=await GetItems()
    const Bitems=await GetBorrowedItems()
    const Titems=await GetTransferedItems()
    // const data=JSON.stringify(items)
    // const Bdata=JSON.stringify(Bitems)
    // const Tdata=JSON.stringify(Titems)
    localStorage.setItem("data",items)
    localStorage.setItem("Bdata",Bitems)
    localStorage.setItem("Tdata",Titems)
    const fliters= JSON.parse(items).filter((i)=> {
      if(i.type==="equipment") return null
      const newdate = new Date(i.createdAt); 
      const date=(newdate.getFullYear()*31536000000)+(newdate.getMonth()*86400000*30)+(newdate.getDay()*86400000)
      const e= i.expiredate/86400000
        const d=(date/86400000)+((date-e)/86400000)*0.001
        const items=d >= e
          return items })
    setExpire(fliters.length)
    
  } catch (error) {
    console.log(error);
  } 
} 
handleFech()
 },[])
 const u=localStorage.getItem("user")
 const user=JSON.parse(u)
console.log(user);

 


  return (
 <div className="bg-slate-400">
    <Navbar  />  
    <div className="bg-white mx-32 pb-6  ">
    <h1 className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>wellcome to central lab coordinat dashbord</h1>   
    <div className="grid grid-cols-3 gap-3 px-5">
       
        <div className="border-2 border-black flex flex-col justify-center">
        <Link href={"/dashbord/item-registration"}
        >
          <GiBoxUnpacking className="w-32 h-32 text-yellow-400  mx-auto hover:scale-110 cursor-pointer duration-500" />
          </Link>
          <h1 className='capitalize text-2xl font-bold pt-5 text-center text-slate-500'>item registration</h1> 
        </div>
        
    
        <div className="border-2 border-black flex flex-col justify-center">
        <Link href={"/dashbord/recieved-chemical-or-equipment"}
        >
          <PiHandCoinsDuotone className="w-32 h-32 text-purple-600  mx-auto hover:scale-110 cursor-pointer duration-500" />
          <h1 className='capitalize text-xl font-bold pt-5 text-center text-slate-500'>recived chemical or equipment</h1> 
         </Link>
        </div>
        <div className="border-2 border-black flex flex-col justify-center">
        <Link href={"/dashbord/show-expired-stock"}
        >
          <TbClockX className="w-32 h-32 text-pink-700  mx-auto hover:scale-110 cursor-pointer duration-500" />
        <h1 className='capitalize text-2xl font-bold pt-5 text-center text-slate-500'><span className="text-pink-500">{expire} {""}items </span>{" "}will expire soon</h1> 
       </Link>
        </div>
        <div className="border-2 border-black flex flex-col justify-center">
        <Link href={"/dashbord/borrow-item"}>
          <MdOutlineHandshake className="w-32 h-32 text-slate-950  mx-auto hover:scale-110 cursor-pointer duration-500" />
          <h1 className='capitalize text-2xl font-bold pt-5 text-center text-slate-500'>borrow item</h1> 
          </Link>
        </div>
        {user?.roll===1&&
        <div className="border-2 border-black flex flex-col justify-center">
        <Link href={"/dashbord/transfer-item"}>
          < BiTransfer className="w-32 h-32 text-sky-950  mx-auto hover:scale-110 cursor-pointer duration-500" />
          <h1 className='capitalize text-2xl font-bold pt-5 text-center text-slate-500'>transfer item</h1> 
          </Link>
        </div>
        }
    </div>
    </div>
 </div>
  )
}
export default Dashbord
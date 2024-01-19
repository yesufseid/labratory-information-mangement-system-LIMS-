"use client"

import Navbar from "@/app/components/Navbar"
import {useEffect,useState} from "react"



export default function page() {
  const [data,setData]=useState([])
  useEffect(()=>{
   const items = localStorage.getItem("data")
   const data=JSON.parse(items)
   console.log(data);
   return setData(data)
  },[])

  return (
    <div className="flex flex-col gap-5 justify-center">
      <Navbar />
      <h1 className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>All items</h1>
    <div>
    <div className='mx-10 gap-3 overflow-y-auto  border-2 border-sky-600 p-5'>
    <div className="grid grid-cols-5 py-2">
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900">name</div>
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900">type</div>
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900">description</div>
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900">quantity</div>
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900">expriredate</div>
           </div>
          {data?.map((p)=>{
            const newdate = new Date(p.createdAt); 
            const date=(newdate.getFullYear()*31536000000)+(newdate.getMonth()*86400000*30)+(newdate.getDay()*86400000)
            const e= p.expiredate/86400000
              const d=(date/86400000)+((p.date-Date.now())/86400000)+((date-e)/86400000)*0.001
              let Word=e-d>0?"days left":"days pass"
              let sss=Math.floor(e-d) 
       return   (
           <div className="grid grid-cols-5 ">
               <div className="border-2 border-black text-center">{p.name}</div>
               <div className="border-2 border-black text-center">{p.type}</div>
               <div className="border-2 border-black text-center ">{p.description}</div>
               <div className="border-2 border-black text-center">{p.quantity}</div>
               <div className="border-2 border-black text-center">{sss}{" "}{Word}</div>
           </div>
          )})}
    </div>
    </div>
    </div>
  )
}


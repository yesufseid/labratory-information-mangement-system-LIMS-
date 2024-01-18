"use client"

import Navbar from "@/app/components/Navbar"
import {useMemo} from "react"



export default function page() {
  const data=useMemo(()=>{
   const items = localStorage.getItem("data")
   const data=JSON.parse(items)
   console.log(data);
   return data
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
          {data?.map((p)=>(
           <div className="grid grid-cols-5 ">
               <div className="border-2 border-black text-center">{p.name}</div>
               <div className="border-2 border-black text-center">{p.type}</div>
               <div className="border-2 border-black text-center ">{p.description}</div>
               <div className="border-2 border-black text-center">{p.quantity}</div>
               <div className="border-2 border-black text-center">{p.expriredate}</div>
           </div>
          ))}
    </div>
    </div>
    </div>
  )
}


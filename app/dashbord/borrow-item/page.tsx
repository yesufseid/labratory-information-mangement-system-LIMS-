"use client"
import Navbar from '@/app/components/Navbar'
import { useState } from "react"
import {useEffect} from "react"
import { CreateBorrowedItem } from '@/app/lib/actions'


export default function page(){
  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [type,setType]=useState("")
  const [quantity,setQuantity]=useState("")
  const [from,setFrom]=useState("")
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([])
  useEffect(()=>{
    const items = localStorage.getItem("Bdata")
    const data=JSON.parse(items)
    console.log(data);
    return setData(data)
   },[])

  const handleSubmit=async()=>{ 
    setLoading(true)
    const data={
      name:name,
      description:description,
      type:type,
      quantity:quantity,
      from:from
    }
     try {
    const item=await CreateBorrowedItem(data)
    setLoading(false)
    console.log(item);
   } catch (error) {
    setError(true)
        console.log(error);
        
     }
      
  }



  return (
    <div>
      <Navbar />
      <div className='flex justify-center w-fit ml-32 gap-10'> 
      <div className=' flex gap-5 '>  
      <div>
      <h1 className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>borrowed item registration</h1>
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>name</label>
             <input type="text" className='border-2 border-black rounded-lg'
              onChange={(e)=>setName(e.target.value)}
             />
           
          
           </div>
           <div className='w-56 flex flex-col gap-3  '>
             <label className='capitalize'>From</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setFrom(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>type</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setType(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3'>
             <label className='capitalize'>quantity</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setQuantity(e.target.value)}
             />
           </div>
           {error&&(<p className="text-pink-500 text-center">try again</p>)}
           <div className='flex gap-32 mx-10 my-5 cursor-pointer justify-center'>
            <button type="button" 
               onClick={()=>handleSubmit()}
               disabled={name===""||quantity===""||description===""||type===""||from===""}
            className='px-5 py-2 bg-sky-600 rounded-lg hover:scale-110' >{loading?(<p>Loading...</p>):(<p>save</p>)}</button>
           
           </div>
      
      </div>
      
                 <div className='w-56 flex flex-col gap-3 mt-10 '>
             <label className='capitalize'>description</label>
             <textarea  rows={10} className='border-2 border-black rounded-lg'
                onChange={(e)=>setDescription(e.target.value)}
             />
                  </div>
           </div>
      
      <div className='mr-2'>
        <h1  className='capitalize text-2xl font-bold pt-3 text-center text-pink-900 '>borrowed items</h1>
        <div className='h-[350px] overflow-y-auto flex flex-col gap-3 border-2 border-sky-600 p-4 '>
    <div className="grid grid-cols-5 py-2 ">
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900 ">name</div>
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900">type</div>
               <p className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900 ">description</p>
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900">quantity</div>
               <div className="border-2 border-black capitalize text-2xl font-bold pt-3 text-center text-pink-900 overflow-hidden">from</div>
           </div>
          {data?.map((p)=>(
           <div className="grid grid-cols-5 ">
               <div className="border-2 border-black text-center">{p.name}</div>
               <div className="border-2 border-black text-center">{p.type}</div>
               <div className="border-2 border-black text-center ">{p.description}</div>
               <div className="border-2 border-black text-center">{p.quantity}</div>
               <div className="border-2 border-black text-center">{p.fom}</div>
           </div>
          ))}
    </div>
    </div>
      </div>
    </div>
  )
}


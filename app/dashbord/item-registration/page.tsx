"use client"
import Navbar from '@/app/components/Navbar'
import { useState } from "react"
import {CreateItems} from "../../lib/actions"


export default function Registraton(){
  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [type,setType]=useState("")
  const [quantity,setQuantity]=useState("")
  const [expriredate,setExpriredate]=useState("56-678-67")
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)



  const handleSubmit=async()=>{ 
    setLoading(true)
    const Splitdate=expriredate.split("-")
    const date=(Number(Splitdate[0])*31536000000)+(Number(Splitdate[1])*86400000*30)+(Number(Splitdate[2])*86400000)


    const data={
      name:name,
      description:description,
      type:type,
      quantity:quantity,
      expiredate:date,
      date:Date.now()
    }
     try {
    const item=await CreateItems(data)
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
      <div className=' mx-40 flex gap-10'>  
      <div className=' ml-32'>
      <h1 className='capitalize text-2xl font-bold pt-3 ml-32 text-center text-pink-900'>item registration</h1>
           <div className='w-56 flex flex-col gap-3 ml-32 '>
             <label className='capitalize'>name</label>
             <input type="text" className='border-2 border-black rounded-lg'
              onChange={(e)=>setName(e.target.value)}
             />
           
          
           </div>
           <div className='w-56 flex flex-col gap-3 ml-32 '>
             <label className='capitalize'>Expire date</label>
             <input type="text"  placeholder='2030-11-22' className='border-2 border-black rounded-lg'
                onChange={(e)=>setExpriredate(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3 ml-32'>
             <label className='capitalize'>type</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setType(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3 ml-32 '>
             <label className='capitalize'>quantity</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setQuantity(e.target.value)}
             />
           </div>
           {error&&(<p className="text-pink-500 text-center">try again</p>)}
           <div className='flex gap-32 mx-10 my-5 cursor-pointer justify-center'>
            <button type="button" 
               onClick={()=>handleSubmit()}
               disabled={name===""||quantity===""||description===""||type===""}
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
    </div>
  )
}


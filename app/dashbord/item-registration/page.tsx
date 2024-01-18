"use client"
import Navbar from '@/app/components/Navbar'
import { useState } from "react"
import {CreateItems} from "../../lib/actions"


export default function Registraton(){
  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [type,setType]=useState("")
  const [quantity,setQuantity]=useState("")
  const [expriredate,setExpriredate]=useState("")
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)

  const handleSubmit=async()=>{ 
    setLoading(true)
    const data={
      name:name,
      description:description,
      type:type,
      quantity:quantity,
      expriredate:expriredate
    }
     try {
    const item=await CreateItems(data)
    setLoading(false)
    console.log(item);
   } catch (error) {
        console.log(error);
        
     }
      
  }



  return (
    <div>
      <Navbar />
      <div className='flex justify-center w-fit mx-40 gap-20'> 
      <form>
      <h1 className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>item registration</h1>
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>name</label>
             <input type="text" className='border-2 border-black rounded-lg'
              onChange={(e)=>setName(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>description</label>
             <textarea  className='border-2 border-black rounded-lg'
                onChange={(e)=>setDescription(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>Expire date</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setExpriredate(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>type</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setType(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>quantity</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setQuantity(e.target.value)}
             />
           </div>
           {error&&(<p className="text-pink-500">try again</p>)}
           <div className='flex gap-32 mx-10 my-5 cursor-pointer'>
            <button type="button" 
               onClick={()=>handleSubmit()}
            className='px-5 py-2 bg-sky-600 rounded-lg hover:scale-110' >{loading?(<p>Loading...</p>):(<p>save</p>)}</button>
           
           </div>
         </form>
      
      <div className='ml-40'>
        <h1  className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>items</h1>
        <div className='h-[350px] overflow-y-auto flex flex-col gap-3 border-2 border-sky-600 p-4'>
              {[1,2,3,4,5,6,7].map((p)=>(
                <li className='bg-black text-white rounded-md p-2'>hellow Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Rem placeat at iure et fuga hic! Vero atque laudantium architecto
                   voluptatibus, delectus mollitia cum quibusdam? Quasi perspiciatis deleniti et aperiam vero.</li>
              ))}
        </div>
      </div>
      </div>
    </div>
  )
}


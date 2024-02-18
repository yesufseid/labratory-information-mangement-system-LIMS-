"use Client"
import logo from "../asset/1.png"
import { useState } from "react"
import { GetUser } from "../lib/actions"
import Image from "next/image"
type props={
    setShow?:React.Dispatch<React.SetStateAction<boolean>>
}
export const Login = ({setShow}:props) => {
   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")
   const [error,setError]=useState(false)
   const [disabled,setDisabled]=useState(false)
const handleSubmit=async()=>{ 
  setDisabled(true)
   try {
      const res=await GetUser(username,password)
      const dat=JSON.parse(res)
      if(dat.password){
        const data=JSON.stringify(dat) 
        localStorage.setItem("user",data)
        window.location.href="/"
      }else{
       setError(true)
      }
      
   } catch (error) {
      console.log(error);
      
   }
    
}


  return (
    <div className='mx-32 flex flex-col justify-center absolute top-20 left-32 z-50 bg-slate-400 p-10  '>
       <div className='flex justify-end'>
        <button className='text-5xl  mr-5 hover:scale-125 text-pink-700'
         onClick={()=>setShow(false)}
        >x</button>
        </div>
       <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="mx-auto"
       />
        <div>
         <div className="flex flex-col justify-center">
         <h1 className='capitalize text-2xl font-bold '>wellcome to labratory information mangement system(LIMS)</h1>
         <form >
           <div className='w-56 flex flex-col gap-3 mx-auto '>
             <label className='capitalize'>user name</label>
             <input type="text" className='border-2 border-black rounded-lg'
              onChange={(e)=>setUsername(e.target.value)}
             />
           </div>
           <div className='w-56 flex flex-col gap-3 mx-auto '>
             <label className='capitalize'>password</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setPassword(e.target.value)}
             />
           </div>
           {error&&(<p className="text-pink-500">incorrect password</p>)}
           <div className='flex gap-20 mx-10 my-5 cursor-pointer'>
            <button type="button" disabled={username==""||password==""} 
               onClick={()=>handleSubmit()}
            className='px-5 py-2 bg-sky-600 ml-72 rounded-lg hover:scale-110' >LogIn</button>
            <button type='button' className='px-3 py-2 bg-sky-600  rounded-lg hover:scale-110' >forget password</button>
           </div>
         </form>
         </div>
         </div>
    </div>
  )
}

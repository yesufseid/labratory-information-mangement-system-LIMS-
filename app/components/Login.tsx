import React from 'react'
type props={
    setShow:Dispatch<SetStateAction<boolean>>
}
export const Login = ({setShow}:props) => {
  return (
    <div className='mx-32 flex flex-col justify-center absolute top-20 left-32 z-50 bg-slate-400 p-20 '>
        <div>
            <div className='flex justify-end'>
        <button className='text-5xl  mr-5 pb-5 text-pink-700'
         onClick={()=>setShow(false)}
        >x</button>
        </div>
         <div>
         <h1 className='capitalize text-2xl font-bold '>wellcome to labratory information mangement system(LIMS)</h1>
         <form >
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>user name</label>
             <input type="text" className='border-2 border-black rounded-lg' />
           </div>
           <div className='w-56 flex flex-col gap-3 '>
             <label className='capitalize'>password</label>
             <input type="text" className='border-2 border-black rounded-lg' />
           </div>
           <div className='flex gap-32 mx-10 my-5 cursor-pointer'>
            <button type="button" disabled={false} className='px-5 py-2 bg-sky-600 rounded-lg hover:scale-110' >LogIn</button>
            <button type='button' className='px-3 py-2 bg-sky-600  rounded-lg hover:scale-110' >forget password</button>
           </div>
         </form>
         </div>
         </div>
    </div>
  )
}

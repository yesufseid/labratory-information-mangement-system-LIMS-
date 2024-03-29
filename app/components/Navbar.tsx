"use client"
import Image from 'next/image'
import logo from "../asset/1.png"
import { useEffect,useState} from 'react'
import Link from 'next/link'


type props={
    setShow?:React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({setShow}:props) => {
  const [user,setUser]=useState(false)
  useEffect(()=>{
  const user=localStorage.getItem("user")
  const data=JSON.parse(user)
  if(data)  return  setUser(true)
  },[])

const LogOut=()=>{
  localStorage.removeItem("user")
  return window.location.href="/"
}


  return (
    <div>
        <div className='bg-sky-600 flex gap-10 items-center px-10  py-2 '>
          <div className='flex gap-3 items-center text-white'>
        <Image
          src={logo}
          width={100}
         height={100}
          alt="Logo"
    />
    <div>
    <h1 className='capitalize text-2xl font-bold'>Wolkite University</h1>
    <p className='capitalize '>we strive for wisdom</p>
    </div>
    </div>
    <h1 className='capitalize text-2xl font-bold '>labratory information mangement system(LIMS)</h1>
    {user&&(<h1 className='capitalize text-2xl font-bold ml-20 text-pink-600 '>wellcome admin</h1>)}
        </div>
        {user?(
              <div className='flex justify-between mx-32 my-3 border-b-4 border-sky-700'>
              <Link href={"/"} className='border-2 mb-3 border-pink-600 hover:bg-pink-600 px-4 text-xl rounded-lg'>Home</Link>
              <Link href="/dashbord" className='border-2 mb-3 border-pink-600 hover:bg-pink-600 px-4 text-xl rounded-lg'>Dashbord</Link>
              <button className='border-2 mb-3 border-pink-600 hover:bg-pink-600 px-4 text-xl rounded-lg'
               onClick={()=>LogOut()}
              >LogOut</button>
          </div>
             ):(
              <div className='flex justify-between mx-32 my-3 border-b-4 border-sky-700'>
              <button className='border-2 mb-3 border-pink-600 hover:bg-pink-600 px-4 text-xl rounded-lg'>Home</button>
              <button className='border-2 mb-3 border-pink-600 hover:bg-pink-600 px-4 text-xl rounded-lg'
               onClick={()=>setShow(true)}
              >Login</button>
          </div>
             )}
    </div>
  )
}

export default Navbar
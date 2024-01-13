'use client'
import Navbar from "../components/Navbar"
import { GiBoxUnpacking } from "react-icons/gi";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { TbClockX } from "react-icons/tb";
import { MdOutlineHandshake } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { useState } from 'react'
import { Login } from "../components/Login";

const Dashbord = async() => {
  const [show ,setShow ]=useState(false)
  return (
 <div className="bg-slate-400">
    <Navbar setShow={setShow} />  
    <div className="bg-white mx-32 pb-6  ">
    <h1 className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>wellcome to central lab coordinat dashbord</h1>   
    <div className="grid grid-cols-3 gap-3 px-5">
        <div className="border-2 border-black flex flex-col justify-center">
          <GiBoxUnpacking className="w-32 h-32 text-yellow-400  mx-auto hover:scale-110 cursor-pointer duration-500" />
          <h1 className='capitalize text-2xl font-bold pt-5 text-center text-slate-500'>item registration</h1> 
        </div>
        <div className="border-2 border-black flex flex-col justify-center">
          <PiHandCoinsDuotone className="w-32 h-32 text-purple-600  mx-auto hover:scale-110 cursor-pointer duration-500" />
          <h1 className='capitalize text-xl font-bold pt-5 text-center text-slate-500'>recived chemical or equipment</h1> 
        </div>
        <div className="border-2 border-black flex flex-col justify-center">
          <TbClockX className="w-32 h-32 text-pink-700  mx-auto hover:scale-110 cursor-pointer duration-500" />
          <h1 className='capitalize text-2xl font-bold pt-5 text-center text-slate-500'><span className="text-pink-500">11 items </span>{" "}will expire soon</h1> 
        </div>
        <div className="border-2 border-black flex flex-col justify-center">
          <MdOutlineHandshake className="w-32 h-32 text-slate-950  mx-auto hover:scale-110 cursor-pointer duration-500" />
          <h1 className='capitalize text-2xl font-bold pt-5 text-center text-slate-500'>borrow item</h1> 
        </div>
        <div className="border-2 border-black flex flex-col justify-center">
          < BiTransfer className="w-32 h-32 text-sky-950  mx-auto hover:scale-110 cursor-pointer duration-500" />
          <h1 className='capitalize text-2xl font-bold pt-5 text-center text-slate-500'>transfer item</h1> 
        </div>
    </div>
    </div>
    {show&&<Login setShow={setShow} />}
 </div>
  )
}
export default Dashbord
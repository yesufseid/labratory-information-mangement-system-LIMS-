"use client"
import Image from 'next/image'
import logo from "../app/asset/2.jpeg"
import { Login } from './components/Login'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function Home() {
    const [show ,setShow ]=useState(false)
  return (
   <div className="w-screen ">
      <Navbar setShow={setShow} />
      <div className="flex gap-10 mx-32 pt-5">
        <div className='w-56 py-1'>
      <Image
          src={logo}
          width={200}
            height={200}
          alt="Logo"
    />
    </div>
    <div className=''>
    <h1 className='capitalize text-2xl font-bold pt-5 text-center'>wellcome to labratory information mangement system(LIMS)</h1>
    <h1 className='capitalize text-xl text-pink-600  mt-9'>LIMS is software that automates the folloeing labratory related business processes 
    of a university </h1>
    <ul className='flex flex-col gap-3 capitalize mt-5'>
      <li>1, inComing labratory stock information</li>
      <li>2, transfer, borrow and return management </li>
      <li>3, labratory and staff information</li>
      <li>4, purrchase request Approval system</li>
      <li>5, and different requesting service </li>
    </ul>
    </div>
      </div>
      {show&&<Login setShow={setShow} />}
      <Footer />
   </div>
  )
}

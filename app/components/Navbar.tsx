"use client"
import Image from 'next/image'
import logo from "../favicon.ico"

type props={
    setShow?:Dispatch<SetStateAction<boolean>>
}

const Navbar = ({setShow}:props) => {
  return (
    <div>
        <div className='bg-sky-600 flex gap-20 items-center px-10  py-2 '>
        <Image
          src={logo}
          width={70}
            height={70}
          alt="Logo"
    />
    <h1 className='capitalize text-2xl font-bold '>labratory information mangement system(LIMS)</h1>
        </div>
        <div className='flex justify-between mx-32 my-3 border-b-4 border-sky-700'>
            <button className='border-2 mb-3 border-pink-600 hover:bg-pink-600 px-4 text-xl rounded-lg'>Home</button>
            <button className='border-2 mb-3 border-pink-600 hover:bg-pink-600 px-4 text-xl rounded-lg'
             onClick={()=>setShow(true)}
            >Login</button>
        </div>
      

    </div>
  )
}

export default Navbar
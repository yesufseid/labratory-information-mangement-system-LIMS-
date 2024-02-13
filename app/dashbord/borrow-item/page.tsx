"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '@/app/components/Navbar'
import { useState } from "react"
import {useEffect} from "react"
import { CreateBorrowedItem } from '@/app/lib/actions'


export default function page(){
  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [type,setType]=useState("")
  const [quantity,setQuantity]=useState("")
  const [return_day,setReturn]=useState("")
  const [to,setTo]=useState("")
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
      to:to,
      restortion_day:return_day
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
             <label className='capitalize'>to</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setTo(e.target.value)}
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
           <div className='w-56 flex flex-col gap-3'>
             <label className='capitalize'>return day</label>
             <input type="text" className='border-2 border-black rounded-lg'
                onChange={(e)=>setReturn(e.target.value)}
             />
           </div>
           {error&&(<p className="text-pink-500 text-center">try again</p>)}
           <div className='flex gap-32 mx-10 my-5 cursor-pointer justify-center'>
            <button type="button" 
               onClick={()=>handleSubmit()}
               disabled={name===""||quantity===""||description===""||type===""||to===""||return_day===""}
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
        <div className='h-[350px] overflow-y-auto flex flex-col gap-3 border-2 border-sky-600  '>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900">name</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">type</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">description</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">quantity</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">to</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">return day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) =>{
          return(
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='text-center' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='text-center' align="right">{row.type}</TableCell>
              <TableCell className='text-center' align="right"><p className='w-40 break-words h-fit '>{row.description}</p></TableCell>
              <TableCell className='text-center' align="right">{row.quantity}</TableCell>
              <TableCell className='text-center' align="right">{row.from}</TableCell>
              <TableCell className='text-center' align="right">{row.restortion_day}</TableCell>
            </TableRow>
)})}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </div>
      </div>
    </div>
  )
}


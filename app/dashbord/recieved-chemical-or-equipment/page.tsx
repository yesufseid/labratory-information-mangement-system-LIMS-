"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from "@/app/components/Navbar"
import {useEffect,useState} from "react"



export default function page() {
  const [data,setData]=useState([])
  useEffect(()=>{
   const items = localStorage.getItem("data")
   const data=JSON.parse(items)
   console.log(data);
   return setData(data)
  },[])

  return (
    <div className="flex flex-col gap-5 justify-center">
      <Navbar />
      <h1 className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>All items</h1>
    <div>
    <div className='mx-10 gap-3 overflow-y-auto  border-2 border-sky-600 p-5'>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900">name</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">type</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">description</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">quantity</TableCell>
            <TableCell  className="capitalize text-2xl font-bold  text-center text-pink-900" align="right">expriredate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) =>{
            let col=false
            if(row.type==="equipment") col=true
            const newdate = new Date(row.createdAt); 
            const date=(newdate.getFullYear()*31536000000)+(newdate.getMonth()*86400000*30)+(newdate.getDay()*86400000)
            const e= row.expiredate/86400000
              const d=(date/86400000)+((row.date-Date.now())/86400000)+((date-e)/86400000)*0.001
              let Word=e-d>0?"days left":"days pass"
              let sss=Math.floor(e-d) 
          return(
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='text-center' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='text-center' align="right">{row.type}</TableCell>
              <TableCell className='text-center' align="right"><p className='w-56 break-words h-fit text-center '>{row.description}</p></TableCell>
              <TableCell className='text-center' align="right">{row.quantity}</TableCell>
              <TableCell className='text-center' align="right">{col?"":sss+Word}</TableCell>
            </TableRow>
)})}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
    </div>
    </div>
  )
}


'use client'
import { useState } from "react";


export default function Counter({user}){
   const [count,setcount]=useState(0);

   console.log(user)

   return <button onClick={()=>setcount((c)=>c+1)}>{count}</button>





}
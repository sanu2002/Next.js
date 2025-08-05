// app/cabins/page.js
// 'use client' // By using this tag we cam make it client side rendering 

'use client'

import { useState } from "react";
import Counter from "../components/counter";

export default async function CabinsPage() {


  const [ user,setuser] =useState();

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data=await res.json();
  // console.log(data)

  return (
  <div>
    <h1> welcome  cabins </h1>

    <ul>
      {data.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>

    <Counter user={data} />


  </div>
  


)
}

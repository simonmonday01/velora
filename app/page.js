"use client"
import { useEffect, useState } from "react"


export default functionsHome (){
const [count,setcount] =useState(0

return (
  <main className="flex flex-col gap-20 items-center justify-center px-20 py-20">
  <p className="text-4x1 font-bold">count : {count}</p>
  <button onClick={() => setcount(count+1)} className="w-[200px] h-[50px] text-white bg-blue-400">Increment</button>
  <button onClick={() => setcount(count+1)} className="w-[200px] h-[50px] text-white bg-blue-400">Decrement</button>
  </main>
)
}

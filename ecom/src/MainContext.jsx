import React, { createContext, useEffect, useState } from 'react'
export let cartContext=createContext()
export default function MainContext({children}) {
  let [cart,setCart]=useState([])  
  let [count,setCount]=useState(0)    
  let obj={cart,setCart,count,setCount}

  useEffect(()=>{
    console.log(cart);
    
  },[cart])
   

  return (
    <cartContext.Provider value={obj}>
      {children}
    </cartContext.Provider>
  )
}

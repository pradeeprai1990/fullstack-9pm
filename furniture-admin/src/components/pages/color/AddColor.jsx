import React, { useState } from "react";
import { SketchPicker } from 'react-color'
export default function AddColor() {
    let [color,setColor]=useState("#000")
  return (
    <div>
      Add Color  
      <div className="border">
        <h3 className="p-2 font-bold border-1">Add Colors</h3>
        <form action="">
            <div className="p-3">
                <label htmlFor="">Color Name</label>
                <input className="w-full border-1 p-1" type="text" placeholder="Enter The Color" />
            </div>
            <div className="p-3">
                <label htmlFor="">Color Code</label>
               <SketchPicker
               color={color}
               onChange={(e)=>setColor(e.hex)}
               />
            </div>
            <div className="p-3">
                <label htmlFor="">Color Order</label>
                <input className="w-full border-1 p-1" type="text" placeholder="Enter The Order" />
            </div>
            <div className="p-3">
                <button className="bg-green-600 p-2">Save</button>
            </div>
        </form>
      </div>
    </div>
  );
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {

  let {slug}=useParams()

  let [data,setData]=useState(null)
  let [mainImg,setMainimg]=useState('')

  let getProductDetails=async ()=>{
    let apiRes= await axios.get(`https://wscubetech.co/ecommerce-api/productdetails.php?slug=${slug}`)
    let data=apiRes.data
    let {product}=data

    setMainimg(product.image)

    setData(product)

   
    
     
  }

  useEffect(()=>{
    if(slug){
        getProductDetails()
    }

  },[slug])

  return (
    <div>
      {
        data &&
        <div>
            <h1 className='text-center py-10 bg-yellow-200 font-bold text-3xl'>
                {data.name}
            </h1>


            <div className='max-w-[1320px] mx-auto grid items-center grid-cols-2 gap-5'>
                <figure>
                    <img src={mainImg} className='w-[100%]' alt="" />
                    
                    
                    <div className='grid grid-cols-5'>
                        {
                            data.multiple_images.map((src,index)=>{
                                return(
                                    <img onClick={()=>setMainimg(src)} src={src} />
                                )
                            })
                        }
                    </div>
                </figure>
                <div>
                   <p className='mb-5'>
                     {data.description}
                   </p>
                   <p className='mb-5'>
                    Rs {data.price}
                   </p>
                </div>
            </div>

        </div>
      }
    </div>
  )
}

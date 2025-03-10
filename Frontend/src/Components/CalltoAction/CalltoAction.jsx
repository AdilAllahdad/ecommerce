import React from 'react'
import bgImg from "../../assets/calltoActionBg.jpg";

export const CalltoAction = () => {
  return (
    <div className=''>
        <div className='py-10' style={{backgroundImage:`url(${bgImg})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition: 'center center', height: '100%', width: '100%'}}>

<div className='max-w-xl mx-auto space-y-6'>
<h1 className='text-4xl text-white text-center'>Get Notified About New Products</h1>
<input className='w-full p-3' type="text"  placeholder='Enter your email'/>
</div>

        </div>
    </div>
  )
}

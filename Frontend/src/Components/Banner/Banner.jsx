import React from 'react'
import banner from "../../assets/shoppingGirl.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


export const Banner = () => {
  return (
    <div>
        <section className="text-gray-600 body-font py-24 dark:bg-gray-950">
  <div className="container grid  md:grid-cols-2 grid-cols-1 gap-6 " >
    <div className="  mb-10 md:mb-0 mx-auto">
      <img className="h-[350px] w-[400px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] aos-init aos-animate" alt="hero" src={banner} data-aos = "fade-up"/>
    </div>
    <div className="flex flex-col gap-6">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-gray-900 dark:text-white">Winter Sale upto 50% Off</h1>
      <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio
</p>
<div className='flex flex-col gap-4 aos-init aos-animate' data-aos="fade-up">

      <div className="flex justify-start items-center gap-4">
       <GrSecure className='text-4xl h-12 w-12 rounded-full bg-violet-200 p-4'/>
       <p className='dark:text-white'>Quality Products</p>
      </div>

      <div className="flex justify-start items-center gap-4">
       <IoFastFood className='text-4xl h-12 w-12 rounded-full p-4 bg-orange-100 dark:bg-orange-400'/>
       <p className='dark:text-white'>Quality Products</p>
      </div> <div className="flex justify-start items-center gap-4">
       <GiFoodTruck className='text-4xl h-12 w-12 rounded-full bg-green-100 dark:bg-green-400 p-4'/>
       <p className='dark:text-white'>Quality Products</p>
      </div> <div className="flex justify-start items-center gap-4">
       <GiFoodTruck className='text-4xl h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-400  p-4'/>
       <p className='dark:text-white'>Quality Products</p>
      </div>

</div>


      
    </div>
  </div>
</section>
    </div>
  )
}

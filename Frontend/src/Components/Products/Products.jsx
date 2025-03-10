import React, { useEffect } from 'react'
import Img1 from "../../assets/women.png"
import Img2 from "../../assets/girlShopping1.jpg"
import Img3 from "../../assets/shoppingGirl.jpg"
import Img4 from "../../assets/girlShopping2.jpg"
import {FaStar} from "react-icons/fa6";
// import AOS from "aos";
export const Products = () => {
   
    const ProductsData = [
        {
            id:1,
            img: Img1,
            title:"Woman Ethnic",
            rating:5.0,
            color:"white",
            aosDelay: "0"
        },
        {
            id:2,
            img: Img2,
            title: "Women western",
            rating:4.2,
            color:"Red",
            aosDelay: "0"
        },
        {
            id:3,
            img: Img3,
            title: "Goggles",
            rating:4.7,
            color:"brown",
            aosDelay: "0"
        },
        {
            id:4,
            img: Img1,
            title: "Printed T-Shirt",
            rating:4.4,
            color:"yellow",
            aosDelay: "200"
        },
        {
            id:5,
            img: Img3,
            title: "Fashin T-Shirt",
            rating:5.0,
            color:"Pink",
            aosDelay: "300"
        }
    ]
  return (
    <div className='py-14 pb-12 bg-white dark:bg-gray-950'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos = "fade-up" className='text-3xl font-bold dark:text-white'>Products</h1>
                <p data-aos = "fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit dolorem ad! </p>
            </div>
            {/* Body Section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* card section */}
                    {ProductsData.map((data)=>(

 <div
 data-aos = "fade-up"
 data-aos-delay= {data.aosDelay}
 key={data.id} className='space-y-3 '>
<img src={data.img} className='h-[220px] w-[150px] object-cover rounded-md ' alt="" />
<h3 className='font-semibold dark:text-white'>{data.title}</h3>
<p className='text-sm text-gray-600 dark:text-gray-200'>{data.color}</p>
<div className='flex items-center gap-1'>
    <FaStar className='text-yellow-400'></FaStar>
    <span className='dark:text-white'>{data.rating}</span>
</div>
 </div>
                    ))}
               

                </div>
            </div>
        </div>
    </div>
  )
}

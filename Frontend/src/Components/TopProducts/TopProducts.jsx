import React from 'react'
import Img1 from "../../assets/shirt1.png"
import Img2 from "../../assets/shirt2.png"
import Img3 from "../../assets/shirt3.png"
import { FaStar } from 'react-icons/fa6'
import { useCart } from "../../context/CartContext";



const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        id: 2,
        img: Img2,
        title: "Casual Wear",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        id: 3,
        img: Img3,
        title: "Casual Wear",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
]
export const TopProducts = () => {
    const { addToCart } = useCart();
  return (
    <div className='dark:bg-gray-950'>
        {/* Header Section */}
        <div className='container'>
        <div className=' mb-24 max-w-[600px] dark:text-gray-600'>
                <p className='text-sm text-primary'>Top Rated Products for you</p>
                <h1 data-aos = "fade-up" className='text-3xl font-bold dark:text-white'>Best Products</h1>
                <p data-aos = "fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit dolorem ad! </p>
            </div>
        </div>
       
            {/* Body Section */}
<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 place-items-center gap-24 sm:gap-5'>
    {ProductsData.map((data)=>(
        <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
{/* Image section */}
<div className='h-[100px]'>
    <img src={data.img} alt="" 
    className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
    />
</div>
{/* details section */}
<div className='p-4 text-center'>
    {/* star rating */}
    <div className='w-full flex items-center justify-center gap-1 '>
        <FaStar className='text-yellow-500'/> 
        <FaStar className='text-yellow-500'/> 
        <FaStar className='text-yellow-500'/> 
        <FaStar className='text-yellow-500'/> 
    </div>
    <h1 className='text-xl font-bold dark:text-white'>{data.title}</h1>
    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
    <button onClick={addToCart} className='bg-primary hover:scale-105 duration-300 rounded-full  text-white py-1 px-4 group-hover:text-primary group-hover:bg-white mt-3' 
    // onClick={handleOrderPopup}
    >Order Now</button>
</div>
        </div>
    ))}
</div>
    </div>
  )
}

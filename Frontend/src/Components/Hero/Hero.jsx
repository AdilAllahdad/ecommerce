import React from 'react'
import image1 from "../../assets/shopping.png";
import image2 from "../../assets/women.png";
import image3 from "../../assets/sale.png";
import Slider from "react-slick";

const ImageList = [
    {
        id:1,
        img: image1,
        title: "Upto 50% off on all Men's Wear",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        id:2,
        img: image2,
        title: "Upto 50% off on all Men's Wear",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        id:3,
        img: image3,
        title: "Upto 50% off on all Men's Wear",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
]


export const Hero = () => {
    const settings = {
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,

    }
  return (
    <div className='relative overflow-hidden min-h-[450px]  sm-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
{/* Background Setup */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div>
        {/* Hero Section */}

        <div className='container  sm-pb-0'>
            <Slider {...settings}>
                { ImageList.map((item)=>(
  <div>
  <div className='grid grid-cols-1 sm:grid-cols-2'>
      {/* text content section */}
      <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
          <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
          className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{item.title}</h1>
          <p
            //    data-aos="fade-up"
            //    data-aos-duration="500"
            //    data-aos-delay="100"
          className=''>{item.description}</p>
          <div>
      <button
        //    data-aos="zoom-in"
        //    data-aos-duration="500"
        //    data-aos-delay="300"
            
className='bg-gradient-to-r from-primary to-secondary hover:scale-105 rounded-full px-4 py-2 text-white'>Order Now</button>
          </div>
      </div>

      {/* image section */}
      <div className='order-1 sm:order-2'>
          <div
          data-aos="zoom-in"
          data-aos-once="true"

          className='relative z-10'>
              <img src={item.img} alt="" 
              className='sm:h-[450px] sm-w-[450px] sm:scale-12 
              object-contain mx-auto'
              />
          </div>
      </div>

  </div>
</div>
                )) }
          
            </Slider>
           
        </div>

        
         </div>
 )
}

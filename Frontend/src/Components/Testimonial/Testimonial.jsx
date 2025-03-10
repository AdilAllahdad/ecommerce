import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/img1.jpg"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const testimonialData = [
    {
      clientPicture : img1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      clientName: "Alice" 
    },
    {
      clientPicture : img1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      clientName: "Mick" 
    },
    {
      clientPicture : img1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      clientName: "Robin" 
    },
    {
      clientPicture : img1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      clientName: "Johnson" 
    },
  ]
  return (
    <div className='dark:bg-gray-950 pb-24'>
        {/* Header of testimonial */}
         <div className='text-center pb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary '>What our customers are saying</p>
                <h1 className='text-3xl font-bold dark:text-white'>Testimonials</h1>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>
        {/* Body of testimonial */}

<div className='container'>
<Slider {...settings}>
      {
         testimonialData.map((data)=>(
          <div class="container p-4 w-full">
          <div class="h-full bg-orange-100 py-5 px-6 w-full rounded-lg drop-shadow-lg">
           
            <div className=''>
          <img alt="testimonial" src={data.clientPicture} class="w-20 h-20 rounded-full object-contain"/>
            </div>
          <div className='w-full flex justify-end'>
  
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-10 h-10 text-gray-400 mb-4 text-right" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
  
          </div>
          <div className='text-start'>
            <p class="text-sm">{data.description}</p>
            <a class="inline-flex">
              <span class="">
                <span class="font-bold text-2xl text-gray-900">{data.clientName}</span>
              </span>
            </a>
            </div>
          </div>
        </div>
         )) 
        }
    
    </Slider>
    </div>
    </div>
  )
}

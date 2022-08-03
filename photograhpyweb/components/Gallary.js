import React from 'react'
import ImageSlider from 'react-simple-image-slider';
import SimpleImageSlider from "react-simple-image-slider";
import  Images, { imageSlide } from'./image'




const Gallary = ({props}) => {
  console.log(imageSlide)
    
    // const images = [
    //     { url: "images/1.jpg" },
    //    { url: "images/2.jpg" },
    //    { url: "images/3.jpg" },
    //    { url: "images/4.jpg" },
    //    //  {
    //    //     image:'../public/images/5.webp'
    //    //  },
    //    ];
   
  return (
    <div className='flex items-center justify-center py-14'>
      
     <SimpleImageSlider
        width={896}
        height={504}
        images={imageSlide}
        showBullets={true}
        showNavs={true}
        navStyle={2}
      />
      
    </div>
  )
}

export default Gallary
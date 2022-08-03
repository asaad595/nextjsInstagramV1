import React from 'react'

const Hero = ({message,heading}) => {
  return (
    <div className='flex  justify-center items-center h-screen  mb-4 bg-fixed bg-center bg-cover custom-image'>

       {/* overlay */}
       <div className='absolute top-0 bottom-0 right-0  left-0 bg-black/70 z-[2]' />
       
        <div className='text-white z-[2]  px-5 mt-[-10rem]'>
            <h1 className='text-5xl font-bold ' >{heading}</h1>
            <p className='text-xl py-5'> {message}</p>
            <button className='px-8 py-2 border'>Book </button>
        </div>
    </div>
  )
}

export default Hero
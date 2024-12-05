import React from 'react'

const Hero = () => {
  return (
    <div 
    className='w-full h-screen bg-cover bg-my-image bg-no-repeat bg-center'>
     <div className='container ps-1 pr-8 py-6 absolute right-10 bottom-10 object-right w-auto bg-orange-50 text-balance'>
      <p className='mx-10 mt-20 font-serif font-bold'>New Arrival</p>
      <h1 className='ml-10 mr-52 text-yellow-600 font-bold text-5xl'>Discover Our <br/> 
      <span className='mt-4'>New Collection</span> </h1>
      <p className='mx-10 my-8 font-semibold'>Elevate your living space with our new furniture collection.
         Crafted with <br /> quality and style. From sleek and modern designs to timeless classics, our <br />collection offers something for every style and taste.</p>
      <button className='px-20 py-6 mx-10 my-10 items-center bg-yellow-600 text-white font-extrabold
      hover:shadow-xl hover:text-orange-50 hover:px-24'>BUY NOW</button>
     </div>
    </div> 
  )
}

export default Hero
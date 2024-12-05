import React from 'react'

const footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <hr className='bg-gray-700'/>
   <div className="container px-5 py-24 ml-40 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
         <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
         <span className="ml-3 my-4 text-2xl font-bold">Woodico.</span>
       </a>
       <p className="mt-2 text-sm text-gray-400">1234 Maple Street <br/> Anytown, Pakistan 123456</p>
     </div>
     <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
         <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mb-3">Links</h2>
         <nav className="list-none mb-10">
           <li>
             <a className="text-gray-600 hover:text-gray-800">Home</a>
           </li>
           <li>
             <a className="text-gray-600 hover:text-gray-800">About</a>
           </li>
           <li>
             <a className="text-gray-600 hover:text-gray-800">Shop</a>
           </li>
           <li>
             <a className="text-gray-600 hover:text-gray-800">Contact</a>
           </li>
         </nav>
       </div>
       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
         <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Help</h2>
         <nav className="list-none mb-10">
           <li>
             <a className="text-gray-600 hover:text-gray-800">Payment Options</a>
           </li>
           <li>
             <a className="text-gray-600 hover:text-gray-800">Returns</a>
           </li>
           <li>
             <a className="text-gray-600 hover:text-gray-800">Privacy Policies</a>
           </li>
         </nav>
       </div>
       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
         <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Newsletter</h2>
         <nav className="list-none mb-10">
           <li>
             <a className="text-gray-400 hover:text-gray-800 underline-offset-1">Enter Your Email Address.</a>
           </li>
           <li>
           <button className='font-lg font-bold mt-3 px-4 py-2 rounded-xl shadow-inner hover:border-2 border-gray-400 hover:text-slate-900'>SUBSCRIBE</button>
           </li>
         </nav>
       </div>
     </div>
   </div>
   <hr/>
   <div className="bg-gray-100">
     <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
       <p className="text-gray-800 text-sm text-center sm:text-left">© 2024 Woodico — All Rights reserved
       </p>
     </div>
   </div>
 </footer>
  )
}

export default footer
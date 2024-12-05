import React from 'react'

const page = () => {
  return (
    <main>
      <section className='w-full h-screen bg-cover bg-about-image bg-no-repeat bg-center flex justify-center items-center text-center'>
        <div className='bg-orange-100 p-3 my-5'>
          <h2 className='text-yellow-600 text-2xl' >About Us-Woodico</h2>
          <br />
          <p>At <b className='text-yellow-600'> Woodico,</b> we believe that furniture is more than just functional; it's an expression of who you are. <br /> Our mission is to transform your living spaces into beautiful, <br /> comfortable, and inspiring environments with our thoughtfully designed furniture. <br />
Rooted in craftsmanship and innovation, Woodico combines timeless elegance with modern functionality. <br /> Each piece in our collection is carefully curated to reflect a blend of style, <br /> durability, and comfort, ensuring it becomes a cherished part of your home. <br /> From sleek and contemporary designs to classic and rustic pieces, we offer something for every taste and lifestyle.</p>
<br />
         <h3 className='text-yellow-600 text-xl'>Why Choose Woodico?</h3>
         <br /> 
         <ul>
          <li> <b className='text-yellow-600'>Quality Craftsmanship: </b>We take pride in using premium materials <br /> and expert craftsmanship to create furniture that stands the test of time.</li>
          <li> <b className='text-yellow-600'>Affordable Elegance:</b> Exceptional designs shouldn't come at a premium. <br /> At Woodico, we bring you affordable furniture without compromising on quality or style.</li>
          <li><b className='text-yellow-600'>Customer-Centric Approach:</b> Your satisfaction is at the heart of everything we do. <br /> From seamless browsing to hassle-free delivery, <br /> we strive to make your  shopping experience delightful.</li>
          <li> <b className='text-yellow-600'>Sustainability:</b> We are committed to sustainability by sourcing materials <br /> responsibly and creating designs that are both beautiful and eco-conscious.</li>
         </ul>
         <br />
         <p className='text-yellow-600'> <em>Explore our collections and let us help you create the perfect space for every moment. <br /> At Woodico, we're not just furnishing homes—we're crafting stories. </em></p>
        </div>
      </section>
    </main>
  )
}

export default page

import React from 'react'

const page = () => {
  return (
    <main className='w-full h-screen bg-my-image bg-no-repeat bg-cover bg-center relative'>
      <section className='border max-w-lg ml-96 left-20 mt-20 p-10 pr-11 bg-orange-100 shadow-lg justify-center items-center absolute'>
        <h2 className='text-yellow-600 text-2xl mb-3'>Contact Us</h2>
        <form>
        <input type="text" placeholder='First Name' className='w-full px-2 py-1 mb-3 bg-orange-50 border border-yellow-600 rounded-md' required />
        <input type="text" placeholder='Last Name' className='w-full px-2 py-1 mb-3 bg-orange-50 border border-yellow-600 rounded-md' />
        <input type="email" placeholder='Email' className='w-full px-2 py-1 mb-3 bg-orange-50 border border-yellow-600 rounded-md' required/>
        <input type="tel" placeholder='Contact' className='w-full px-2 py-1 mb-3 bg-orange-50 border border-yellow-600 rounded-md' />
        <textarea placeholder='Your Feedback' rows={6} className='w-full px-2 py-1 mb-4 bg-orange-50 border border-yellow-600 rounded-md' required></textarea>
        <button type='submit' className='px-6 py-3 items-center inline-block bg-yellow-600 text-white font-bold cursor-pointer rounded
      hover:shadow-xl hover:px-9'>Send Message</button>
        </form>
      </section>
    </main>
  )
}

export default page
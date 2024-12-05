import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <main>
        <section>
            <div>
              <h1 className=' font-bold text-center text-4xl'>Browse The Range</h1>
              <br/>
              <p className='text-base text-center '>Find the perfect pieces to make your place feel like yours.</p>
            </div>
            <div className='flex justify-center items-center min-h-screen mx-12 my-5'>
              <div className='flex flex-cols-3 gap-10'>
                <Image className='flex-1 rounded-xl' width='400' height='800' src='/images/coff.jpg' alt="Living"/>
                <Image className='flex-1 rounded-xl' width='400' height='800' src="/images/study.jpg" alt='Study'/>
                <Image className='flex-1 rounded-xl' width='400' height='800' src="/images/beds.jpg" alt='Bedroom'/>
              </div>
            </div>
            <div className='font-semibold text-4xl'>
                <ul className='flex flex-row gap-8 mt-0 mb-16'>
                    <li className='flex-1 text-center ml-20'>Living</li>
                    <li className='flex-1 text-center'>Study</li>
                    <li className='flex-1 text-center mr-20'>Bedroom</li>
                </ul>
            </div>
        </section>
    </main>
  )
}

export default Products
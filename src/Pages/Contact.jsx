import React from 'react'

export default function Contact() {
  return (
    <div className='h-auto bg-black text-white p-24'>
        <div className=''>
            <div data-aos='fade-in' className='flex justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>MEKRAS</h1>
                    <h2 className='text-sm font-light'>©2022 Pasar Kembang</h2>
                </div>
                <div className='grid w-[45%] grid-cols-3 gap-x-12 gap-y-4 place-items-center font-light'>
                    <h1 className='hover:font-bold duration-300'>Privacy Policy</h1>
                    <h1 className='hover:font-bold duration-300'>Customer Service</h1>
                    <h1 className='hover:font-bold duration-300'>Terms of Use</h1>
                    <h1 className='hover:font-bold duration-300'>Accessibility</h1>
                    <h1 className='hover:font-bold duration-300'>Procedures</h1>
                    <h1 className='hover:font-bold duration-300'>COVID-19</h1>
                    <h1 className='hover:font-bold duration-300'>Pricing</h1>
                    <h1 className='hover:font-bold duration-300'>Contact</h1>
                    <h1 className='hover:font-bold duration-300'>Partners</h1>
                </div>
                <div>
                    <button className='box hover:bg-white hover:text-black duration-300'>
                        <h1 className='text-sm font-semibold'>Get the Newsletter</h1>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

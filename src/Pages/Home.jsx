import React from 'react'
import Header from './Header'
import '../App.css'

export default function Home() {
  return (
    <>
        <Header/>
        <div className='h-screen bg-black grid place-items-center'>
            <div className='text-white pb-40 font-semibold'>
                <h1 data-aos='fade-in' className='text-6xl font-bc'>COMING SOON.</h1>
                <h1 data-aos='fade-in' className='text-2xl text-center font-light'>See you in Tugu</h1>
                <div data-aos='fade-in' className='pt-5 flex justify-evenly'>
                    <button className='box grid place-items-center font-light hover:bg-white hover:text-black duration-300'>
                        <h1>Get your tickets</h1>
                    </button>
                    <button className='box grid place-items-center font-light hover:bg-white hover:text-black duration-300'>
                        <h1>Check our schedule</h1>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

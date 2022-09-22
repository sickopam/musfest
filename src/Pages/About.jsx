import React from 'react'
import Coach from '../Images/coach.jpg'
import Coach2 from '../Images/coach2.jpeg'

export default function About() {
  return (
    <div className='h-auto bg-black p-24 text-white text-5xl font-bold'>
        <div className='space-y-64'>
            <div data-aos='fade-in' className='inline-flex'>
                <img className='w-1/2' src={Coach} alt='coach'></img>
                <div className='ml-20'>
                    <h1 className='mb-12'>ABOUT US</h1>
                    <p className='text-lg text-justify font-light mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className='box hover:bg-white hover:text-black duration-300'>
                        <h1 className='font-bold text-base'>Learn More</h1>
                    </button>
                </div>
            </div>
            <div data-aos='fade-in' className='inline-flex'>
                <img className='w-1/2' src={Coach2} alt='coach'></img>
                <div className='ml-20'>
                    <h1 className='mb-12'>JOIN US</h1>
                    <p className='text-lg text-justify font-light mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className='box hover:bg-white hover:text-black duration-300'>
                        <h1 className='font-bold text-base'>Learn More</h1>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

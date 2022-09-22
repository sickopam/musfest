import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


export default function Header() {
  return (
    <div className='sticky top-0 z-50 h-auto bg-black font-semibold'>
        <div data-aos='fade-in' className='h-fit p-10 px-10 xl:px-20 flex justify-between text-white'>
            <div className='flex justify-between space-x-4'>
                <h1 className='text-2xl'>MEKRAS ©</h1>
                <h1 className='text-2xl'>|</h1>
                <h1 className='text-lg grid items-center'>Yogyakarta's Finest</h1>
            </div>
            <div className='flex justify evenly text-lg space-x-10'>
                <button className='grid items-center whitelink'>Music</button>
                <button className='grid items-center whitelink'>Passes</button>
                <button className='grid items-center whitelink'>Location</button>
                <button className='grid items-center whitelink'>Merchandise</button>
                <button className='grid items-center whitelink'>Tickets</button>
                <button className='grid items-center'>
                    <AiOutlineSearch size={22} className='hover:text-yellow-400 duration-300'/>
                </button>
            </div>
        </div>
    </div>
  )
}

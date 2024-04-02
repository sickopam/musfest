import React from 'react'
import Header from './Header'

import Docs from '../Images/doc.png'
import Docs2 from '../Images/doc2.png'
import Docs3 from '../Images/docs3.png'
import Docs4 from '../Images/docs4.png'

export default function Merchandise() {
  return (
    <>
        <Header/>
        <div className='bg-white h-fit p-10 px-10 xl:px-20 flex justify-evenly'>
            <div className='grid grid-cols-4 gap-16 pb-10'>
                <div className='card'>
                    <div className='layout duration-200 grid place-items-center'>
                        <h1>BUY NOW</h1>
                    </div>
                    <img src={Docs} alt='doc'></img>
                    <div className='text-center'>
                        <h1 className='italic uppercase'>1461 Smooth Leather Platform Shoes</h1>
                        <h2 className='text-xl font-bold'>$159.99</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='layout duration-200 grid place-items-center'>
                        <h1>BUY NOW</h1>
                    </div>
                    <img src={Docs2} alt='doc'></img>
                    <div className='text-center'>
                        <h1 className='italic'>2976 BEX SMOOTH LEATHER CHELSEA BOOTS</h1>
                        <h2 className='text-xl font-bold'>$179.99</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='layout duration-200 grid place-items-center'>
                        <h1>BUY NOW</h1>
                    </div>
                    <img src={Docs3} alt='doc'></img>
                    <div className='text-center'>
                        <h1 className='italic'>1461 SMOOTH LEATHER LEPRE SHOES</h1>
                        <h2 className='text-xl font-bold'>$129.99</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className='layout duration-200 grid place-items-center'>
                        <h1>BUY NOW</h1>
                    </div>
                    <img src={Docs4} alt='doc'></img>
                    <div className='text-center'>
                        <h1 className='italic'>1460 PASCAL VIRGINIA LEATHER BOOTS</h1>
                        <h2 className='text-xl font-bold'>$159.99</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

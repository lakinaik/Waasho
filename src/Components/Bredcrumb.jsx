import React from 'react'
import { Link } from 'react-router-dom'


const Bredcrumb = ({page}) => {
  return (
    <>
       <section className="bredcrumb max-w-full md:h-[450px] h-[300px] relative">
            <h2 className='absolute left-20 bottom-40 md:text-4xl text-2xl text-white font-semibold'>{page}</h2>
            <div className='absolute bg-white right-24 bottom-0 '>
                <div className='text-lg font-medium p-4'>
                    <Link to={'/'} className=''>Home</Link>
                    <span className='mx-2'>/</span>
                    <Link to={'/booking'} className='text-blue-600'>Online booking</Link>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Bredcrumb
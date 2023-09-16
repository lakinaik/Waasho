import React from 'react'
import { Link } from 'react-router-dom'


const Bredcrumb = ({page}) => {
  return (
    <>
       <section className="bredcrumb max-w-full md:h-[450px] h-[300px] relative">
            <h2 className='absolute md:left-20 left-14 md:bottom-40 bottom-24 md:text-5xl text-4xl text-white font-semibold'>{page}</h2>
            <div className='absolute bg-white md:right-24 right-6 bottom-0 '>
                <div className='text-lg font-medium p-4'>
                    <Link to={'/'} className=''>Home</Link>
                    <span className='mx-2'>/</span>
                    <Link className='text-blue-600'>{page}</Link>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Bredcrumb
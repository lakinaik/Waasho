import React from 'react'

const Vehicle = ({text, img}) => {
  return (
    <>
    
    <div className='border px-3 py-1 grid place-items-center duration-300 hover:bg-blue-500'>
        <img src={img} alt="img" className='w-20'/>
        <h2 className='md:text-xl text-sm font-semibold relative bottom-[15px]'>{text}</h2>
    </div>
    </>
  )
}

export default Vehicle
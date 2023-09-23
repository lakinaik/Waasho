import React from 'react'

const StatisticCard = ({img,number, desc}) => {
  return (
    <>
    <div className='p-8 shadow-lg rounded-md'>
        <div className='w-40 h-40 p-4 my-4'>
            <img src={img} alt="img" />
        </div>
        <p className='md:text-4xl text-2xl font-extrabold text-black'>{number}</p>
        <p className='md:text-xl text-lg font-bold text-slate-700 mt-4'>{desc}</p>
    </div>
    </>
  )
}

export default StatisticCard
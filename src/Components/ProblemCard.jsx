import React from 'react'

const ProblemCard = ({img,title,desc}) => {
  return (
    <>
    <div className="problem-card overflow-hidden shadow-lg bg-white">
        <div className='problem-img h-40 overflow-hidden'>
                <img src={img} alt="img" className=''/>
        </div>
        <div className='text-wrapper text-center p-2'>
                <h2 className='text-xl font-bold text-blue-600'>{title}</h2>
                <p className='text-slate-600 text-[0.9rem]'>{desc}</p>
        </div>
    </div>
    </>
  )
}

export default ProblemCard
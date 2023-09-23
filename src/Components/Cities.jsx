import React from 'react'

const Cities = ({img, cityname}) => {
  return (
    <>
        <div className='mx-auto'>
            <div className='overflow-hidden text-center mx-auto h-fit'>
                <img src={img} alt="img" className='w-60' />
            </div>
            <div>
                <h1 className='text-xl font-bold my-3 text-center'>{cityname}</h1>
            </div>
        </div>
    </>
  )
}

export default Cities
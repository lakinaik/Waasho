import React from 'react'

const MethodologyCard = ({img,text}) => {
  return (
    <>
  <div>
    <div className='my-2'>
        <img src={img} alt="img" />
    </div>
    <div>
      <h2 className='text-white my-2'>{text}</h2>
    </div>
  </div>
    </>
  )
}

export default MethodologyCard
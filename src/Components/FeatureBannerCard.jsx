import React from 'react'

const FeaturesBannerCard = ({img}) => {
  return (
    <>
      <div>
        <div className='w-36 h-36'>
            <img src={img} alt="" />
        </div>
        <div className='text-xl font-bold text-center text-green-700'>
        </div>
    </div>
    </>
  )
}

export default FeaturesBannerCard
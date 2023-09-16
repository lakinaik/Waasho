import React from 'react'

const WhyChooseUsCard = ({img, title}) => {
  return (
    <>
        <div className="WhyChooseUsCard shadow-xl rounded-xl">
            <div className="img-wrapper-why-choose-wrapper overflow-hidden">
                <img src={img} alt="" />
            </div>
            <div className="text-wrapper bg-white text-center">
                <h2 className='text-2xl font-bold p-8'>{title}</h2>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUsCard
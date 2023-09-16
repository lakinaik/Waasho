import React from 'react'
import WhyChooseUsCard from './WhyChooseUsCard'

const WhyChooseUs = () => {
  return (
    <>
    <div className='why-choose-us-wrapper bg-sky-700 py-8 px-14 lg:h-72 mb-48'>
        <div className="section-heading">
            <h2 className='md:text-3xl text-xl font-bold text-center text-white'>Why Choose US?</h2>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-14 mt-14'>
        <WhyChooseUsCard img={"https://fixigo.in/FixigoAssets2023/images/bt.png"} title={"Professional Staffs"}/>
        <WhyChooseUsCard img={"https://fixigo.in/FixigoAssets2023/images/qs.png"} title={"Doorstep Service"}/>
        <WhyChooseUsCard img={"https://fixigo.in/FixigoAssets2023/images/ap.png"} title={"Plants Based Products"}/>
        <WhyChooseUsCard img={"https://fixigo.in/FixigoAssets2023/images/ap.png"} title={"Affordable Prices"}/>
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs
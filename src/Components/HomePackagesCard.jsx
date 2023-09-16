import React from 'react'

const HomePackagesCard = ({icon, title, desc}) => {
  return (
    <>
   
            <div className='package-details text-center bg-transparent p-4 mx-auto w-80 md:w-auto'>
                <div className="package-logo w-32 h-32 mx-auto overflow-hidden">
                    <img src={icon} alt="" />
                </div>
                <div className="package-detail-wrapper">
                        <h2 className='text-black text-xl font-bold my-2'>{title}</h2>
                        <p className='text-slate-600 text-lg'>{desc}</p>
                </div>
    
    </div>
    </>
  )
}

export default HomePackagesCard
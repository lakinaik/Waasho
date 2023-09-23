import React from 'react'
import '../App.css'
const SectionHeader = ({text, textColor}) => {
  return (
   <>
    <div className="section-heading-wrapper">
          <h2 className={`md:text-4xl text-2xl font-bold text-center section-heading text-${textColor} after:bg-${textColor} `}>
            {text}
          </h2>
        </div>
   </>
  )
}

export default SectionHeader
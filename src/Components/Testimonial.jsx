import React, { useState } from 'react'
import data from '../sliderData'

const Testimonial = () => {
  const [people] = useState(data);
const [index, setIndex] = useState(0)
  return (
    <>
    <div className="testimonial-component">

    </div>
    </>
  )
}

export default Testimonial
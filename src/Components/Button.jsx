import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, url}) => {
  return (
    <>
    <Link to={`${url}`} ><button className=" bg-sky-700 px-2 py-1  rounded-lg md:text-lg md:font-semibold md:px-7 md:py-3 duration-300 hover:bg-black text-white my-3">{text}</button></Link>
    </>

  )
}

export default Button
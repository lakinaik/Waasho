import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, url}) => {
  return (
    <>
    <Link to={`${url}`} ><button className="px-3 py-1  rounded-lg bg-blue-500 text-white duration-300 hover:bg-white hover:text-sky-400 border-sky-500 border my-3">{text}</button></Link>
    </>

  )
}

export default Button
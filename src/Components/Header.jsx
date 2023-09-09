import React, { useEffect, useState } from 'react'

import TopNav from '../Components/TopNav'
import Navbar from '../Components/Navbar'
import ScrolledNavbar from './ScrolledNavbar'

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const handleScroll = () =>{
    if(window.scrollY > 100){
      setScroll(true)
    }
    else{
      setScroll(false)
    }
  }

  useEffect(()=>{
window.addEventListener('scroll',handleScroll)
  })

  return (
    <>
<header className='absolute z-40 w-full'>
    <TopNav width={'90%'} px={'4'}/>
    <Navbar/>
    <div className={scroll ? "w-full fixed top-0 z-50 duration-300 ease-in" : "w-full fixed top-0 z-50 -translate-y-40 duration-300 ease-out" }>
        <ScrolledNavbar/>
    </div>
</header>
    </>
  )
}

export default Header
import React, { useContext, useEffect } from 'react'
import { MenuContext } from '../../../context/MenuContext'
import { CartButton } from '../Buttons'
import { Logo } from '../Logo'
import {Link} from 'react-router-dom'
import Menu from '../Menu'

function Main() {

    const menu = useContext(MenuContext)[0]
    const toggleMenu = useContext(MenuContext)[1]
    useEffect(() => {
      if(menu) {
        document.getElementsByTagName("body")[0].style.overflowY = "hidden"
      } else {
        document.getElementsByTagName("body")[0].style.overflowY = ""
      }
    }, [menu])

    return(
        <header className='fixed h-24 px-10 w-screen left-[50%] -translate-x-[50%] border-b-[1px] border-b-grey border-opacity-20 z-50 bg-black'>
          <Menu menu={menu} />
          <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
  
            <div className="max-lg:flex max-lg:flex-1 flex-row sm:gap-16 ">
  
              <button className='hamburger_menu lg:hidden' onClick={() => toggleMenu()}>
                <div className="pointer-events-none line"></div>
              </button>
              
              <div className="max-lg:flex max-lg:flex-1 max-sm:justify-center">
                <Logo />
              </div>
  
            </div>
            

            <nav className='text-white list-none flex gap-8 font-bold uppercase max-lg:hidden'>
                <Link to="/" className='text-sub-title'>Home</Link>
                <Link to="/headphones" className='text-sub-title'>Headphones</Link>
                <Link to="/speakers" className='text-sub-title'>Speakers</Link>
                <Link to="/earphones" className='text-sub-title'>Earphones</Link>
            </nav>
  
            <CartButton />
          </div>
        </header>
      )
}

export default Main
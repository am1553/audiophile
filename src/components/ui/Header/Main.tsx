import React, { useContext } from 'react'
import { MenuContext } from '../../../context/MenuContext'
import { CartButton, MenuButton } from '../Buttons'
import { Logo } from '../Logo'

function Main() {

    const menu = useContext(MenuContext)[0]

    return(
        <header className='fixed h-24 px-10 w-screen left-[50%] -translate-x-[50%] border-b-[1px] border-b-grey border-opacity-20 z-50  backdrop-blur-2xl bg-black bg-opacity-50'>
  
          <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
  
            <div className="max-lg:flex max-lg:flex-1 flex-row sm:gap-16 ">
  
              <MenuButton menu={menu}/>
              
              <div className="max-lg:flex max-lg:flex-1 max-sm:justify-center">
                <Logo />
              </div>
  
            </div>
            

            <nav className='text-white list-none flex gap-8 font-bold uppercase max-lg:hidden'>
                <li className='text-sub-title'>Home</li>
                <li className='text-sub-title'>Headphones</li>
                <li className='text-sub-title'>Speakers</li>
                <li className='text-sub-title'>Earphones</li>
            </nav>
  
            <CartButton />
          </div>
        </header>
      )
}

export default Main
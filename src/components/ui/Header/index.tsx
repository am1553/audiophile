import { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../../context/MenuContext'
import { MenuButton, CartButton } from '../Buttons'
import { Logo } from '../Logo'
import Menu from '../Menu'
import Modal from '../Modal'

function Header() {

  const menu = useContext(MenuContext)[0]
  const toggleMenu = useContext(MenuContext)[1]
  
  useEffect(() => {
    if(menu) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden"
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = ""
    }
  }, [menu])


  const FixedHeader = () => {
    return(
      <header className='fixed h-24 px-10 w-screen left-[50%] -translate-x-[50%] border-b-[1px] border-b-grey border-opacity-20 z-50  backdrop-blur-2xl bg-black bg-opacity-50'>

        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">

          <div className="max-lg:flex max-lg:flex-1 flex-row sm:gap-16 ">

            <MenuButton menu={menu}/>
            
            <div className="max-lg:flex max-lg:flex-1 max-sm:justify-center">
              <Logo />
            </div>

          </div>

          <CartButton />
        </div>
      </header>
    )
  }

  return (
    <div className="relative">
        <FixedHeader />
        <Menu menu={menu} />
        {
          menu ? 
          <Modal open={menu} toggleOpen={toggleMenu} />
          : null
        }
    </div>
  )
}

export default Header
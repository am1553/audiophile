import React from 'react'
import { MenuButton, CartButton } from '../Buttons'
import { Logo } from '../Logo'

function Header() {
  return (
    <header className='bg-black h-24 flex items-center justify-between px-10 max-w-5xl mx-auto'>
      <div className="max-lg:flex max-lg:flex-1 flex-row sm:gap-16 ">
        <MenuButton />
        <div className="max-lg:flex max-lg:flex-1 max-sm:justify-center">
          <Logo />
        </div>
      </div>
      <CartButton />
    </header>
  )
}

export default Header
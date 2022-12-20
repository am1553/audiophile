import React from 'react'
import { MenuButton, CartButton } from '../Buttons'
import { Logo } from '../Logo'

function Header() {
  return (
    <header className='fixed h-24 flex items-center justify-between px-10 w-full max-w-5xl left-[50%] -translate-x-[50%] border-b-[1px] border-b-grey z-10'>
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
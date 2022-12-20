import React from 'react'
import { MenuButton, CartButton } from '../Buttons'
import { Logo } from '../Logo'

function Header() {
  return (
    <header className='bg-black h-24 flex items-center justify-between px-10'>
        <MenuButton />
        <Logo />
        <CartButton />
    </header>
  )
}

export default Header
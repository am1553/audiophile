import React, { useContext, useEffect } from 'react'
import { MenuContext } from '../../../context/MenuContext'
import { Logo } from '../Logo'
import {Link} from 'react-router-dom'
import Menu from '../Menu'
import { CartContext } from '../../../context/CartContext'
import CartIcon from '../../../assets/shared/desktop/icon-cart.svg'
import Cart from '../Cart'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
function Main() {

    const menu = useContext(MenuContext)[0]
    const toggleMenu = useContext(MenuContext)[1]
    const cart = useContext(CartContext)[0]
    const toggleCart = useContext(CartContext)[1]

    const cartItems = useSelector((state : RootState) => state.cart)

    useEffect(() => {
      if(menu || cart) {
        document.getElementsByTagName("body")[0].style.overflowY = "hidden"
      } else {
        document.getElementsByTagName("body")[0].style.overflowY = ""
      }
    }, [menu, cart])

    return(
        <header className='fixed h-24 px-10 w-screen left-[50%] -translate-x-[50%] border-b-[1px] border-b-grey border-opacity-20 z-50 bg-black'>
          <Menu menu={menu} />
          <Cart cart={cart} />
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
  
            <button onClick={toggleCart} className="relative">
              <img src={CartIcon} alt="" className='pointer-events-none'/>
              <span className={`absolute -top-4 -right-4 bg-peru w-6 h-6 flex items-center justify-center rounded-full text-white font-bold text-sub-title ${cartItems.length === 0 ? "hidden" : null}`}>{cartItems.length === 0 ? null : cartItems.length}</span>
            </button>
          </div>
        </header>
      )
}

export default Main
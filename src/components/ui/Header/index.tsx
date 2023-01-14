import { useContext, useEffect} from 'react'
import { CartContext } from '../../../context/CartContext'
import { MenuContext } from '../../../context/MenuContext'
import Cart from '../Cart'
import { Logo } from '../Logo'
import Menu from '../Menu'
import Modal from '../Modal'
import Main from './Main'

function Header() {

  const menu = useContext(MenuContext)[0]
  const toggleMenu = useContext(MenuContext)[1]

  const cart = useContext(CartContext)[0]
  const toggleCart = useContext(CartContext)[1]

  return (
    <div className="relative"> 
        <Main />
        { menu ? <Modal open={menu} toggleOpen={toggleMenu} /> : null }
        { 
          cart ? 
            <Modal open={cart} toggleOpen={toggleCart}>
              
            </Modal> 
          : null 
        }
    </div>
  )
}

export default Header
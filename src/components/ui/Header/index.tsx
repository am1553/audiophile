import { useContext, useEffect} from 'react'
import { MenuContext } from '../../../context/MenuContext'
import { CartButton } from '../Buttons'
import { Logo } from '../Logo'
import Menu from '../Menu'
import Modal from '../Modal'
import Main from './Main'

function Header() {

  const menu = useContext(MenuContext)[0]
  const toggleMenu = useContext(MenuContext)[1]


  return (
    <div className="">
        <Main />
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
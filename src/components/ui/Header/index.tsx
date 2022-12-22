import { useContext, useEffect} from 'react'
import { MenuContext } from '../../../context/MenuContext'
import { MenuButton, CartButton } from '../Buttons'
import { Logo } from '../Logo'
import Menu from '../Menu'
import Modal from '../Modal'
import Main from './Main'

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
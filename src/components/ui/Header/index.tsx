import { MenuButton, CartButton } from '../Buttons'
import { Logo } from '../Logo'

function Header() {
  return (
    <header className='fixed h-24  px-10 w-screen left-[50%] -translate-x-[50%] border-b-[1px] border-b-grey border-opacity-20 z-50  backdrop-blur-2xl bg-black bg-opacity-50'>
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <div className="max-lg:flex max-lg:flex-1 flex-row sm:gap-16 ">
          <MenuButton />
          <div className="max-lg:flex max-lg:flex-1 max-sm:justify-center">
            <Logo />
          </div>
        </div>
        <CartButton />
      </div>
    </header>
  )
}

export default Header
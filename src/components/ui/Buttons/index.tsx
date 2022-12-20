import Arrow from '../../../assets/shared/desktop/icon-arrow-right.svg'
import Cart from '../../../assets/shared/desktop/icon-cart.svg'
import './index.css'
export const PrimaryButton = () => {
    return(
        <button className="h-12 w-40 bg-peru text-white hover:bg-desaturated-peru transition-colors">
            <span className="text-sub-title uppercase font-semibold pointer-events-none">
                See Product
            </span>
        </button>
    )
}

export const SecondaryButton = () => {
    return(
        <button className="bg-white border h-12 w-40 hover:border-none hover:bg-black hover:text-white transition-colors">
            <span className="text-sub-title uppercase font-semibold pointer-events-none">
                See Product
            </span>
        </button>
    )
}

export const TransparentButton = () => {
    return(
        <button className='h-12 w-40 flex items-center justify-center gap-2 uppercase text-sub-title hover:text-peru text-[#00000050] transition-colors'>
            <span className='font-semibold'>Shop</span>
            <img src={Arrow} alt="" />
        </button>
    )
}

export const MenuButton = () => {
    return(
        <button className='hamburger_menu'>
            <div className="pointer-events-none line"></div>
        </button>
    )
}

export const CartButton = () => {
    return(
        <button>
            <img src={Cart} alt="" className='pointer-events-none'/>
        </button>
    )
}
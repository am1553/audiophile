import {createContext, ReactNode, SetStateAction, useContext, useState} from 'react'

export const CartContext = createContext<[boolean, () => void]>([false, () => {}])

type CartProviderProps = {
    children: ReactNode
}



export default function CartProvider ({children} : CartProviderProps) {

    const [cart, setCart] = useState<boolean>(false)

    const toggleCart = () => {
        if(cart) {
            setCart(false)
        } else {
            setCart(true)
        }

    }

    return(
        <CartContext.Provider value={[cart, toggleCart]}>
            {children}
        </CartContext.Provider>
    )
}
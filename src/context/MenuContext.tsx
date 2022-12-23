import {createContext, ReactNode, SetStateAction, useContext, useState} from 'react'

export const MenuContext = createContext<[boolean, () => void]>([false, () => {}])

type MenuProviderProps = {
    children: ReactNode
}



export default function MenuProvider ({children} : MenuProviderProps) {

    const [menu, setMenu] = useState<boolean>(false)

    const toggleMenu = () => {
        if(menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }

    }

    return(
        <MenuContext.Provider value={[menu, toggleMenu]}>
            {children}
        </MenuContext.Provider>
    )
}
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../../app/hooks"
import { RootState } from "../../../app/store"
import { updateItem } from "../../../features/cart/cartSlice"
import Counter from "../../form/Counter"

type ItemCardTypes = {
    slug: string,
    image: string, 
    name: string, 
    price: number, 
    quantity: number,
    total: number
}

export const ItemCard = ({item}: {item:ItemCardTypes}) => {
    const cartItems = useSelector((state: RootState) => state.cart)
    const dispatch = useAppDispatch()
        const [count, setCount] = useState<number>(item.quantity)

        useEffect(() => {
            if(count === item.quantity) return
            dispatch(updateItem({...item, quantity: count, total: item.price * count}))
        }, [count])
        
    return(
        <div className="grid grid-cols-[auto_40%_20%] items-center gap-6">
            <img src={item.image} alt="" className='rounded-md w-full'/>
            <div className="flex flex-col w-full">
                <span className='font-bold'>{item.name}</span>
                <span className='opacity-50 font-bold'>$ {item.price}</span>
            </div>
            <Counter currentCount={count} onChange={setCount}/>
        </div>
    )
}
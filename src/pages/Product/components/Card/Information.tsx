import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { RootState } from "../../../../app/store"
import Counter from "../../../../components/form/Counter"
import { PrimaryButton } from "../../../../components/ui/Buttons"
import { CartInformation } from "../../../../components/ui/Cart/CartInformation"
import Data from '../../../../data.json'
import { addToCart, updateItem } from "../../../../features/cart/cartSlice"

export const Information = () => {
    const cartItems = useAppSelector((state:RootState) => state.cart)
    const dispatch = useAppDispatch()
    const category = useParams().category
    const slug = useParams().slug
    const cartItem = useAppSelector((state : RootState) => state.cart).filter(item => item.slug === slug)
    console.log(cartItem)
    const data = Data.filter(data => data.category === category && data.slug === slug)[0]

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        cartItems.map(item => {
            if(item.slug === slug) {
                setCount(item.quantity)
            } else {
                setCount(0)
            }
        })
    }, [slug])

    const handleAddToCart = () => {
        const cartInfo = Object.assign({}, ...CartInformation.filter(info => info.slug === slug))
        const cartData = {...cartInfo, quantity: count, total: cartInfo.price * count}

        cartItems.map(item => {
            if(item.slug === slug) {
                dispatch(updateItem({...item, quantity: count, total: cartInfo.price * count}))
            } else {
                dispatch(addToCart(cartData))
            }
        })

        if(cartItems.length === 0 && count !== 0) dispatch(addToCart(cartData))
    }

    return(
        <div className="flex flex-col gap-8 pt-12">
            {
                data.new ? 
                <span className='text-over-line tracking-[10px] uppercase text-peru font-thin'>
                new product
                </span> : null
            }
            <h2>{data.name}</h2>
            <p className='opacity-50'>
                {data.description}
            </p>
            <h6>${data.price.toFixed(0)}</h6>
            <div className="flex gap-4 max-w-[300px]">
                <Counter currentCount={count} onChange={setCount}/>
                <PrimaryButton text='Add to Cart' onClick={handleAddToCart}/>
            </div>
        </div>
    )
}
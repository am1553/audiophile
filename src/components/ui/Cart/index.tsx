import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../app/hooks'
import { RootState } from '../../../app/store'
import { removeAll, updateItem } from '../../../features/cart/cartSlice'
import { useTotal } from '../../../hooks/useTotal'
import { PrimaryButton } from '../Buttons'
import { ItemCard } from './ItemCard'

const Cart = ({cart} : { cart: boolean}) => {
    const cartItems = useSelector((state: RootState) => state.cart)
    const dispatch = useAppDispatch()
    const removeAllItems = () => {
        dispatch(removeAll())
    }
    
    const Total = () => {
        const sum = useTotal()

        return(
            <div className="flex justify-between py-10">
                <span className='uppercase'>Total</span>
                <h6>$ {sum}</h6>
            </div>
        )
    }

  return (
    <div className="max-w-7xl mx-auto relative bg-peru">
        <div className={`absolute top-32 right-0 z-50 bg-white w-full rounded-xl ${cart ? "h-fit overflow-y-auto pb-16" : "h-[0px] overflow-hidden"} px-8 max-w-lg`}>
        <header className='flex justify-between py-10'>
            <h6>Cart ({cartItems.length})</h6>
            <button onClick={removeAllItems}>
                <span>Remove all</span>
            </button>
        </header>
        <div className="flex  flex-col gap-8">
            {
                cartItems.map(item => {
                    return(
                        <ItemCard 
                            key={item.slug} 
                            item={item}
                        />
                    )
                })
            }
        </div>
        <Total />
        <PrimaryButton text='Checkout' onClick={() => null} className={"w-full"}/>
    </div>
    </div> 
  )
} 


export default Cart
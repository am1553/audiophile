import React, { SetStateAction, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { PrimaryButton } from '../../components/ui/Buttons'
import Modal from '../../components/ui/Modal'
import PurchaseComplete from '../../components/ui/PurchaseComplete'


type ItemCardTypes = {
    name: string, 
    slug: string,
    image: string,
    price: number,
    quantity: number,
    total: number
}

function Summary({setPurchaseToggleConfirmation} : {setPurchaseToggleConfirmation: React.Dispatch<SetStateAction<boolean>>}) {

    const cartItems = useSelector((state: RootState) => state.cart)
    const cartItemsTotalArr : number[] = []

    cartItems.map(item => cartItemsTotalArr.push(item.total))

    const ItemCard = ({item} : {item: ItemCardTypes}) => {
        return(
            <div className="flex font-bold gap-4">
                <img src={item.image} alt="" className='w-20 rounded-md'/>
                <div className="flex-1 flex-col flex">
                    <span>{item.name}</span>
                    <span className='opacity-30'>${item.total}</span>
                </div>
                <span className='opacity-30'>x{item.quantity}</span>
            </div>
        )
    }

    const totalCartItems = () => {
        return cartItemsTotalArr.reduce((partialSum, a) => partialSum + a, 0)
    }

  return (
    <div className='bg-white p-10 rounded-xl h-fit'>
        <h6 className='mb-10'>Summary</h6>
        <div className="flex flex-col gap-8">
            {
                cartItems.map((item) => {
                    return <ItemCard item={item} key={item.slug}/>
                })
            }
        </div>

        <div className="flex flex-col gap-4 my-10">
            <div className="flex flex-row justify-between">
                <span className='uppercase opacity-30'>Total</span>
                <span className='font-bold'>
                    $ {totalCartItems()}
                </span>
            </div>
            <div className="flex flex-row justify-between">
                <span className='uppercase opacity-30'>Shipping</span>
                <span className='font-bold'>$ 50</span>
            </div>
            <div className="flex flex-row justify-between">
                <span className='uppercase opacity-30'>Vat (included)</span>
                <span className='font-bold'>$ 1079</span>
            </div>
            <div className="flex flex-row justify-between">
                <span className='uppercase opacity-30'>Grand Total</span>
                <span className='font-bold'>$ {totalCartItems() + 50 + 1079}</span>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <PrimaryButton text='continue & pay' onClick={() => setPurchaseToggleConfirmation(true)} />
        </div>
    </div>
  )
}

export default Summary
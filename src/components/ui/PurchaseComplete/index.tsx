import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { RootState } from '../../../app/store'
import ConfirmationIcon from '../../../assets/checkout/icon-order-confirmation.svg'
import { removeAll } from '../../../features/cart/cartSlice'
import { useTotal } from '../../../hooks/useTotal'
import { PrimaryButton } from '../Buttons'

function PurchaseComplete() {
  let navigate = useNavigate()
  const cartItems = useSelector((state : RootState) => state.cart)
  const firstCartItem = cartItems[0]
  const sum = useTotal()
  const dispatch = useAppDispatch()
  const ConfirmationMessage = () => (
    <header>
      <img src={ConfirmationIcon} alt="" />
      <h3 className='my-4'>THANK YOU<br /> FOR YOUR ORDER</h3>
      <p className='opacity-50'>You will receive an email confirmation shortly.</p>
    </header>
  )

  const handleNavigate = () => {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflowY = ''
    dispatch(removeAll())
    navigate('/')
  }

  const ItemsConfirmation = () => (
    <div className="font-bold rounded-lg overflow-hidden my-8 md:grid md:grid-cols-[auto_auto]">
      <div className="bg-grey bg-opacity-20  p-8">
        <div className="flex gap-8">
          <img src={firstCartItem.image} alt="" className='w-16 rounded-md'/>

          <div className="flex flex-col justify-between w-full">
            <span className='flex w-full justify-between'>
              {firstCartItem.name}
              <span className='opacity-50 font-medium'>x{firstCartItem.quantity}</span>
            </span>
            <span className='opacity-50 font-medium'>$ {firstCartItem.price}</span>
          </div>
        </div>
        
        <div className="font-medium border-t border-opacity-50 border-grey my-4 py-4 flex items-center justify-center">
          <span className='opacity-60'>and {cartItems.length - 1} other item(s)</span>
        </div>
      </div>

      <div className="bg-desaturated-black text-white flex flex-col px-8 py-6 gap-4">
        <span className='uppercase font-light opacity-50'>grand total</span>
        <span>$ {sum}</span>
      </div>
    </div>
  )

  return (
    <div className='absolute z-50 top-2/4 right-2/4 translate-x-2/4 -translate-y-2/4 bg-white rounded-lg w-4/5 p-8 flex flex-col max-w-2xl'>
      <ConfirmationMessage />
      <ItemsConfirmation />
      <div className="w-full items-center justify-center flex">
        <PrimaryButton text='back to home' onClick={handleNavigate}/>
      </div>
    </div>
  )
}

export default PurchaseComplete
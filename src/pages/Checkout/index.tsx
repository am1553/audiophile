import { useState } from 'react'
import Footer from '../../components/ui/Footer'
import Modal from '../../components/ui/Modal'
import PurchaseComplete from '../../components/ui/PurchaseComplete'
import Form from './Form'
import Summary from './Summary'

function Checkout() {

  const [purchaseConfirmationToggle, setPurchaseToggleConfirmation] = useState<boolean>(false)

  return (
    <>
    <div className='py-36 lg:py-48 px-8 mb-32 max-w-7xl mx-auto'> 
        <header className='max-w-5xl'>
            <button className='mb-8' onClick={() => window.history.go(-1)}>Go Back</button>
        </header>
        <main className='flex flex-col gap-14 lg:grid lg:grid-cols-[auto_auto]'>
          <Form />
          <Summary setPurchaseToggleConfirmation={setPurchaseToggleConfirmation} />
        </main>
        <Modal toggleOpen={setPurchaseToggleConfirmation} open={purchaseConfirmationToggle}>
          <PurchaseComplete />
        </Modal>
    </div>
    <Footer custom />
    </>
  )
}

export default Checkout
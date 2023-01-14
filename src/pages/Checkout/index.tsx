import React from 'react'
import Form from './Form'
import Summary from './Summary'

function Checkout() {
  return (
    <div className='pt-32 px-8'> 
        <header className='max-w-5xl'>
            <button className='mb-8' onClick={() => window.history.go(-1)}>Go Back</button>
        </header>
        <main className='flex flex-col gap-14'>
          <Form />
          <Summary />
        </main>
    </div>
  )
}

export default Checkout
import React from 'react'
import AllHeadphones from './AllHeadphones'
import Banner from '../../components/ui/Banner'
import {HeadphonesCard, SpeakersCard, EarphonesCard} from '../../components/ui/CategoryCard'
import Footer from '../../components/ui/Footer'
function Headphones() {
  return (
    <div className='relative'>
      <Banner title='Headphones'/>
      <AllHeadphones />
      <section className="md:flex md:flex-row gap-4 md:w-[90%] max-w-5xl mx-auto my-52">
        <HeadphonesCard />
        <SpeakersCard />
        <EarphonesCard />
      </section>

      <Footer />
    </div>
  )
}

export default Headphones
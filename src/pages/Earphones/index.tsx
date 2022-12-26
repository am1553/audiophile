import React from 'react'
import Banner from '../../components/ui/Banner'
import { EarphonesCard, HeadphonesCard, SpeakersCard } from '../../components/ui/CategoryCard'
import Footer from '../../components/ui/Footer'
import AllEarphones from './AllEarphones'

function Earphones() {
  return (
    <div>
      <Banner title='Earphones'/>
      <AllEarphones />

      <section className="md:flex md:flex-row gap-4 md:w-[90%] max-w-5xl mx-auto my-52">
        <HeadphonesCard />
        <SpeakersCard />
        <EarphonesCard />
      </section>

      <Footer />
      
    </div>
  )
}

export default Earphones
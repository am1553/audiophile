import React from 'react'
import { HeadphonesCard, SpeakersCard, EarphonesCard } from '../../components/ui/CategoryCard'
import Footer from '../../components/ui/Footer'
import AboutAudioGear from '../../components/ui/Footer/AboutAudioGear'

import Earphones from './components/Earphones'
import Intro from './components/Intro'
import ZX7Speaker from './components/ZX7Speaker'
import ZX9Speaker from './components/ZX9Speaker'


function Home() {

  return (
    <main className='max-w-screen min-h-screen'>
      <section>
        <Intro />
      </section>

      <section>
        <div className="md:flex md:flex-row gap-4 md:w-[90%] max-w-5xl mx-auto">
          <HeadphonesCard />
          <SpeakersCard />
          <EarphonesCard />
        </div>
      </section>

      <section className='flex flex-col gap-8 my-36'>
        <ZX9Speaker />
        <ZX7Speaker />
        <Earphones />
      </section>
      
      <Footer />
    </main>
  )
}

export default Home
import React from 'react'
import Footer from '../../components/ui/Footer'
import AboutAudioGear from '../../components/ui/Footer/AboutAudioGear'
import CategoryCardContainer from './components/CategoryCardContainer'
import Earphones from './components/Earphones'
import Intro from './components/Intro'
import ZX7Speaker from './components/ZX7Speaker'
import ZX9Speaker from './components/ZX9Speaker'


function Home() {

  return (
    <main className='w-screen min-h-screen'>
      <section>
        <Intro />
      </section>

      <section>
        <CategoryCardContainer />
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
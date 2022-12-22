import React from 'react'
import AboutAudioGear from './AboutAudioGear'
import FooterNavigation from './FooterNavigation'

function Footer() {
  return (
    <footer className='flex flex-col gap-36'>
        <AboutAudioGear />
        <FooterNavigation />
    </footer>
  )
}

export default Footer
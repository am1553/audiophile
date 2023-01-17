import React from 'react'
import AboutAudioGear from './AboutAudioGear'
import FooterNavigation from './FooterNavigation'

function Footer({custom} : {custom?:boolean}) {
  return (
    <footer className='flex flex-col gap-36'>
        {
          custom ? null : <AboutAudioGear />
        }
        <FooterNavigation />
    </footer>
  )
}

export default Footer
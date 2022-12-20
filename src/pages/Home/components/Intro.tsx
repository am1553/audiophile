import React from 'react'
import HeroImageMobile from '../../../assets/home/mobile/image-header.jpg'
import HeroImageTablet from '../../../assets/home/tablet/image-header.jpg'
import HeroImageDesktop from '../../../assets/home/desktop/image-hero.jpg'

function Intro() {
    const HeroImage = () => {
        return(
            <div className="">
                <img src={HeroImageMobile} alt="" className='sm:hidden' />
                <img src={HeroImageTablet} alt="" className='max-sm:hidden lg:hidden' />
                <img src={HeroImageDesktop} alt="" className='max-lg:hidden mt-20' />
            </div>
        )
    }

  return (
    <div className='w-full bg-[#191919]'>
        <div className="lg:flex w-full justify-end max-w-5xl mx-auto">
            <HeroImage />
        </div>
    </div>
  )
}

export default Intro
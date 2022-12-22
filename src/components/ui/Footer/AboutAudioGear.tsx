import React from 'react'
import HeroImageMobile from '../../../assets/shared/mobile/image-best-gear.jpg'
import HeroImageTablet from '../../../assets/shared/tablet/image-best-gear.jpg'
import HeroImageDesktop from '../../../assets/shared/desktop/image-best-gear.jpg'


function AboutAudioGear() {

    const HeroImage = () => {
        return(
            <div className="lg:col-start-2 max-lg:w-[90%] mx-auto">
                <img src={HeroImageMobile} alt="" className='md:hidden rounded-lg'/>
                <img src={HeroImageTablet} alt="" className='max-md:hidden lg:hidden rounded-lg'/>
                <img src={HeroImageDesktop} alt="" className='max-lg:hidden rounded-lg'/>
            </div>
        )
    }

    const Information = () => {
        return(
            <div className="max-lg:px-8 text-center flex flex-col gap-8 max-lg:w-4/5 max-lg:mx-auto lg:col-start-1 lg:row-start-1 justify-center lg:text-left">
                <h2>
                Bringing you the <span className='text-peru'>best</span> audio gear
                </h2>
                <p className='opacity-40'>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        )
    }

  return (
    <div className='max-w-5xl mx-auto flex flex-col gap-8 md:gap-16 lg:gap-12 lg:grid lg:grid-cols-2'>
        <HeroImage />
        <Information />
    </div>
  )
}

export default AboutAudioGear
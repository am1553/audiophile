import React from 'react'
import HeroImageMobile from '../../../assets/home/mobile/image-header.jpg'
import HeroImageTablet from '../../../assets/home/tablet/image-header.jpg'
import HeroImageDesktop from '../../../assets/home/desktop/image-hero.jpg'
import { PrimaryButton } from '../../../components/ui/Buttons'

function Intro() {

    const HeroImage = () => {
        return(
            <div className="">
                <img src={HeroImageMobile} alt="" className='sm:hidden' />
                <img src={HeroImageTablet} alt="" className='max-sm:hidden lg:hidden' />
                <img src={HeroImageDesktop} alt="" className='max-lg:hidden left-0 right-0 top-0 object-cover h-[700px]' />
            </div>
        )
    }

    const Information = () => {
        return(
        <div className="text-center flex flex-col items-center gap-8 absolute top-72 left-2/4 max-lg:-translate-x-2/4 max-w-md lg:text-left lg:items-start lg:left-0">
            <span className="tracking-[10px] uppercase text-grey"> new product</span>
            <h1 className='text-h1 uppercase text-white'>
                XX99 Mark II Headphones
            </h1>
            <p className='text-white opacity-50'>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <PrimaryButton text="see product"/>
        </div>
        )
    }

  return (
    <div className='w-full bg-[#191919] relative'>
        <div className="lg:flex w-full justify-end max-w-7xl mx-auto relative">
            <HeroImage />
            <Information />
        </div>
    </div>
  )
}

export default Intro
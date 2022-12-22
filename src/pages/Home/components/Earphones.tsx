import React from 'react'
import EarphoneImageMobile from '../../../assets/home/mobile/image-earphones-yx1.jpg'
import EarphoneImageTablet from '../../../assets/home/tablet/image-earphones-yx1.jpg'
import EarphoneImageDesktop from '../../../assets/home/desktop/image-earphones-yx1.jpg'
import { SecondaryButton } from '../../../components/ui/Buttons'


function Earphones() {


  const HeroImage = () => {
    return(
      <div className="rounded-lg overflow-hidden">
        <img src={EarphoneImageMobile} alt="" className='md:hidden w-full'/>
        <img src={EarphoneImageTablet} alt="" className='max-md:hidden lg:hidden'/>
        <img src={EarphoneImageDesktop} alt="" className='max-lg:hidden'/>
      </div>
    )
  }

  const Information = () => {
    return(
      <div className="bg-light-grey px-8 py-16 flex flex-col gap-8 rounded-lg justify-center md:px-16">
        <h4 className='text-black'>YX1 EARPHONES</h4>
        <SecondaryButton />
      </div>
    )
  }

  return (
    <div className="w-[90%] mx-auto max-w-5xl max-md:flex max-md:flex-col gap-8 md:grid md:grid-cols-2">
        <HeroImage />
        <Information />
    </div>
  )
}

export default Earphones
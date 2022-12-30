import React from 'react'
import { SecondaryButton } from '../../../components/ui/Buttons'
import ZX9ImageMobile from '../../../assets/home/mobile/image-speaker-zx9.png'
import ZX9ImageTablet from '../../../assets/home/tablet/image-speaker-zx9.png'
import ZX9ImageDesktop from '../../../assets/home/desktop/image-speaker-zx9.png'
import CirclePatternImage from '../../../assets/home/desktop/pattern-circles.svg'
import { useNavigate } from 'react-router-dom'

function ZX9Speaker() {
  let navigate = useNavigate()
  const HeroImage = () => {
    return(
      <div className="">
        <img src={ZX9ImageMobile} alt="" className='w-[100px] mx-auto md:hidden'/>
        <img src={ZX9ImageTablet} alt="" className='max-md:hidden lg:hidden w-36 mx-auto'/>
        <img src={ZX9ImageDesktop} alt="" className='max-lg:hidden absolute -bottom-2 left-2/4 -translate-x-2/4 w-96'/>
      </div>
    )
  }

  const Information = () => {
    return(
      <div className="text-center flex flex-col items-center max-lg:gap-8 max-w-md mx-auto lg:my-32 lg:text-left lg:items-start lg:gap-4 z-10">
        <h1>ZX9 <br /> Speaker</h1>
        <p className='opacity-70 w-[80%] lg:w-[90%]'>
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <SecondaryButton black onClick={() => navigate('product/speakers/zx9-speaker')}/>
      </div>
    )
  }

  const CirclePattern = () => {
    return(
      <img src={CirclePatternImage} alt="" className='absolute -top-28 left-2/4 -translate-x-2/4 lg:left-[250px] lg:-top-10 opacity-50'/>
    )
  }

  return (
    <div className='bg-peru text-white w-[90%] mx-auto max-lg:py-20 rounded-lg relative px-10 max-w-5xl max-lg:flex max-lg:flex-col max-lg:gap-8 lg:grid lg:grid-cols-[60%_40%] overflow-hidden'>
      <CirclePattern />
      <div className="relative overflow-hidden">
        <HeroImage />
      </div>
      <Information />
    </div>
  )
}

export default ZX9Speaker
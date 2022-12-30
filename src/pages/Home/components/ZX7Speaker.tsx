import React from 'react'
import { SecondaryButton } from '../../../components/ui/Buttons'
import ZX7ImageMobile from '../../../assets/home/mobile/image-speaker-zx7.jpg'
import ZX7ImageTablet from '../../../assets/home/tablet/image-speaker-zx7.jpg'
import ZX7ImageDesktop from '../../../assets/home/desktop/image-speaker-zx7.jpg'
import { useNavigate } from 'react-router-dom'



function ZX7Speaker() {
    let navigate = useNavigate()
    const HeroImage = () => {
        return(
            <div className="">
                <img src={ZX7ImageMobile} alt="" className='md:hidden w-full'/>
                <img src={ZX7ImageTablet} alt="" className='max-md:hidden lg:hidden w-full object-cover'/>
                <img src={ZX7ImageDesktop} alt="" className='max-lg:hidden'/>
            </div>
        )
    }

    const Information = () => {
        return(
            <div className="absolute top-2/4 -translate-y-2/4 left-10 flex flex-col gap-8">
                <h4 className='text-black'>zx7 sepaker</h4>
                <SecondaryButton onClick={() => navigate('product/speakers/zx7-speaker')}/>
            </div>
        )
    }

    return (
    <div className='text-left text-white w-[90%] mx-auto rounded-lg max-w-5xl relative overflow-hidden'>
        <HeroImage />
        <Information />
    </div>
  )
}

export default ZX7Speaker
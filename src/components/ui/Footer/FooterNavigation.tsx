import React from 'react'
import { Logo } from '../Logo'
import FacebookIcon from '../../../assets/shared/desktop/icon-facebook.svg'
import TwitterIcon from '../../../assets/shared/desktop/icon-twitter.svg'
import InstagramIcon from '../../../assets/shared/desktop/icon-instagram.svg'



function FooterNavigation() {

    const Line = () => {
        return(
            <div className="absolute h-1 w-28 bg-peru top-0 md:left-0"></div>
        )
    }

    const Navigation = () => {
        return(
            <nav className='flex flex-col md:flex-row gap-6 md:gap-16'>
                <li className='text-sub-title font-bold uppercase'>Home</li>
                <li className='text-sub-title font-bold uppercase'>Headphones</li>
                <li className='text-sub-title font-bold uppercase'>Speakers</li>
                <li className='text-sub-title font-bold uppercase'>Earphones</li>
            </nav>
        )
    }

    const Description = () => {
        return(
            <p className='opacity-60 md:row-start-1 md:col-span-2 lg:col-span-1'>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
        )
    }

    const CopyRights = () => {
        return(
            <p className='opacity-60 md:row-start-2 md:col-1 md:text-left'>Copyright 2021. All Rights Reserved</p>
        )
    }

    const Socials = () => {
        return(
            <div className="flex gap-6 md:row-start-2 md:place-content-end lg:row-span-2">
                <img src={FacebookIcon} alt="" />
                <img src={TwitterIcon} alt="" />
                <img src={InstagramIcon} alt="" />
            </div>
        )
    }

  return (
    <div className=' bg-desaturated-black px-8 md:px-16'>
        <div className="relative h-full py-16   mx-auto text-center text-white list-none flex flex-col gap-12 items-center justify-center md:items-start md:text-left max-w-5xl ">
            <Line />

            <div className=" flex flex-col justify-center items-center gap-8 md:items-start lg:flex-row lg:justify-between w-full">
                <Logo />        
                <Navigation />
            </div>

            <div className="grid grid-rows-[auto_auto_auto] gap-12 items-center justify-center max-md:place-items-center md:grid-cols-2 md:grid-rows-2 md:items-center w-full">
                <Description />
                <CopyRights />
                <Socials />
            </div>
        </div>
    </div>
  )
}

export default FooterNavigation
import React from 'react'
import XX99MarkIIMobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import XX99MarkIITablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import XX99MarkIIDesktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

import XX99MarkIMobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import XX99MarkITablet from '../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import XX99MarkIDesktop from '../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'

import XX59Mobile from '../../assets/product-xx59-headphones/mobile/image-product.jpg'
import XX59Tablet from '../../assets/product-xx59-headphones/tablet/image-product.jpg'
import XX59Desktop from '../../assets/product-xx59-headphones/desktop/image-product.jpg'

export const XX99MarkII = () => {

    const MobileImage = () => {
        return(
            <img src={XX99MarkIIMobile} alt="" className='md:hidden rounded-lg'/>
        )
    }
    const TabletImage = () => {
        return(
            <div className="bg-light-grey w-full h-[400px] rounded-lg max-md:hidden lg:hidden">
                <img src={XX99MarkIITablet} alt=""  className='h-full object-cover mx-auto'/>
            </div>
        )
    }
    const DesktopImage = () => {
        return(
            <img src={XX99MarkIIDesktop} alt="" className='max-lg:hidden rounded-lg'/>
        )
    }

    return(
        <div className="w-full">
            <MobileImage />
            <TabletImage />
            <DesktopImage />
        </div>
    )
}


export const XX99MarkI = () => {
    
    const MobileImage = () => {
        return(
            <img src={XX99MarkIMobile} alt="" className='md:hidden rounded-lg'/>
        )
    }
    const TabletImage = () => {
        return(
            <div className="bg-light-grey w-full h-[400px] rounded-lg max-md:hidden lg:hidden">
                <img src={XX99MarkITablet} alt=""  className='h-full object-cover mx-auto'/>
            </div>
        )
    }

    const DesktopImage = () => {
        return(
            <img src={XX99MarkIDesktop} alt="" className='max-lg:hidden rounded-lg'/>
        )
    }

    return(
        <div className="w-full">
            <MobileImage />
            <TabletImage />
            <DesktopImage />
        </div>
    )
}



export const XX59 = () => {
    
    const MobileImage = () => {
        return(
            <img src={XX59Mobile} alt="" className='md:hidden rounded-lg'/>
        )
    }
    const TabletImage = () => {
        return(
            <div className="bg-light-grey w-full h-[400px] rounded-lg max-md:hidden lg:hidden">
                <img src={XX59Tablet} alt=""  className='h-full object-cover mx-auto'/>
            </div>
        )
    }
    const DesktopImage = () => {
        return(
            <img src={XX59Desktop} alt="" className='max-lg:hidden rounded-lg'/>
        )
    }

    return(
        <div className="w-full">
            <MobileImage />
            <TabletImage />
            <DesktopImage />
        </div>
    )
}

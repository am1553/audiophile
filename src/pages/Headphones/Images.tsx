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
import { ResponsiveImage } from '../../components/ui/ResponsiveImage'

export const XX99MarkII = () => 
    <ResponsiveImage 
        mobileImage={XX99MarkIIMobile} 
        tabletImage={XX99MarkIITablet} 
        desktopImage={XX99MarkIIDesktop}
    />

export const XX99MarkI = () => 
    <ResponsiveImage 
        mobileImage={XX99MarkIMobile} 
        tabletImage={XX99MarkITablet} 
        desktopImage={XX99MarkIDesktop}
    />
export const XX59 = () => 
    <ResponsiveImage 
        mobileImage={XX59Mobile} 
        tabletImage={XX59Tablet} 
        desktopImage={XX59Desktop}
    />
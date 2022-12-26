import React from 'react'

import ZX9Mobile from '../../assets/product-zx9-speaker/mobile/image-product.jpg'
import ZX9Tablet from '../../assets/product-zx9-speaker/tablet/image-product.jpg'
import ZX9Desktop from '../../assets/product-zx9-speaker/desktop/image-product.jpg'

import ZX7Mobile from '../../assets/product-zx7-speaker/mobile/image-product.jpg'
import ZX7Tablet from '../../assets/product-zx7-speaker/tablet/image-product.jpg'
import ZX7Desktop from '../../assets/product-zx7-speaker/desktop/image-product.jpg'

import { ResponsiveImage } from '../../components/ui/ResponsiveImage'

export const ZX9 = () => 
    <ResponsiveImage 
        mobileImage={ZX9Mobile} 
        tabletImage={ZX9Tablet} 
        desktopImage={ZX9Desktop}
    />

export const ZX7 = () => 
    <ResponsiveImage 
        mobileImage={ZX7Mobile} 
        tabletImage={ZX7Tablet} 
        desktopImage={ZX7Desktop}
    />
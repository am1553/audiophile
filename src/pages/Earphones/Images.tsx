import React from 'react'

import YX1Mobile from '../../assets/product-yx1-earphones/mobile/image-product.jpg'
import YX1Tablet from '../../assets/product-yx1-earphones/tablet/image-product.jpg'
import YX1Desktop from '../../assets/product-yx1-earphones/desktop/image-product.jpg'

import { ResponsiveImage } from '../../components/ui/ResponsiveImage'

export const YX1 = () => 
    <ResponsiveImage 
        mobileImage={YX1Mobile} 
        tabletImage={YX1Tablet} 
        desktopImage={YX1Desktop}
    />

import { useParams } from 'react-router-dom'
import {ResponsiveImage} from '../ResponsiveImage'
import { ProductImages } from '../Images'
import { Information } from './Information'
import { Features } from './Features'
import { InBox } from './InBox'
import { Gallery } from './Gallery'
import { MoreProducts } from './MoreProducts'
import Footer from '../../../../components/ui/Footer'

function Card() {
    const slug = useParams().slug
    const productImages = ProductImages.filter(product => product.slug === slug)[0].images
    
  return (
    <div className="flex flex-col gap-24">
        <div className="md:grid md:grid-cols-[auto_auto] gap-12">
            <ResponsiveImage 
                mobileImage={productImages.mobile} 
                tabletImage={productImages.tablet} 
                desktopImage={productImages.desktop}
            />
            <Information />
        </div>
        <div className="lg:grid lg:grid-cols-[60%_40%] gap-12">
            <Features />
            <InBox />
        </div>
        <Gallery />
        <MoreProducts />
    </div>
  )
}

export default Card
import { useParams } from 'react-router-dom'
import Data from '../../../../data.json'
import { ProductGallery } from '../Images'

export const Gallery = () => {
    const slug = useParams().slug
    const galleryImages = ProductGallery.filter(product => product.slug === slug)[0].images
    const Overlay = () => {
        return(
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10"></div>
        )
    }
    return(
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-2">
            <div className="relative rounded-lg overflow-hidden md:row-start-1 md:col-start-1">
                <Overlay />
                <img src={galleryImages.mobile[0]} alt="" className='w-full h-full object-cover md:hidden'/>
                <img src={galleryImages.tablet[0]} alt="" className='w-full h-full object-cover max-md:hidden lg:hidden'/>
                <img src={galleryImages.desktop[0]} alt="" className='w-full h-full object-cover max-lg:hidden'/>
            </div>
            <div className="relative rounded-lg overflow-hidden md:row-start-2 md:col-start-1">
                <Overlay />
                <img src={galleryImages.mobile[1]} alt="" className='w-full h-full object-cover md:hidden'/>
                <img src={galleryImages.tablet[1]} alt="" className='w-full h-full object-cover max-md:hidden lg:hidden'/>
                <img src={galleryImages.desktop[1]} alt="" className='w-full h-full object-cover max-lg:hidden'/>
            </div>
            <div className="relative rounded-lg overflow-hidden md:col-start-2 md:row-span-2">
                <Overlay />
                <img src={galleryImages.mobile[2]} alt="" className='w-full h-full object-cover md:hidden'/>
                <img src={galleryImages.tablet[2]} alt="" className='w-full h-full object-cover max-md:hidden lg:hidden'/>
                <img src={galleryImages.desktop[2]} alt="" className='w-full h-full object-cover max-lg:hidden'/>
            </div>
        </div>
    )
}
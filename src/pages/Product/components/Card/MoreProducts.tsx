import XX59Mobile from '../../../../assets/shared/mobile/image-xx59-headphones.jpg'
import XX59Tablet from '../../../../assets/shared/tablet/image-xx59-headphones.jpg'
import XX59Desktop from '../../../../assets/shared/desktop/image-xx59-headphones.jpg'

import XX99MarkOneMobile from '../../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import XX99MarkOneTablet from '../../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import XX99MarkOneDesktop from '../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'

import XX99MarkTwoMobile from '../../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg'
import XX99MarkTwoTablet from '../../../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg'
import XX99MarkTwoDesktop from '../../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'

import ZX7Mobile from '../../../../assets/shared/mobile/image-zx7-speaker.jpg'
import ZX7Tablet from '../../../../assets/shared/tablet/image-zx7-speaker.jpg'
import ZX7Desktop from '../../../../assets/shared/desktop/image-zx7-speaker.jpg'

import ZX9Mobile from '../../../../assets/shared/mobile/image-zx9-speaker.jpg'
import ZX9Tablet from '../../../../assets/shared/tablet/image-zx9-speaker.jpg'
import ZX9Desktop from '../../../../assets/shared/desktop/image-zx9-speaker.jpg'
import { PrimaryButton } from '../../../../components/ui/Buttons'
import { useNavigate, useParams } from 'react-router-dom'


export const MoreProducts = () => {
    const slug = useParams().slug
    let navigate = useNavigate()
    const Data = [
        {
            image: [XX99MarkOneMobile, XX99MarkOneTablet, XX99MarkOneDesktop],
            title: 'XX99 Mark I',
            slug: 'xx99-mark-one-headphones',
            category: 'headphones'
        },
        {
            image: [XX99MarkTwoMobile, XX99MarkTwoTablet, XX99MarkTwoDesktop],
            title: 'XX99 Mark II',
            slug: 'xx99-mark-two-headphones',
            category: 'headphones'
        },
        {
            image: [XX59Mobile, XX59Tablet, XX59Desktop],
            title: 'XX59',
            slug: 'xx59-headphones',
            category: 'headphones'
        },
        {
            image: [ZX7Mobile, ZX7Tablet, ZX7Desktop],
            title: 'ZX7 Speaker',
            slug: 'zx7-speaker',
            category: 'speakers'
        },
        {
            image: [ZX9Mobile, ZX9Tablet, ZX9Desktop],
            title: 'ZX9 Speaker',
            slug: 'zx9-speaker',
            category: 'speakers'
        },
    ]

    const handleNavigate = (category:string, productSlug:string) => {
        navigate(`/product/${category}/${productSlug}`, {replace: true})
    }


    const ProductCard = ({image, title, productSlug, category} : {image:string[], title: string, productSlug: string, category: string}) => {
        return(
            <div className="flex flex-col items-center gap-8">
                <img src={image[0]} alt="" className='md:hidden rounded-lg'/>
                <img src={image[1]} alt="" className='max-md:hidden lg:hidden rounded-lg'/>
                <img src={image[2]} alt="" className='max-lg:hidden rounded-lg'/>
                <h3>{title}</h3>
                <PrimaryButton text='see product' onClick={() => handleNavigate(category, productSlug)}/>
            </div>
        )
    }
    return(
        <div className="text-center flex flex-col gap-16">
            <h3>You may also like</h3>
            
            <div className="md:grid md:grid-cols-3 md:gap-8">
                {
                    Data.filter(product => product.slug !== slug).map((product, i) => {
                        if(i > 2) return null
                        return(
                            <ProductCard 
                                key={i}
                                image={product.image} 
                                title={product.title} 
                                productSlug={product.slug} 
                                category={product.category} 
                            />
                        )
                    })
                }
            </div>    
        </div>
    )
}
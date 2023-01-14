import XX59HeadphonesImage from '../../../assets/cart/image-xx59-headphones.jpg'
import XX99MarkOneHeadphonesImage from '../../../assets/cart/image-xx99-mark-one-headphones.jpg'
import XX99MarkTwoHeadphonesImage from '../../../assets/cart/image-xx99-mark-two-headphones.jpg'
import YX1EarphonesImage from '../../../assets/cart/image-yx1-earphones.jpg'
import ZX7SpeakerImage from '../../../assets/cart/image-zx7-speaker.jpg'
import ZX9SpeakerImage from '../../../assets/cart/image-zx9-speaker.jpg'

export const CartInformation : {
    name: string, slug: string, image: string, price: number
}[] = [
    {
        name: "YX1",
        slug: "yx1-earphones",
        image: YX1EarphonesImage,
        price: 599
    },
    {
        name: "XX99 Mark II",
        slug: "xx99-mark-two-headphones",
        image: XX99MarkTwoHeadphonesImage,
        price: 2999
    },
    {
        name: "XX99 Mark I",
        slug: "xx99-mark-one-headphones",
        image: XX99MarkOneHeadphonesImage,
        price: 1750
    },
    {
        name: "XX59",
        slug: "xx59-headphones",
        image: XX59HeadphonesImage,
        price: 899
    },
    {
        name: "ZX7",
        slug: "zx7-speaker",
        image: ZX7SpeakerImage,
        price: 3500
    },
    {
        name: "ZX9",
        slug: "zx9-speaker",
        image: ZX9SpeakerImage,
        price: 4500
    }
]
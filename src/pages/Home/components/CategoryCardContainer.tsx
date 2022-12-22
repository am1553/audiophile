import React from 'react'
import CategoryCard from '../../../components/ui/CategoryCard'
import HeadphonesThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import SpeakersThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphonesThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png'

function CategoryCardContainer() {
  return (
    <div className='md:flex md:flex-row gap-4 md:w-[90%] max-w-5xl mx-auto'>
        <CategoryCard 
            image={HeadphonesThumbnail} 
            title="Headphones"
        />
        <CategoryCard 
            image={SpeakersThumbnail} 
            title="Headphones"
        />
        <CategoryCard 
            image={EarphonesThumbnail} 
            title="Headphones"
        />
    </div>
  )
}

export default CategoryCardContainer
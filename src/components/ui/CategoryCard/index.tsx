import { TransparentButton } from '../Buttons'
import HeadphonesThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import SpeakersThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphonesThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png'

export const HeadphonesCard = () => {
  return(
    <div className='relative w-[90%] mx-auto bg-grey bg-opacity-10 rounded-lg flex flex-col  items-center mt-20 pt-20 pb-4'>
       <img src={HeadphonesThumbnail} alt="" className='w-[100px] h-[100px] absolute -top-10'/>
       <h6>Headphones</h6>
       <TransparentButton />
    </div>
  )
}

export const SpeakersCard = () => {
  return(
    <div className='relative w-[90%] mx-auto bg-grey bg-opacity-10 rounded-lg flex flex-col  items-center mt-20 pt-20 pb-4'>
       <img src={SpeakersThumbnail} alt="" className='w-[100px] h-[100px] absolute -top-10'/>
       <h6>Speakers</h6>
       <TransparentButton />
    </div>
  )
}

export const EarphonesCard = () => {
  return(
    <div className='relative w-[90%] mx-auto bg-grey bg-opacity-10 rounded-lg flex flex-col  items-center mt-20 pt-20 pb-4'>
       <img src={EarphonesThumbnail} alt="" className='w-[100px] h-[100px] absolute -top-10'/>
       <h6>Earphones</h6>
       <TransparentButton />
    </div>
  )
}

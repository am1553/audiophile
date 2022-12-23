import { TransparentButton } from '../Buttons'
import HeadphonesThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import SpeakersThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphonesThumbnail from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { MenuContext } from '../../../context/MenuContext'


export const HeadphonesCard = () => {
  const navigate = useNavigate()
  const toggleMenu = useContext(MenuContext)[1]

  const handleNavigate = () => {
    navigate("/headphones")
    toggleMenu()
  }

  return(
    <div className='relative w-[90%] mx-auto bg-grey bg-opacity-10 rounded-lg flex flex-col  items-center mt-20 pt-20 pb-4'>
       <img src={HeadphonesThumbnail} alt="" className='w-[100px] h-[100px] absolute -top-10'/>
       <h6 >Headphones</h6>
       <TransparentButton onClick={handleNavigate}/>
    </div>
  )
}

export const SpeakersCard = () => {

  const navigate = useNavigate()
  const toggleMenu = useContext(MenuContext)[1]

  const handleNavigate = () => {
    navigate("/speakers")
    toggleMenu()
  }

  return(
    <div className='relative w-[90%] mx-auto bg-grey bg-opacity-10 rounded-lg flex flex-col  items-center mt-20 pt-20 pb-4'>
       <img src={SpeakersThumbnail} alt="" className='w-[100px] h-[100px] absolute -top-10'/>
       <h6>Speakers</h6>
       <TransparentButton onClick={handleNavigate}/>
    </div>
  )
}

export const EarphonesCard = () => {


  const navigate = useNavigate()
  const toggleMenu = useContext(MenuContext)[1]

  const handleNavigate = () => {
    navigate("/earphones")
    toggleMenu()
  }

  return(
    <div className='relative w-[90%] mx-auto bg-grey bg-opacity-10 rounded-lg flex flex-col  items-center mt-20 pt-20 pb-4'>
       <img src={EarphonesThumbnail} alt="" className='w-[100px] h-[100px] absolute -top-10'/>
       <h6>Earphones</h6>
       <TransparentButton onClick={handleNavigate}/>
    </div>
  )
}

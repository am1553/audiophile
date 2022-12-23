import LogoImage from '../../assets/shared/desktop/logo.svg'
import {useNavigate} from 'react-router-dom'

export const Logo = () => {
    let navigate = useNavigate()
    const handleHomeNavigation = () => {
        navigate('/')
      }
    return <img src={LogoImage} alt="" className='cursor-pointer' onClick={handleHomeNavigation}/>
}
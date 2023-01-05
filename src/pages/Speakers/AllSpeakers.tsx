import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../../components/ui/ProductCard'
import {ZX7, ZX9} from './Images'

function AllSpeakers() {
  let navigate = useNavigate()
  return (
    <section className=''>
      <ProductCard 
        Image = {<ZX9 />}
        newProduct = {true}
        productType='Speaker'
        title = "ZX9"
        description= "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        onClick={() => navigate('/product/speakers/zx9-speaker')}
      />
      <ProductCard 
        Image = {<ZX7 />}
        newProduct = {false}
        reverse
        title = "ZX7"
        productType='Speaker'
        description= "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        onClick={() => navigate('/product/speakers/zx7-speaker')}
      />
    </section>
  )
}

export default AllSpeakers
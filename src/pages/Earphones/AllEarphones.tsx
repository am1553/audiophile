import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../../components/ui/ProductCard'
import {YX1} from './Images'

function AllEarphones() {
  let navigate = useNavigate()
  return (
    <section className=''>
      <ProductCard 
        Image = {<YX1 />}
        newProduct = {true}
        productType='Earphones'
        title = "YX1"
        description= "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        onClick={() => navigate('/product/earphones/yx1-earphones')}
      />
    </section>
  )
}

export default AllEarphones
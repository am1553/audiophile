import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../../components/ui/ProductCard';
import {XX99MarkII, XX99MarkI, XX59} from './Images'

function AllHeadphones() {
  let navigate = useNavigate()
  return (
    <section className=''>
      <ProductCard 
        Image = {<XX99MarkII />}
        newProduct = {true}
        title = "XX99 Mark II"
        productType='Headphones'
        description= "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        onClick={() => navigate('/product/headphones/xx99-mark-two-headphones')}
      />
      <ProductCard 
        Image = {<XX99MarkI />}
        newProduct = {false}
        productType='Headphones'
        reverse
        title = "XX99 Mark I"
        description= "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        onClick={() => navigate('/product/headphones/xx99-mark-one-headphones')}
      />
      <ProductCard 
        Image = {<XX59 />}
        newProduct = {false}
        productType='Headphones'
        title = "XX59"
        description= "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        onClick={() => navigate('/product/headphones/xx59-headphones')}
      />
    </section>
  )
}

export default AllHeadphones
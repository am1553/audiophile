import { useState } from "react"
import { useParams } from "react-router-dom"
import Counter from "../../../../components/form/Counter"
import { PrimaryButton } from "../../../../components/ui/Buttons"
import Data from '../../../../data.json'

export const Information = () => {
    const [itemCount, setItemCount] = useState<number>(0)
    const category = useParams().category
    const slug = useParams().slug
    const data = Data.filter(data => data.category === category && data.slug === slug)[0]
    return(
        <div className="flex flex-col gap-8 pt-12">
            {
                data.new ? 
                <span className='text-over-line tracking-[10px] uppercase text-peru font-thin'>
                new product
                </span> : null
            }
            <h2>{data.name}</h2>
            <p className='opacity-50'>
                {data.description}
            </p>
            <h6>${data.price.toFixed(0)}</h6>
            <div className="flex gap-4 max-w-[300px]">
                <Counter currentCount={itemCount} onChange={setItemCount}/>
                <PrimaryButton text='Add to Cart' />
            </div>
        </div>
    )
}
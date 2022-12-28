import { useParams } from 'react-router-dom'
import Data from '../../../../data.json'

export const InBox = () => {
    const category = useParams().category
    const slug = useParams().slug
    const data = Data.filter(data => data.category === category && data.slug === slug)[0]
    return(
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 max-lg:my-24 lg:flex lg:items-center">
            <h3>in the box</h3>
            <ul className='flex flex-col gap-2'>
                {
                    data.includes.map((item, i) => (
                        <li className='flex gap-4' key={i}>
                            <span className='font-bold text-peru'>{item.quantity}x</span>
                            <p className='opacity-50 capitalize'>{item.item}</p>
                        </li>
                    ) )
                }
            </ul>
        </div>
    )
}
import { useParams } from 'react-router-dom'
import Data from '../../../../data.json'

export const Features = () => {
    const category = useParams().category
    const slug = useParams().slug
    const data = Data.filter(data => data.category === category && data.slug === slug)[0]
    return(
        <div className="flex flex-col gap-8">
            <h3>features</h3>
            {
                data.features.split(/\n/).map((paragraph, i) => {
                    if(paragraph === "") return null
                    return(
                        <p key={i} className="opacity-50">{paragraph}</p>
                    )
                })
            }
        </div>
    )
}
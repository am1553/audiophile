import React, { SetStateAction } from 'react'
import { EarphonesCard, HeadphonesCard, SpeakersCard } from '../CategoryCard'

type MenuProps = {
  menu?: boolean
}

function Menu({menu} : MenuProps) {
  return (
    <div className={`absolute top-24 z-50 bg-white w-full rounded-b-lg ${menu ? "h-[650px] md:h-[400px] overflow-y-auto pb-16" : "h-[0px] overflow-hidden"} md:grid md:grid-cols-3 md:items-center transition-all duration-700 ease-in-out lg:hidden`}>
        <HeadphonesCard />
        <SpeakersCard />
        <EarphonesCard />
    </div>
  )
}

export default Menu
import React, { SetStateAction, useContext } from 'react'
import Arrow from '../../../assets/shared/desktop/icon-arrow-right.svg'

import './index.css'

type PrimaryButtonTypes = {
    text: string;
    onClick: () => void;
    className?: string
}

export const PrimaryButton = ({text, onClick, className} : PrimaryButtonTypes) => {
    return(
        <button className={`h-12 w-full  bg-peru text-white hover:bg-desaturated-peru transition-colors ${className ? null : "max-w-[200px]"}`} onClick={onClick}>
            <span className="text-sub-title uppercase font-semibold pointer-events-none">
                {text}
            </span>
        </button>
    )
}

export const SecondaryButton = ({black, onClick}:{black? : boolean, onClick: () => void}) => {

    return(
        <button className={`${black ? "bg-black border border-black hover:bg-opacity-0 hover:text-black" : "bg-opacity-0 border border-black text-black hover:bg-black hover:text-white"} h-12 w-40 transition-colors`} onClick={onClick}>
            <span className="text-sub-title uppercase font-semibold pointer-events-none">
                See Product
            </span>
        </button>
    )
}

export const TransparentButton = ({onClick} : {onClick : () => void}) => {
    return(
        <button className='h-12 w-40 flex items-center justify-center gap-2 uppercase text-sub-title hover:text-peru text-[#00000050] transition-colors' onClick={onClick}>
            <span className='font-semibold'>Shop</span>
            <img src={Arrow} alt="" />
        </button>
    )
}



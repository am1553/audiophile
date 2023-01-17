import React, { useEffect, useRef, useState } from 'react'


type RadioSelectTypes = {
  text: string,
  onSelect: () => void,
}

function RadioSelect({text, onSelect} : RadioSelectTypes) {
    const [isActive, setIsActive] = useState<boolean>(false)
  return ( 
    <div className={`flex gap-4 w-full max-w-[309px] border p-4 rounded-md ${isActive ? 'border-peru' : 'border-grey border-opacity-50'}`}>
        <button type='button' className="w-5 h-5 rounded-full border border-[#cfcfcf] p-1" onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)} >
            <div className={`w-full h-full bg-peru rounded-full ${isActive ? null : "hidden"}`}></div>
        </button>
        <label htmlFor="e-money" className='text-[14px] font-semibold'>{text}</label>
    </div>
  )
}

export default RadioSelect
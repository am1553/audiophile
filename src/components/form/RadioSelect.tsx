import React, { useState } from 'react'

function RadioSelect() {
    const [isActive, setIsActive] = useState<boolean>(false)
  return ( 
    <div className="flex gap-4 w-full max-w-[309px]">
        <div className="w-5 h-5 rounded-full border border-[#cfcfcf] p-1">
            <div className={`w-full h-full bg-peru rounded-full ${isActive ? null : "hidden"}`}></div>
        </div>
        <label htmlFor="e-money" className='text-[14px] font-semibold'>e-Money</label>
    </div>
  )
}

export default RadioSelect
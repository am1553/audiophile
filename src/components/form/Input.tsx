import React, { ChangeEvent, useState } from 'react'

type InputTypes = {
    label: string,
    onChange: (e : ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}

function Input({label, onChange, placeholder} : InputTypes) {
    const [error, setError] = useState<boolean>(false)
    return(
        <div className={`flex flex-col gap-2 w-full md:max-w-[309px] ${error ? "text-[#CD2C2C]" : "text-black"}`}>
            <div className="text-[12px] flex justify-between">
                <label htmlFor="" className="font-bold">{label}</label>
                <span>Wrong format</span>
            </div>
            <input 
                placeholder={placeholder}
                onChange={(e : ChangeEvent<HTMLInputElement>) => onChange(e)} 
                className={`px-4 border border-[#cfcfcf] h-14 w-full rounded-md outline-1 ${error ? "outline-[#CD2C2C]" : "outline-peru"} caret-peru text-black`} 
            />
        </div>
    )
}

export default Input
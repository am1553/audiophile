import React, { ReactNode } from 'react'

function FormSection({children, title} : {children: ReactNode, title: string}) {
    return(
        <div className="flex flex-col gap-6 mt-10" key={title}>
            <span className="text-sub-title uppercase text-peru">{title}</span>
            {children}
        </div>
    )
}

export default FormSection
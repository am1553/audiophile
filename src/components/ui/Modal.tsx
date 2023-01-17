import React, {ReactNode, SetStateAction, useEffect} from "react";
import ReactDOM from 'react-dom'

interface ModalProps {
    open: boolean,
    toggleOpen: React.Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}

const Modal : React.FC<ModalProps> = ({open, toggleOpen, children}) => {
    const body = document.getElementsByTagName('body')[0]
    useEffect(() => {
        if(!open) {
            body.style.overflowY = ''
        } else {
            window.scrollTo(0, 0)
            body.style.overflowY = 'hidden'
        }
    }, [open])
    if(!open) return null
    return ReactDOM.createPortal(
        <>
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => toggleOpen(false)}></div>
        {
            children ? 
            <div className="absolute top-2/4 left-2/4 w-full -translate-x-2/4 -translate-y-2/4 z-40">
                {children}
            </div> : null
        }
        </>, document.getElementById("portal")!
    );
}

export default Modal
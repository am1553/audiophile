import React, {ReactNode, SetStateAction} from "react";
import ReactDOM from 'react-dom'

interface ModalProps {
    open: boolean,
    toggleOpen: React.Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}

const Modal : React.FC<ModalProps> = ({open, toggleOpen, children}) => {


    return ReactDOM.createPortal(
        <>
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-40" onClick={() => toggleOpen(false)}></div>
        <div className="relative z-50">
            {children}
        </div>
        </>, document.getElementById("portal")!
    );
}

export default Modal
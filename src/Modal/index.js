import React from "react";
import { createPortal } from "react-dom";
import './modal.css'


export function Modal({children}){
    return createPortal(
        <div className="container">
            {children}
        </div>,
        document.getElementById('modal')
    )
}
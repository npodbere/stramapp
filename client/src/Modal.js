import React from 'react'
import ReactDom from 'react-dom'

const Modal = props => {
    return ReactDom.createPortal(
        <div onClick={props.redirect} className="modalBackground">
            <div onClick={event => event.stopPropagation()} className="modalContainer">
                <h3 className="modalName">{props.title}</h3>
                <div className="modalDescription">{props.description}</div>
                <div className="modalButtonContainer">
                    <button onClick={props.action} className="button button-1">Confirm</button>
                    <button onClick={props.redirect} className="button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal
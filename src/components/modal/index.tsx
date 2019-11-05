import * as React from 'react'
import { Portal } from '../portal'

export const Modal:React.FC<{}> =  (props) => {
    return (
        <Portal>
            <div className="modal">
                <div className="modal-overaly"></div>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </Portal>
        
    )
}
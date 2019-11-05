import * as React from 'react';
import * as  ReactDOM from 'react-dom';

const portal: HTMLElement | null = document.getElementById('portal');

export const Portal: React.FC<{}> = (props) => {
    const div = document.createElement('div');

    React.useEffect(() => {
        if(portal) {
            portal.appendChild(div)
        }
    })

    return  (
        ReactDOM.createPortal(
            props.children,
            div
        )
    )
}
import React from 'react'
import "static/css/switch.css"

function Switch(props) {
    const changeIcon = (e) => {
        console.debug("Switch.js handler triggered::Props ", props)
        if (props.handler) {
            props.handler();
        }
    }

    return (
        <label className="switch">
            <input type="checkbox" onChange={changeIcon} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;
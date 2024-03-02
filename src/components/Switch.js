import React from 'react'
import "../../static/css/switch.css"

function Switch({ icon = '', handler = '', initialChecked = false }) {
    const changeIcon = (e) => {
        console.debug("Switch.js handler triggered::Props ", { icon, initialChecked })
        if (handler) handler();
    }

    return (
        <label className="switch">
            <input type="checkbox" onChange={changeIcon} checked={initialChecked} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;
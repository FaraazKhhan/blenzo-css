import React from 'react'
import "../../static/css/switch.css"

function Switch({ icon = '', handler = '', defaultChecked = false }) {
    const changeIcon = (e) => {
        console.debug("Switch.js handler triggered::Props ", { icon, defaultChecked })
        if (handler) handler();
    }

    return (
        <label className="switch">
            <input type="checkbox" onChange={changeIcon} checked={defaultChecked} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;
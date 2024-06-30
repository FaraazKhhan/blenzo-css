import React from 'react'
import "../../../nostyle/css/switch.css"

type SwitchProps = {
    icon: string;
    handler?: () => void;
    defaultChecked?: boolean;
}

function Switch({ icon = '', handler, defaultChecked = false }: SwitchProps) {
    const changeIcon = () => {
        console.debug("Switch.js handler triggered::Props ", { icon, defaultChecked })
        if (handler) handler();
    }

    return (
        <label className="switch">
            <input type="checkbox" onChange={changeIcon} checked={defaultChecked} />
            <span className="slider round">
                <img src="/svg/sun.svg" alt="" />
                <img src="/svg/moon.svg" alt="" />
            </span>
        </label>
    )
}

export default Switch;
import React from 'react'
import "../../static/switch.css"

function Switch(props) {
    const changeIcon = (e) => {
        if (props.onClickFunc) {
            props.onClickFunc();
        }
    }


    return (
        <>
            <label class="switch">
                <input type="checkbox" onChange={changeIcon} />
                <span class="slider round"></span>
            </label>
        </>
    )
}

export default Switch
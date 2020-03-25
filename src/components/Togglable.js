import React, { useState } from 'react'

const Togglable = (props) => {
    const [visible, setVisible] = useState(false)
    
    const handleVisible = e => {
        setVisible(!visible)
    }

    const visibleChildren = { display: !visible ? 'none' : 'block' }
    const notVisibleChildren = {display: !visible ? 'block': 'none'}

    return (
        <div>
            <div style={notVisibleChildren} >
                <button onClick={handleVisible} >{props.labele}</button>
            </div>
            <div style={visibleChildren} >
                {props.children}
                <button onClick={handleVisible} >cancel</button>
            </div>
        </div>
    )
}

export default Togglable

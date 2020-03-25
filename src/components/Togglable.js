import React, { useState, useImperativeHandle } from 'react'

const Togglable = React.forwardRef((props, ref) => {
        const [visible, setVisible] = useState(false)

        const handleVisible = e => {
            setVisible(!visible)
        }

        const visibleChildren = { display: !visible ? 'none' : 'block' }
        const notVisibleChildren = { display: !visible ? 'block' : 'none' }

        useImperativeHandle(ref, () => {
                return { handleVisible }
            }
        )

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
)

export default Togglable

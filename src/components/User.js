import React from 'react'

const User = ({ user, logOut}) => {
    // console.log(user)
    return (
        <div>
            {user.name} login in application 
            <button onClick={logOut}>logout</button>
        </div>
    )
}

export default User

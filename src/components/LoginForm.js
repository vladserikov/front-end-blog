import React from 'react'

const LoginForm = ({ handleInput, loginUser, username, password }) => {
    return (
        <>
        <h2>log in to application</h2>
        <form onSubmit={loginUser}>
            <div>
                username
                <input type="text"
                    name='username'
                    onChange={handleInput}
                    value={username}
                />
            </div>
            <div>
                password
                <input type="password"
                    name='password'
                    onChange={handleInput}
                    value={password}
                />
            </div>
            <button type='submit'>login</button>
        </form>
        </>
    )
}

export default LoginForm

import React from 'react'

const LoginForm = ({ handleInput, loginUser }) => {
    return (
        <>
        <h2>log in to application</h2>
        <form onSubmit={loginUser}>
            <div>
                username
                <input type="text"
                    name='username'
                    onChange={handleInput}
                />
            </div>
            <div>
                password
                <input type="password"
                    name='password'
                    onChange={handleInput}
                />
            </div>
            <button type='submit'>login</button>
        </form>
        </>
    )
}

export default LoginForm

import React, { useState, useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import blogsService from './services/blogs'
import Blogs from './components/Blogs';
import loginService from './services/login'
import Notification from './components/Notification';

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState(null)

    useEffect(() => {
        blogsService.getAll().then(data => {
            setBlogs(data)
        })
    }, [])

    useEffect(() => {
        const storageUser = window.localStorage.getItem('loginUserData')
        if(storageUser){
            setUser(storageUser)
        }        
    }, [])
    const handleInput = ({target}) => {
        if(target.name === 'username'){
            setUsername(target.value)
        } else if(target.name === 'password'){
            setPassword(target.value)
        }
    }

    const loginUser = async (e) => {
        e.preventDefault()
        const loginData = {
            username,
            password
        }
        try {
            const returnUser = await loginService.login(loginData)
            console.log(returnUser)
            setUser(returnUser)
            window.localStorage.setItem('loginUserData', returnUser)
        } catch ({response}) {
            console.log({response})
            console.log(response.data.error)
            setNotification(response.data.error)
            setTimeout(() => {
                setNotification(null)
            }, 4000);
        }
    }

    return(
        <>
            <Notification message={notification} />
            <LoginForm handleInput={handleInput} loginUser={loginUser} />
            <Blogs blogs={blogs} />
        </>
    )
}
export default App;

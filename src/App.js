import React, { useState, useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import blogsService from './services/blogs'
import Blogs from './components/Blogs';
import loginService from './services/login'
import Notification from './components/Notification';
import User from './components/User';
import PostForm from './components/PostForm';
import Togglable from './components/Togglable';

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [notification, setNotification] = useState(null)

    const blogFormRef = React.createRef()

    useEffect(() => {
        blogsService.getAll().then(data => {
            setBlogs(data)
        })
    }, [])

    useEffect(() => {
        const storageUser = JSON.parse(window.localStorage.getItem('loginUserData'))
        if(storageUser){
            setUser(storageUser)
            blogsService.setToken(storageUser.token)
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
            // console.log(returnUser)
            setUser(returnUser)
            blogsService.setToken(returnUser.token)
            window.localStorage.setItem('loginUserData', JSON.stringify(returnUser))
        } catch ({response}) {
            // console.log({response})
            // console.log(response.data.error)
            setNotification(response.data.error)
            setTimeout(() => {
                setNotification(null)
            }, 4000);
        }
    }

    const logOut = () => {
        setUser(null)
    }

    const sendPost = async (obj) => {
        const postSend = {...obj}
        
        try {
            const returnBlog = await blogsService.createBlog(postSend)
            blogFormRef.current.handleVisible()
            setBlogs(blogs.concat(returnBlog))
        } catch ({response}) {
            // console.log(response)
            setNotification(response.data.error)
            setTimeout(() => {
                setNotification(null)
            }, 4000);
        }
    }

    const toggleNewBlog = () => (
            <Togglable labele='new blog' ref={blogFormRef} >
                <PostForm sendPost={sendPost} />
            </Togglable>
        )

    const likePost = async (id, newObj) => {
        console.log(id, newObj)
        
        try {
            const updateBlog = await blogsService.update(id, newObj)
            console.log(updateBlog)
            setBlogs(blogs.map(blog => blog.id !== id ? blog : updateBlog))
        } catch ({response}) {
            setNotification(response.data.error)
            setTimeout(() => {
                setNotification(null)
            }, 4000);
        }
    }

    return(
        <>
            <Notification message={notification} />
            {
                user ? <User user={user} logOut={logOut} username={username} password={password} />
                    : <LoginForm handleInput={handleInput} loginUser={loginUser} />
            }
            {
                user 
                ? toggleNewBlog()
                : null
            }
            <Blogs blogs={blogs} likePost={likePost} />
        </>
    )
}
export default App;

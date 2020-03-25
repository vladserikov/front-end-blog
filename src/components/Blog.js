import React, { useState } from 'react'

const Blog = ({ blog, likePost, removeBlog }) => {
    const [visible, setVisible] = useState(false)
    const name = blog.user.name || ''
    const mainViuw = { display: visible ? 'block' : 'none' }

    const handleVisible = () => {
        setVisible(!visible)
    }
    // console.log(blog)
    const addLike = () => {
        const newObj = {
            ...blog,
            likes: blog.likes + 1
        }
        likePost(blog.id, newObj)
    }

    const dlelteBlog = () => {
        const question = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)
        if (question) {
            removeBlog(blog.id)
        }
        return
    }
    return (
            <div className='blog'>
                {blog.title} {blog.author}
                <button onClick={handleVisible} >{visible ? 'hide' : 'view'} </button>
                <div style={mainViuw} >
                    <div>{blog.url}</div>
                    <div>likes: {blog.likes} <button onClick={addLike} >like</button> </div>
                    <div>{name}</div>
                    <button onClick={dlelteBlog} >delete blog</button>
                </div>
            </div>
    )
}

export default Blog

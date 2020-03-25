import React, { useState } from 'react'

const Blog = ({ blog, likePost}) => {
    const [visible, setVisible] = useState(false)
    const name = blog.user.name || ''
    const mainViuw = { display: visible ? 'block' : 'none' }

    const handleVisible = () => {
        setVisible(!visible)
    }
    console.log(blog)

    const addLike = () => {

        const newObj = {
            ...blog,
            likes: blog.likes + 1
        }
        likePost(blog.id, newObj)
    }

    return (
            <div className='blog'>
                {blog.title} 
                {blog.author}
                <button onClick={handleVisible} >{visible ? 'hide' : 'view'} </button>
                <div style={mainViuw} >
                    <div>{blog.url}</div>
                    <div>likes: {blog.likes} <button onClick={addLike} >like</button> </div>
                    <div>{name}</div>
                </div>
            </div>
    )
}

export default Blog

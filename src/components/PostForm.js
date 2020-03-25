import React, { useState } from 'react'

const PostForm = ({ sendPost }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const postBlog = (e) => {
        e.preventDefault()
        sendPost({title, author, url})
        setTitle('')
        setAuthor('')
        setUrl('')
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={postBlog} >
                <div>
                    title:<input name='title' onChange={({target}) => setTitle(target.value)} value={title} />
                </div>
                <div>
                    author:<input name='author' onChange={({ target }) => setAuthor(target.value)} value={author}  />
                </div>
                <div>
                    url:<input name='url' onChange={({ target }) => setUrl(target.value)} value={url}  />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default PostForm

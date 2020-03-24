import React from 'react'

const PostForm = ({ sendPost, handleBlogsInput, title, author, url}) => {
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={sendPost} >
                <div>
                    title:<input name='title' onChange={handleBlogsInput} value={title} />
                </div>
                <div>
                    author:<input name='author' onChange={handleBlogsInput} value={author}  />
                </div>
                <div>
                    url:<input name='url' onChange={handleBlogsInput} value={url}  />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default PostForm

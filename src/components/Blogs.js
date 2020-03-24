import React from 'react'

const Blogs = ({blogs}) => {
    return (
        <div>
            <h2>blogs</h2>
            {blogs.map((b, i) => <div key={i}>{b.title} {b.author} </div>)}
        </div>
    )
}

export default Blogs

import React from 'react';
import Blog from './Blog';

const Blogs = ({ blogs, likePost, removeBlog }) => {
  const sortBlog = blogs.sort((a, b) => {
    return b.likes - a.likes;
  });
  const renderBlogs = () =>
    sortBlog.map(blog => (
      <Blog
        key={blog.id}
        blog={blog}
        likePost={likePost}
        removeBlog={removeBlog}
      />
    ));

  return (
    <div>
      <h2>blogs</h2>
      {/* {blogs.map((b, i) => <div key={i}>{b.title} {b.author} </div>)} */}
      {renderBlogs()}
    </div>
  );
};

export default Blogs;

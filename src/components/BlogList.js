import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
    // Mock data
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My First Blog', content: 'This is my first blog.' },
        // ...
    ]);

    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogList;

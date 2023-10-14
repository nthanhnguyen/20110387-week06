import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogDetail() {
    const { id } = useParams();
    // Retrieve the blog post using the ID
    // For now, let's use a mock blog post
    const [blog, setBlog] = useState({
        id,
        title: 'My First Blog',
        content: 'This is my first blog.',
        comments: ['Great!', 'Nice post!'],
    });

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <h2>Comments</h2>
            <ul>
                {blog.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default BlogDetail;

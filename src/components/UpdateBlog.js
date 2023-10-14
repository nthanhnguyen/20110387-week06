import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateBlog() {
    const { id } = useParams();
    const history = useHistory();

    // Simulated blog retrieval. In a real app, you would get this from an API.
    const [blog, setBlog] = useState({
        id,
        title: 'My First Blog',
        content: 'This is my first blog.',
    });
    const [newTitle, setNewTitle] = useState(blog.title);
    const [newContent, setNewContent] = useState(blog.content);

    useEffect(() => {
        // Normally you would retrieve existing blog data here
        setNewTitle(blog.title);
        setNewContent(blog.content);
    }, [blog]);

    const handleSubmit = () => {
        // Update the blog post
        console.log('Blog updated:', { id, newTitle, newContent });
        // In a real application, this would be where you send the updated data to the server
        history.push(`/blog/${id}`);
    };

    return (
        <div>
            <h1>Update Blog</h1>
            <input
                type="text"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
            />
            <button onClick={handleSubmit}>Update</button>
        </div>
    );
}

export default UpdateBlog;

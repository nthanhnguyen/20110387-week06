import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        // Save the blog post
        // For now, let's log it to the console
        console.log('Blog created:', { title, content });
        history.push('/');
    };

    return (
        <div>
            <h1>Create Blog</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CreateBlog;

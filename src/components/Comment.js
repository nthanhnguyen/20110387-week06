import React, { useState } from 'react';

function Comment({ onAddComment }) {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        if (comment) {
            onAddComment(comment);
            setComment('');
        }
    };

    return (
        <div>
            <h3>Add a Comment</h3>
            <input
                type="text"
                placeholder="Your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Comment</button>
        </div>
    );
}

export default Comment;

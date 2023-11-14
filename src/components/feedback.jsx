import React, { useState, useEffect } from 'react';
import './feedback.css';

const Comments = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setCommentsList(storedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(commentsList));
  }, [commentsList]);

  const submitComment = () => {
    if (name && comment) {
      const newComment = { id: Date.now(), name, comment };
      setCommentsList([...commentsList, newComment]);
      setName('');
      setComment('');
    }
  };

  const deleteComment = (id) => {
    const updatedComments = commentsList.filter((comment) => comment.id !== id);
    setCommentsList(updatedComments);
  };

  return (
    <div className="feedback-wrapper"> {/* Add this wrapper div */}
    <div className="feedback-container">
      <div className="form-container">
        <label className="input-label">Your Name</label>
        <br />
        <input
          className="input-field"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          <label className="input-label">What you think of us?</label>
        <br />

        <textarea
          className="textarea-field"
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="submit-button" onClick={submitComment}>Submit Comment</button>
      </div>
      <div className="comments-list">
        {commentsList.map((comment) => (
          <div key={comment.id} className="comment">
            <p><strong>{comment.name}</strong>: {comment.comment}</p>
            <button className="delete-button" onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Comments;

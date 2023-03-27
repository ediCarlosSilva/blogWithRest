import React from 'react';
import Comment from '../comment';

import './style.css';

export default function CommentList({ comments }) {
    return (
        <div className='post__list--container'>
            { 
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </div>
    )
}
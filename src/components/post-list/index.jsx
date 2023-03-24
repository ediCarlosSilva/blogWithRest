import React from 'react';

import Post from '../../components/post';
import './style.css';

export default function PostList({ posts, users }) {
    return (
        <div className='post__list--container'>
            {
                posts && posts.filter(post => post.id !== 1).map(post => {

                    return <Post post={post} users={users} />;
                })
            }
        </div>
    )
}
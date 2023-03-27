import React from 'react';

import Post from '../../components/post';
import './style.css';

export default function PostList({ posts, users }) {

    return (
        <div className='post__list--container'>
            {

                posts && users && posts.filter(post => post.id !== 1).map(post => {
                    
                    let user;

                    for (let i = 0; i < users.length; i++) {
                        if (users[i].id === post.userId) {
                            user = users[i];
                            break;
                        }
                    }
                    return <Post key={post.id} post={post} user={user} />;
                })
            }
        </div>
    )
}
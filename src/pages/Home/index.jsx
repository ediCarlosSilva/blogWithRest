import React, { useState, useEffect } from 'react';

import MainPost from '../../components/main-post';
import PostList from '../../components/post-list';

import './style.css';

export default function Home() {

    const [posts, setPosts] = useState();

    async function getPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const dados = await response.json();

        setPosts(dados);
    }

    const [users, setUsers] = useState();

    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await response.json();

        setUsers(users);
    }

    useEffect(() => {
        getPosts();
        getUsers();
    }, [])

    return (
            <main>
                {

                    posts && users && posts.length > 0 && <MainPost post={posts[0]} 
                    user={users.find(user => user.id === posts[0].userId)} />
                }

                <PostList posts={posts} users={users} />
            </main>
    )
}
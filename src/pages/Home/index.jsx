import React, { useState, useEffect } from 'react';

import MainPost from '../../components/main-post';
import PostList from '../../components/post-list';

import './style.css';

const mock = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
];

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
    

    // const user = users.find(user => user.id === posts[0].userId);

    return (
        <>
            <main>
                {
                    posts && posts.length > 0 && <MainPost post={posts[0]} users={users}/>
                }

                <PostList posts={posts} users={users} />
            </main>
        </>
    )
}
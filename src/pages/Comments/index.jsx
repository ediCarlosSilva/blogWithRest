import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import MainPost from '../../components/main-post';
import CommentList from '../../components/comments-list';

import './style.css';

export default function Comments() {

    const location = useLocation();
    const post = location.state?.linkPost;

    const { postId, userId } = useParams();

    const posts = [
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

    const [user, setUser] = useState();

    const [comments, setComments] = useState();

    async function getComments(postId) {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

        const dados = await response.json();

        setComments(dados);
    }

    async function getUser(userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        const user = await response.json();

        setUser(user);
    }

    useEffect(() => {
        getComments(postId);
        getUser(userId);
    }, [postId, userId])

    return (
        <>

            <main>
                {
                    posts && user && posts.length > 0 && <MainPost post={post}
                        user={user} />
                }
                {
                    comments && comments.length > 0 && <CommentList comments={comments} />
                }

            </main>
        </>
    )
}
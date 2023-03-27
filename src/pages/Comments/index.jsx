import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import MainPost from '../../components/main-post';
import CommentList from '../../components/comments-list';

import './style.css';

export default function Comments() {

    const location = useLocation();
    const post = location.state?.linkPost;

    const { postId, userId } = useParams();

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
                    user && <MainPost post={post}
                        user={user} />
                }
                <section className="comentarios">
                    <h2 className="comentarios__titulo">Comentários</h2>
                    {
                        comments && comments.length > 0 && <CommentList comments={comments} />
                    }
                </section>

            </main>
        </>
    )
}
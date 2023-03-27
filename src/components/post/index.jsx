import React from 'react';
import { Link } from 'react-router-dom';
import UserBadge from '../user-badge';
import GetImagem from '../../service/imagem-service.js';

import './style.css';

export default function Post({ post, user }) {

    return (

        <section className="post" data-postid={post.id}>
            <Link to={"/comments/" + post.id + "/" + user.id} state={{linkPost: post}}>
                <div className='post--imagem'>
                    <img src={GetImagem(post.id % 10)} alt="Imagem de uma paisagem bonita." />
                </div>
            </Link>

            <div className="post--conteudo">

                <Link to={"/comments/" + post.id + "/" + user.id} state={{linkPost: post}}>
                    <h2 className='post--titulo'>{post.title}</h2>

                    <p className='post--descricao'>{post.body}</p>
                </Link>

                <UserBadge userId={post.userId} user={user} />
            </div>
        </section>
    )
}
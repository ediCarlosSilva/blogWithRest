import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import UserBadge from '../user-badge';
import GetImagem from '../../service/imagem-service';

import './style.css';

export default function MainPost({ post, user }) {

    return (
        <section className="main__post" data-postid={post.id}>
            <Link to={"/comments/" + post.id + "/" + user.id} state={{linkPost: post}}>
                <div className='main__post--imagem'>
                    <img src={GetImagem(post.id % 10)} alt="Imagem de uma paisagem bonita." />
                </div>
            </Link>
            <div className="main__post--conteudo">
                <Link to={"/comments/" + post.id + "/" + user.id} state={{linkPost: post}}>
                    <h2 className='main__post--titulo'>{post?.title}</h2>

                    <p className='main__post--descricao'>{post?.body}</p>
                </Link>

                <UserBadge userId={post.userId} user={user} />
            </div>
        </section>
    )
}
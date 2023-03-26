import React from 'react';
import { Link } from 'react-router-dom';
import UserBadge from '../user-badge'

import './style.css';

import imagem1 from '../../assets/images/landscape1.jpg';
import imagem2 from '../../assets/images/landscape2.jpg';
import imagem3 from '../../assets/images/landscape3.jpg';
import imagem4 from '../../assets/images/landscape4.jpg';

export default function Post({ post, user }) {
    // console.log(user);
    // função para escolher imagem aleatória no blog
    const escolheImagem = () => {
        return imagens[Math.floor((Math.random() * 4))];
    }

    const imagens = [imagem1, imagem2, imagem3, imagem4];

    return (

        <section className="post" data-postid={post.id}>
            <Link to={"/comments/" + post.id + "/" + user.id} state={{linkPost: post}}>
                <div className='post--imagem'>
                    <img src={escolheImagem()} alt="Imagem de uma paisagem bonita." />
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
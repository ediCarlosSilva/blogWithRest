import React from 'react';
import { Link } from 'react-router-dom';
import AuthorBadge from '../author-badge'

import './style.css';

import imagem1 from '../../assets/images/landscape1.jpg';
import imagem2 from '../../assets/images/landscape2.jpg';
import imagem3 from '../../assets/images/landscape3.jpg';
import imagem4 from '../../assets/images/landscape4.jpg';

export default function MainPost({ post }) {

    // função para escolher imagem aleatória no blog
    const escolheImagem = () => {
        return imagens[Math.floor((Math.random() * 4))];
    }
    
    const imagens = [imagem1, imagem2, imagem3, imagem4];


    return (
        <section className="main__post" data-id={post.id}>
            <div className='main__post--imagem'>
                <img src={escolheImagem()} alt="Imagem de uma paisagem bonita." />
            </div>

            <div className="main__post--conteudo">

                <h2 className='main__post--titulo'>{post?.title}</h2>

                <p className='main__post--descricao'>{post?.body}</p>

                <AuthorBadge author={post.userId} />
            </div>
        </section>
    )
}
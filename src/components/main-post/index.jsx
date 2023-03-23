import React from 'react';
import { Link } from 'react-router-dom';
import AuthorBadge from '../author-badge'

import './style.css';

import imagem1 from '../../assets/images/landscape1.jpg';

export default function MainPost({ post }) {
    return (
        <section className="main__post">
            <div className='main__post--imagem'>
                <img src={imagem1} alt="Imagem de uma paisagem bonita." />
            </div>

            <div className="main__post--conteudo">

            <h2 className='main__post--titulo'>{post?.title}</h2>

                <p className='main__post--descricao'>{post?.body}</p>

                <AuthorBadge />
            </div>
        </section>
    )
}
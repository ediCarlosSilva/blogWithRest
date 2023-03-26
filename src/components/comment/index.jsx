import React from 'react';
import { Link } from 'react-router-dom';
import UserBadge from '../user-badge'

import './style.css';

export default function Comment({ comment }) {

    return (
        <section className="main__comment" >
            <div className='main__comment--conteudo'>
                <h2 className="main__comment--titulo">{comment.name}</h2>
                <p className="main__comment--corpo">{comment.body}</p>
                <p className="main__comment--mail">{comment.email}</p>
            </div>
        </section>
    )
}
import React from 'react';
import { useLocation } from 'react-router-dom';
import profileImage from '../../assets/images/profile1.png'

import './style.css';

export default function AboutWritter() {

    const location = useLocation();
    const user = location.state?.aboutUser;

    return (
        <main>
            <section className='escritor__section'>
                <h2 className="escritor__sobre">Sobre</h2>
                <div className="escritor__detalhes">
                    <div className="escritor__destaque">
                        <h2 className='escritor__destaque--name'>{user.name}</h2>
                        <div className="escritor__destaque--boxImagem">
                            <img src={profileImage} className="escritor__destaque--imagem" alt="Foto do escritor" />
                        </div>
                        <p>user: {user.username}</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="escritor__perfil">
                        <span>
                            Frase efeito:
                            <p className="escritor__perfil--frase">{user.company.catchPhrase}</p>
                        </span>
                        <div className="teste">
                            website
                            <p className='escritor__perfil--website'>{user.website}</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
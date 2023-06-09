import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Navbar() {
    return (
        <header className="cabecalho">
            <Link to="/"><h1 className="cabecalho__logo">Blog</h1></Link>
            <nav className="cabecalho__navegacao">
                <ul>
                    <li className="cabecalho__link"><Link to="/">Home</Link></li>
                    <li className="cabecalho__link"><Link to="/escritores">Escritores</Link></li>
                </ul>
            </nav>
        </header>
    )
}
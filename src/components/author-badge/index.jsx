import React from "react";
import { Link } from 'react-router-dom';


import profileImage from '../../assets/images/profile1.png';
import './style.css';

export default function AuthorBadge({author, idAuthor}) {
    return (
        <div className="author__badge--container">
            <Link to="#">
                <img src={profileImage} alt="Autor do post" />
            </Link>
            <div>
                <h3 className="author__badge--nome">Edi Carlos</h3>
                <p className="author__badge--email">email@gmail.com</p>
            </div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

import profileImage from '../../assets/images/profile1.png';
import './style.css';

export default function UserBadge({userId, users}) {
    // console.log(users);

    const user = users.find(user => user.id === userId);

    // console.log(user);
    return (
        <div className="user__badge--container" data-userid={userId}>
            <Link to="#">
                <img src={profileImage} alt="User do post" />
            </Link>
            <div>
                <h3 className="user__badge--nome">{user.name}</h3>
                <p className="user__badge--email">{user.email}</p>
            </div>
        </div>
    )
}
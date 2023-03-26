import React from 'react';
import { Link } from 'react-router-dom';

import profileImage from '../../assets/images/profile1.png';
import './style.css';

export default function UserBadge({ userId, user }) {
    // console.log(users);

    // const user = users.find(user => user.id === userId);

    // console.log(user);
    return (
        <Link to="/aboutWritter" state={{aboutUser: user}}>
            <div className="user__badge--container" data-userid={userId}>

                <img src={profileImage} alt="User do post" />

                <div>
                    <h3 className="user__badge--nome">{user.name}</h3>
                    <p className="user__badge--email">{user.email}</p>
                </div>
            </div>
        </Link>
    )
}
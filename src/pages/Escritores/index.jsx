import React, { useState, useEffect } from 'react';
import UserBadge from '../../components/user-badge';

import './style.css';

export default function Escritores() {

    const [users, setUsers] = useState();

    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await response.json();

        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>

            <main>
                <h2 className="escritores__titulo">Nossos Escritores</h2>
                <section className="escritores__conteudo">
                    {
                        users && users.length > 0 && users.map(user => {
                            return <div className="escritores__box" key={user.id}>
                                <UserBadge userId={user.id} user={user} />
                            </div>
                        })
                    }
                </section>
            </main>
        </>
    )
}
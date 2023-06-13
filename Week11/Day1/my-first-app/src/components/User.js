import React from 'react';

const User = (props) => {
    const { id, name, email, username, phone } = props.userinfo;

    return (
        <div>
            <img src={`https://robohash.org/${id}?size=150x150`} alt="User Avatar" />
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;
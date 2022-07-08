import React from 'react';

const Friend = ({ name, age, desc, bb }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <p>{desc}</p>
            <p>{bb}</p>
        </div>
    );
};

export default Friend;

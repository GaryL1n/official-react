import React, { useState } from 'react';

const State = () => {
    //state(狀態)的使用方式

    // [變數,變數的Funtion]=useState(變數的內容)
    let [name, setName] = useState('Gary Lin');

    const changeName = () => {
        setName('林宸皞');
    };

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>
            <p>{name}</p>
            <p>{name}</p>
            <p>{name}</p>
            <p>{name}</p>
            <p>{name}</p>
            <p>{name}</p>
        </div>
    );
};

export default State;

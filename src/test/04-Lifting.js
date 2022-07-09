import React, { useState } from 'react';
import Create from '../componet/04-Create';
import Info from '../componet/04-Info';

const Lifting = () => {
    let [messages, setMessage] = useState([]);
    return (
        <div>
            <Create messages={messages} setMessage={setMessage} />
            <Info messages={messages} setMessage={setMessage} />
        </div>
    );
};

export default Lifting;

import React from 'react';

const Info = ({messages,setMessage}) => {
    return <div>
        {messages.map(msg=><p>{msg}</p>)}
    </div>;
};

export default Info;

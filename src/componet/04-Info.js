import React from 'react';
import Message from './Message'

const Info = ({messages,setMessage}) => {
    return <div>
        {messages.map(msg=>
        <Message msg={msg}/>
        )}
    </div>;
};

export default Info;

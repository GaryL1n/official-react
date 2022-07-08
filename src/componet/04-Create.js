import React, { useState } from 'react';

const Create = ({messages,setMessage}) => {
    let [input, setinput] = useState('');
    // let [messages, setMessage] = useState([]);
    const submitClick = (e) => {
        e.preventDefault();
        // console.log(e.target.parentElement.children[0].value);
        // 把input的value丟進這裡排成陣列
        setMessage([...messages, input]);
        // 把input的值變回空值
        setinput('');
    };
    const inputChange = (e) => {
        // console.log(e.target.value);
        setinput(e.target.value);
    };
    return (
        <form>
            <input onChange={inputChange} value={input} type="text" />
            <button onClick={submitClick}>Submit</button>
        </form>
    );
};

export default Create;

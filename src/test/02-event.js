import React from 'react';

const Event = () => {
    const btClick = (e) => {
        e.preventDefault(); //停止表單默認提交
        // toLocaleDateString()把Date轉化為西元年月日
        let date = new Date().toLocaleDateString();
        alert(date);
    };
    const btClick2 = (msg) => {
        alert(msg);
    };
    return (
        <div>
            <form action="">
                <input type="text" />
                <button onClick={btClick}>Submit</button>
            </form>

            <button
                onClick={() => {
                    btClick2('Hello,how are you?');
                }}
            >
                Hello
            </button>
            <p></p>
        </div>
    );
};

export default Event;

import React from 'react';
import '../styles/Jsx.css';
import Friend from '../componet/01-Friend';

const Jsx = () => {
    const friends = [
        { name: 'Gary', age: 24, desc: 'Gary is Good' },
        { name: 'Tom', age: 18, desc: 'Tom is Bad' },
    ];
    return (
        <div>
            <h1>{Math.random() * 100}</h1>
            <p>My friends are:</p>
            {/* {friends.map((friends, i) => {
                return (
                    <p>
                        {i}:{friends}
                    </p>
                );
            })} */}
            {friends.map((friend, i) => (
                <Friend
                    key={i}
                    name={friend.name}
                    age={friend.age}
                    desc={friend.desc}
                    bb="幹"
                />
            ))}
        </div>
    );
};

export default Jsx;

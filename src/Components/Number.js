import React, { useState, useEffect } from 'react';

function Number() {
    const [number, setNumber] = useState(getRandomInt(20));
    const url = "http://localhost:3000/";

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    useEffect(() => {
        setNumber(n => n + 1);
    }, [url]);

    return (
        <div>
            {
                (number % 2 === 0) ? <div>{number} is even</div> : <div>{number} is odd</div>
            }
        </div>
    );

};

export default Number;
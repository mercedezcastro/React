import React, { useState } from 'react';

function CounterExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>{count}</h4>
            <h4 onClick={() => setCount(count + 1)}>Plus</h4>
            <h4 onClick={() => setCount(count - 1)}>Minus</h4>
        </div>
    );
}

export default CounterExample;

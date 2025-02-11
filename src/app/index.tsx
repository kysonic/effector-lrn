import React, { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { $counter, increment } from './model';

export function App() {
    const counter = useUnit($counter);

    useEffect(() => {
        fetch('https://example.com/user')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error!:', error));
    }, []);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => increment()}>Increment</button>
        </div>
    );
}

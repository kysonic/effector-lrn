import React from 'react';
import { useStore } from 'effector-react';
import { $counter, increment } from './model';

export function App() {
    const counter = useStore($counter);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => increment()}>Increment</button>
        </div>
    );
}

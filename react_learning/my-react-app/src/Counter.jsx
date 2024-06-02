import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount+1);
        setCount(prevCount => prevCount+1);
        setCount(prevCount => prevCount+1);

        /*
        //this will not work
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        */
    }
    const decrement = () => {
        setCount(prevCount => prevCount-1);
        setCount(prevCount => prevCount-1);
        setCount(prevCount => prevCount-1);
    }
    const reset = () => {
        setCount(0);
    }

    return(<div>
        <p>{count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
    </div>);
}

export default Counter
import React, {useState, useEffect} from "react";

function MyComponent(){
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);




    return(<div>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </div>);
}


/*
function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // });

    function addCount(){
        setCount(prevCount => prevCount+1);
    }
    function subtractCount(){
        setCount(prevCount => prevCount-1);
    }
    function changeColor(){
        setColor(prevColor => prevColor==="green" ? "red": "green");
    }

    return(<div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
    </div>);
}
*/

export default MyComponent
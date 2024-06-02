function Button(){
    // const handleClick1 = () => {
    //     console.log("OUCH!");
    // }
    // const handleClick2 = (name) => {
    //     console.log(`${name} stop clicking me`);
    // }
    // let count = 0;
    // const handleClick3 = (name) => {
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you click me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }
    const handleClick4 = (e) => {
        // console.log(e);
        e.target.textContent = "OUCH! 🤕";
    }
    
    // return(<button onClick={handleClick1}>Click me 😉</button>);
    // return(<button onClick={() => handleClick2("Bro")}>Click me 😉</button>);
    // return(<button onClick={() => handleClick3("Bro")}>Click me 😉</button>);
    // return(<button onClick={(e) => handleClick4(e)}>Click me 😉</button>);
    return(<button onDoubleClick={(e) => handleClick4(e)}>Click me 😉</button>);

}

export default Button
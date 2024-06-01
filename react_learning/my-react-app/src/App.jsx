import UserGreeting from "./UserGreeting";

function App() {
  return(
    <>
        <UserGreeting isLoggedIn={true} username="Bro code" />
        <UserGreeting isLoggedIn={true} />
    </>
  );
}

export default App

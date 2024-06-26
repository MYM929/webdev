import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Demo from "./components/Demo/Demo.jsx";
import HomeHeader from "./components/Home/HomeHeader.jsx";
import DemoHeader from "./components/Demo/DemoHeader.jsx";

function App() {
  const auth = false;

  return (
    <>
    {auth ? <HomeHeader/> : <DemoHeader/>}
      <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/demo" element={<Demo/>}/> 
      </Routes>
    </>
  )
}

export default App

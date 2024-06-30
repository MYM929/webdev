import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Demo from "./components/Demo/Demo.jsx";
import HomeHeader from "./components/Home/HomeHeader.jsx";
import DemoHeader from "./components/Demo/DemoHeader.jsx";
import { Blog } from "./Context/Context.jsx";

function App() {
  const {currentUser} = Blog();

  return (
    <>
    {currentUser ? <HomeHeader/> : <DemoHeader/>}
      <Routes>
         {currentUser && <Route path="/" element={<Home/>}/>}
         {!currentUser && <Route path="/demo" element={<Demo/>}/>} 
         <Route
          path = "*"
          element={
            <Navigate to={!currentUser ? "/demo" : "/"}/>
          }
         />
      </Routes>
    </>
  )
}

export default App

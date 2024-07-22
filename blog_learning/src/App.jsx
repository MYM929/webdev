import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Demo from "./components/Demo/Demo.jsx";
import HomeHeader from "./components/Home/Header/HomeHeader.jsx";
import DemoHeader from "./components/Demo/DemoHeader.jsx";
import { Blog } from "./Context/Context.jsx";
import { ToastContainer } from 'react-toastify';
import Profile from "./components/Home/Profile/Profile.jsx";
import Write from "./components/Home/Write/Write.jsx";
import SinglePost from "./components/Common/Posts/SinglePost.jsx";
import EditPost from "./components/Common/Posts/EditPost.jsx";
import FilterPost from "./components/Demo/FilterPost.jsx";

function App() {
  const {currentUser} = Blog();

  // manage display home or demo page
  return (
    <>
    {currentUser ? <HomeHeader/> : <DemoHeader/>}

    <ToastContainer />
      <Routes>
        {currentUser && <Route path="/" element={<Home/>}/>}
        {!currentUser && <Route path="/demo" element={<Demo/>}/>} 
        <Route path="/profile/:userId" element={<Profile/>}/>
        <Route path="/write" element={<Write/>}></Route>
        <Route path="/post/:postId" element={<SinglePost/>}></Route>
        <Route path="/editPost/:postId" element={<EditPost/>}></Route>
        <Route path="/filter/:tag" element={<FilterPost/>}></Route>
        <Route path = "*" element={< Navigate to={currentUser ? "/" : "/demo"}/> }/>
      </Routes>
    </>
  )
}

export default App

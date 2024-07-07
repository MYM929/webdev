import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import Loading from "../components/Loading/Loading";

const BlogContext = createContext();

// manage Firebase authentication state changes
const Context = ({children}) => {
  // Holds the current authenticated user object 
  // or null if no user is logged in
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

  // use to subscribe to the Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){ setCurrentUser(user); }
      else{ setCurrentUser(null); }
      setLoading(false);
    })

    // ensures the listener is properly removed
    return () => unsubscribe();
  }, [currentUser])

  return (
    <BlogContext.Provider
        value={{currentUser, setCurrentUser}}>
        {loading ? <Loading/> : children}
    </BlogContext.Provider>
  )
}

export default Context;

export const Blog = () => useContext(BlogContext);
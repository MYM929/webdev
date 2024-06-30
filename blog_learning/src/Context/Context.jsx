import React, { useState, createContext, useContext } from 'react';

const BlogContext = createContext();


const Context = ({children}) => {
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <BlogContext.Provider
        value={{currentUser, setCurrentUser}}>
        {children}
    </BlogContext.Provider>
  )
}

export default Context;

export const Blog = () => useContext(BlogContext);
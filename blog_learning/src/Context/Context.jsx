import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { auth, db } from '../firebase/firebase';
import Loading from "../components/Loading/Loading";
import { collection, onSnapshot, query } from 'firebase/firestore';

const BlogContext = createContext();

// manage Firebase authentication state changes
const Context = ({children}) => {
  // Holds the current authenticated user object 
  // or null if no user is logged in
  const [currentUser, setCurrentUser] = useState(false);
  // need a little time to fetch auth data from backend
  const [loading, setLoading] = useState(true);
  // need a little time to fetch user data from backend
  const [userLoading, setUserLoading] = useState(true);
  // stores all the user objects in an array
  const [allUsers, setAllUsers] = useState([]);
  // display preview page or no
  const [publish, setPublish] = useState(false);
  // Comment modal
  const [showComment, setShowComment] = useState(false);
  // Comment length
  const [commentLength, setCommentLength] = useState(0);
  // Contains the edit post data
  const [updateData, setUpdateData] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");






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



  /*
    getUsers() - fetch data from the Firestore database
    onSnapshot() - a real-time listener for the query of the collection
    snapshot.docs - an array of document snapshots
    setAllUsers() - hook - updates the allUsers variable
  */
    useEffect(() => {
      const getUsers = () => {
        const postRef = query(collection(db, "users"));
        onSnapshot(postRef, (snapshot) => {
          setAllUsers(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
          setUserLoading(false);
        });
      };
      getUsers();
    }, []);

  // console.log(allUsers);






  return (
    <BlogContext.Provider
        value={{
          currentUser, setCurrentUser, 
          allUsers, userLoading, 
          publish, setPublish,
          showComment, setShowComment,
          commentLength, setCommentLength,
          updateData, setUpdateData,
          title, setTitle,
          description, setDescription
        }}>
        {loading ? <Loading/> : children}
    </BlogContext.Provider>
  )
}

export default Context;

export const Blog = () => useContext(BlogContext);
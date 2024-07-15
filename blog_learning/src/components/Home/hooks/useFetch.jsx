import { collection, doc, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebase'

const useFetch = (collectionName) => {

  // Holds the fetched data from Firestore
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  // Defines the getUsers function to fetch data from Firestore
  useEffect(() => {
    const getUsers = () => { 
        const postRef = query(collection(db, collectionName));
        onSnapshot(postRef, (snapshot) => {
            setData(
                snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            )
            setLoading(false);
        })
    }
    getUsers();
  }, [])












  return (
    data, loading
  )









}

export default useFetch
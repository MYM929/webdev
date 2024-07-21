import { collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'

const useFetch = (collectionName) => {

  // Holds the fetched data from Firestore
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDatas = async () => {
      // create a postRef to Firestore
      const postRef = query(
        collection(db, collectionName),
        orderBy("created", "desc")
      );

      // onSnapshot: real-time updates from Firestore
      const unsubscribe = onSnapshot(postRef, async (snapshot) => {
        const postData = await Promise.all(
          snapshot.docs.map(async (docs) => {
            // get post data
            const postItems = { ...docs.data(), id: docs.id };
            // get user data
            const userRef = doc(db, "users", postItems?.userId);
            const getUser = await getDoc(userRef);

            // merge post and user data, excluding created
            if (getUser.exists()) {
              const { created, ...rest } = getUser.data();
              // return the post and user data combo back to postData
              return { ...postItems, ...rest };
            }
          })
        );
        setData(postData);
        setLoading(false);
      });

      return () => unsubscribe();
    };

    getDatas();
  }, [collectionName]);












  return (
    { data, loading }
  )









}

export default useFetch
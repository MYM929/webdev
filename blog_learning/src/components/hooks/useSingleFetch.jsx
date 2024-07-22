import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase';

const useSingleFetch = (collectionName, id, subCollection) => {
  // Holds the fetched data from Firestore
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  // Defines the getSingleData function to fetch subcolletion data from Firestore
  useEffect(() => {
    const getSingleData = async () => { 
      if(id){
        const postRef = query(collection(db, collectionName, id, subCollection));
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
    }
    getSingleData();
  }, [db, id])






  return (
    { data, loading }
  )

}

export default useSingleFetch
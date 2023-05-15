import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';


export const collection_name = "calculation-results";

export const getResults = async () => {
  let data : any[]= [];
  await getDocs(collection(firestore, collection_name))
    .then((querySnapshot)=>{               
      data = querySnapshot.docs
        .map((doc) => ({...doc.data(), id:doc.id }));                
      console.log("fetch results", data);
    });
  return data;
}
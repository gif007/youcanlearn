// import main firebase library
import firebase from 'firebase/app';
// import firestore API
import 'firebase/firestore';

// configuration object obtained from firebase console
const config = {
    apiKey: "AIzaSyAHrdKOfamYayRvOT8KezuW6ssnI3pqkW0",
    authDomain: "youcanlearn-1780d.firebaseapp.com",
    projectId: "youcanlearn-1780d",
    storageBucket: "youcanlearn-1780d.appspot.com",
    messagingSenderId: "1074743141500",
    appId: "1:1074743141500:web:6c0ac0a050a8b18f3255f9",
    measurementId: "G-95XPFXPVJS"
  };

// async function which uploads a collection and its related docs to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    // create a reference in the firestore to a new collection
    const collectionRef = firestore.collection(collectionKey);

    // create a firestore batch object
    const batch = firestore.batch();
    // populate batch object with set calls for each document
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    // call batch and return a promise
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    // const transformedCollection = collections.docs.map(doc => {
        // const { title, items } = doc.data();

        // return {
        //     title,
        //     items,
        //     routeName: encodeURI(title.toLowerCase()),
        //     id: doc.id
        // };
    // });

    return transformedCollection.reduce((accumulator, collection) => {
        // accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
};

firebase.initializeApp(config); // initialize app with firebase configuration settings

export const firestore = firebase.firestore(); // export firestore API

export default firebase;
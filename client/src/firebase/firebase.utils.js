// import main firebase library
import firebase from 'firebase/app';
// import firestore API
import 'firebase/firestore';
// import OAuth API
import 'firebase/auth';

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

export const convertSubjectsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { id, type, title, courses } = doc.data();

        return {
            id,
            type,
            title,
            courses
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title] = collection;
        return accumulator;
    }, {})
};

export const convertSectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { id, type, title, subject, course, lessons } = doc.data();

        return {
            id,
            type,
            title,
            subject,
            course,
            lessons
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title] = collection;
        return accumulator;
    }, {})
};

export const convertCoursesSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { id, type, title, subject, sections } = doc.data();

        return {
            id,
            type,
            title,
            subject,
            sections
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title] = collection;
        return accumulator;
    }, {})
};

export const convertLessonsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { id, type, title, subject, course, section, mediaUrl, iconUrl } = doc.data();

        return {
            id,
            type,
            title,
            subject,
            course,
            section,
            mediaUrl,
            iconUrl
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title] = collection;
        return accumulator;
    }, {})
};

// creates a firestore user object if one does not exist and returns a reference
export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) {return;} // if no valid userAuth, abort

     // get a firestore reference using userAuth.uid
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // request snapshot for current reference
    const snapShot = await userRef.get(); 

    // if no snapshot exists, create one using userAuth
    if(!snapShot.exists) {
        const pointsRef = firestore.doc(`points/${userAuth.uid}`);
        try {
            await pointsRef.set({
                points: 0
            })
        } catch (err) {
            console.log(err);
        }

        const { email } = userAuth;
        // create new timestamp
        const createdAt = new Date();

        // attempt to create the snapshot
        try {
            await userRef.set({
                email,
                createdAt,
                ...otherData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    // return the firestore reference based on userAuth.uid
    // which should now have a snapshot associated with it
    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

export const getAuthToken = async () => {
    const user = await getCurrentUser();
    if (!user) {
        return null;
    }
    const token = await auth.currentUser.getIdToken();
    return token;
}

firebase.initializeApp(config); // initialize app with firebase configuration settings

export const firestore = firebase.firestore(); // export firestore API
export const auth = firebase.auth(); // export OAuth API

// create a Good signin provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// select prompt parameter on provider
googleProvider.setCustomParameters({ prompt: 'select_account' });

// export function which triggers Google signin popup
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
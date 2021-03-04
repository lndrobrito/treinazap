import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyCqg8lTlA0HC2YFVu2TiMxZlO6FerzxxXE",
    authDomain: "treinazap-a47a3.firebaseapp.com",
    projectId: "treinazap-a47a3",
    storageBucket: "treinazap-a47a3.appspot.com",
    messagingSenderId: "832505142113",
    appId: "1:832505142113:web:375173508f06e58fc94320"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  

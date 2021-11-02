import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC83LVOMC_zKM_OxUcpgWYIuYxLxycmsOY",
    authDomain: "celulares-e-commerce.firebaseapp.com",
    projectId: "celulares-e-commerce",
    storageBucket: "celulares-e-commerce.appspot.com",
    messagingSenderId: "987024143645",
    appId: "1:987024143645:web:7104ee056d6a1288bdddf4",
    measurementId: "G-68V2408HWH"
};

const app = firebase.initializeApp(firebaseConfig)

// export function getFirebase(){
//     return app
// }

export function getFirestore(){
    return firebase.firestore(app)
}
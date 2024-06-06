import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { app, db } from "./firebaseConfig";

const auth = getAuth(app)

// Registro de usuario
export const registerUser = async (userData) => {
/*     createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then(
        (userCredential => {
            const user = userCredential.user
            try {
                // Inicializa los datos del usuario registrado en Firestore
                setDoc(doc(collection(db, 'users'), user.uid), {
                    uid: user.uid,
                    email: user.email,
                    name: userData.name
                })
            } catch (error) {console.log("ERROR: ", error);}
        }))
    .catch((error) => {console.log("--ERROR: ", error);}) */

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
            try {
                // Inicializa los datos del usuario registrado en Firestore
                await setDoc(doc(collection(db, 'users'), userCredential.user.uid), {
                    uid: userCredential.user.uid,
                    email: userCredential.user.email,
                    name: userData.name
                })
                return {register: true}
            } catch (error) {return {registerer: false, error: error}}
    } catch (error) {
        return {registerer: false, error: error}
    }
}


// Inicio de sesion
export const loginUser =  async (userData) => {
    try {
        await signInWithEmailAndPassword(auth, userData.email, userData.password)
        return {log: true}
    } catch (error) {
        return {log: false, error: error}
    }
}


// Cierre de sesion
export const logoutUser = () => {
    signOut(auth).then(() => {
        //Cierre de sesion exitoso
    })
}
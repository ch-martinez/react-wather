import { collection, doc, getDocs, deleteDoc, setDoc, addDoc } from "firebase/firestore"
import { db } from "./firebaseConfig"

//Referenciamos a la base de datos (favorites) de firestore
const favoritesCollections = collection(db,'favorites')

//Obtenemos todos los documentos 'favorites'
export const getFavorites = async () => {
    const res = await getDocs(favoritesCollections)
    return res.docs.map ((doc) => (
        {
            ...doc.data(),
            id:doc.id
        }
    ))
}

export const addFavorite = async (name) => {
    const favorite = doc(favoritesCollections)
    await addDoc(favoritesCollections,{
        name: name
    })
}

export const setFavorite = async (name) => {
    const favorite = doc(favoritesCollections)
    await setDoc(favoritesCollections,{
        name: name
    })
}

// Elimina el documento indicado
export const deletFavorite = async (id) => {
    const favorite = doc(favoritesCollections,id)
    await deleteDoc(favorite)
}
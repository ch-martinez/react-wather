import { collection, doc, getDocs, deleteDoc, setDoc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebaseConfig"

//Referenciamos a la base de datos (favorites) de firestore
const favoritesCollections = collection(db,'favorites')

//Devuelve un hash segun un string indicado
export const generateHash = (str) => {
    let chars = str.split('')
    const hash = chars.reduce((h, c) => (h = c.charCodeAt(0) + (h << 6) + (h << 16) -h),0)
    return hash.toString()
}

//Devuelve si existe un documento
export const existFavorite = async (id) => {
    const favorite = doc(favoritesCollections, id)
    return (await getDoc(favorite)).exists()
}

//Obtenemos todos los documentos de la coleccion "Favorites"
export const getFavorites = async () => {
    const res = await getDocs(favoritesCollections)
    return res.docs.map ((doc) => (
        {
            ...doc.data(),
            id:doc.id
        }
    ))
}

//Obtiene un documento de la coleccion "Favorites"
export const getFavorite = async (id) => {
    const favorite = doc(favoritesCollections, id)
    const res = await getDoc(favorite)
    console.log(res.data());
}

//Añade un documento a la coleccion "Favorites"
export const addFavorite = async (id, name) => {
    await setDoc(doc(favoritesCollections,id),{
        id: id,
        name: name
    })
}

//Edita el documento indicado en la coleccion "Favorites"
export const updateFavorite = async (id, name) => {
    await updateDoc(doc(favoritesCollections,id),{
        name: name
    })
}

//Elimina el documento indicado en la coleccion "Favorites"
export const deletFavorite = async (id) => {
    try {
        const favorite = doc(favoritesCollections,id)
        const res = await deleteDoc(favorite)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
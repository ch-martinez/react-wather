import { useState, useEffect } from "react"
import { getFavorites } from "../../utils/firebase"
import { LiFav } from "./LiFav"

export const ShowList = () => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        getFavorites().then((res) => setFavorites(res))
    },[favorites])

    return(
        <section>
            <ul>
                {favorites.map((fav) => (
                    <LiFav key={fav.id} fav={fav}/>
                ))}
            </ul>
        </section>
    )
}
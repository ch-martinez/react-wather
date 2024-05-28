import { useEffect, useState } from 'react'
import {generateHash, addFavorite, existFavorite} from '../../utils/firebase'

export const Location = ({location}) => {
    if (location != null){
        const [fav, setFav] = useState(null)

        const fullLocation = `${location.name}, ${location.region}, ${location.country}`
        const id = generateHash(fullLocation)

        useEffect(() => {
            existFavorite(id).then(res => setFav(res))
        },[fav])

        return(
            <section>
                {
                    fav ?
                        <h1>FAV</h1>
                    :
                        <button onClick={() => addFavorite(id, fullLocation)}>AGREGAR</button>
                }
                <h6>{location.localtime}</h6>
                <h3>{fullLocation}</h3>
            </section>
        )
    }
}
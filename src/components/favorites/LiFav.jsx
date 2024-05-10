import { Link } from "react-router-dom"
import { deletFavorite, setFavorite } from "../../utils/firebase"

export const LiFav = ({fav}) => {
    return(
        <li>
            <Link to={`/${fav.name}`} >{fav.name}</Link>
            <button onClick={() => setFavorite()}>Editar</button>
            <button onClick={() => deletFavorite(fav.id)}> BORRAR </button>
        </li>
    )
}
import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <navbar>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favoritos</Link>
                </li>
            </ul>
        </navbar>
    )
}
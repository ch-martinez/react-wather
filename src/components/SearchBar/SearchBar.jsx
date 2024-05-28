import { useEffect, useState } from "react"
import { getCitiessAPI } from "../../utils/geoapifyAPI"
import { useDebouncedCallback } from "use-debounce"
import { set } from "firebase/database"


export const SearchBar = ({handleSearch}) => {
    const [input, setInput] = useState("")
    const [cities, setCitiess] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(input == "" || !input) return

        handleSearch(input)
    }

    const handleInputCities = useDebouncedCallback(async (input) => {
        setCitiess([])
        setInput(input)
        
        getCitiessAPI(input).then(city => {setCitiess(city)})
    },750)

    useEffect(() => {
        if (input != "") handleInputCities(input)
    }, [input])

    const handlerClick = (e) => {
        //console.log(JSON.stringify(e))
        console.log(e);
    }

    return(
        <>
        <form onSubmit={e => handleSubmit(e)}>
            <input
                placeholder="Ingrese una ciudad..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
            <button type="submit">Buscar 🔍</button>
        </form>
            <ul>
                {cities.map((city) => (
                    <li key={city.plus_code} onClick={() => handlerClick(city)}>{city.formatted_address}</li>
                ))}
            </ul>
                </>
    )
}
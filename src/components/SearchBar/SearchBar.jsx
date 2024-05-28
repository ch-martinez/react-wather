import { useState } from "react"
import { getCitiessAPI } from "../../utils/geoapifyAPI"

export const SearchBar = ({handleSearch}) => {
    const [input, setInput] = useState("")
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(input == "" || !input) return

        handleSearch(input)
    }

    const handleInputCities = (e) => {
        setInput(e.target.value)
        getCitiessAPI(input)
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <input
                placeholder="Ingrese una ciudad..."
                debounceTimeout={1000}
                onChange={handleInputCities}
            />
            <button type="submit">Buscar 🔍</button>
        </form>
    )
}
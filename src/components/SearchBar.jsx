import { useState } from "react"

export const SearchBar = ({handleSearch}) => {
    const [input, setInput] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(input == "" || !input) return
        handleSearch(input)
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <input
                placeholder="Ingrese una ciudad..."
                onChange={e => setInput(e.target.value)}
            />
            <button type="submit">Buscar 🔍</button>
        </form>
    )
}
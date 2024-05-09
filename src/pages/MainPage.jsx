import { useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { Weather } from "../components/Weather"
import { getWeatherDataFromAPI, test } from "../utils/weatherAPI"

export const MainPage = () => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(test)

    const handleSearch = async (input) => {
        setCity(input)
        getWeatherDataFromAPI(city).then(res => setWeatherData(res))
    }

    return(
        <>
            <SearchBar handleSearch={handleSearch}/>
            <Weather weatherData={weatherData}/>
        </>
    )
}
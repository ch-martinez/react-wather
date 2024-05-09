import { useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { Weather } from "../components/Weather"
import { getWeatherDataFromAPI } from "../utils/weatherAPI"

export const MainPage = () => {
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [weatherData, setWeatherData] = useState(null)

    const handleSearch = async (input) => {
        setLoading(true)
        await getWeatherDataFromAPI(input)
            .then((data) => {
                setWeatherData(data)
                setLoading(false)
                setShow(true)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
                setShow(false)
            })
    }

    return(
        <>
            <SearchBar handleSearch={handleSearch}/>
            <Weather
                isLoading={loading}
                showData={show}
                weatherData={weatherData}
            />
        </>
    )
}
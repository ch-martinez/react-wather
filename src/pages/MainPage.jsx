import { useEffect, useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { Weather } from "../components/Weather"
import { getWeatherDataFromAPI } from "../utils/weatherAPI"
import { useParams } from "react-router-dom"

export const MainPage = () => {
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [weatherData, setWeatherData] = useState(null)

    let params = useParams()

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

    //Si en la URL hay params de una ciudad, se carga y se limpia la URL
    useEffect( ()=> {
        if (params.city) {
            window.history.pushState({}, document.title, "/")
            handleSearch(params.city)
        }
    },[])

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
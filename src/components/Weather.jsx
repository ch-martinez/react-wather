import { Location } from "./Location"
import { Current } from "./Current"
import { Forecast } from "./Forecast"
import { Spinner } from "./Spinner"
import { setFavorite, addFavorite } from "../utils/firebase"

export const Weather = ({isLoading, showData, weatherData}) => {

    if (isLoading) {return <Spinner/>}

    if(showData == true){
        const location = weatherData.location
        const current = weatherData.current
        const forecast = weatherData.forecast.forecastday
        return(
            <>
                <button onClick={() => addFavorite(`${location.name}, ${location.region}, ${location.country}`)}>AGREGAR</button>
                <Location location={location}/>
                <Current current={current}/>
                <Forecast forecast={forecast}/>
            </>
        )
    }else{
        return(
            <></>
        )
    }
}
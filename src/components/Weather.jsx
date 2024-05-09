import { Location } from "./Location"
import { Current } from "./Current"
import { Forecast } from "./Forecast"

export const Weather = ({weatherData}) => {
    const location = weatherData.location
    const current = weatherData.current
    const forecast = weatherData.forecast.forecastday

    return(
        <>
            <Location location={location}/>
            <Current current={current}/>
            <Forecast forecast={forecast}/>
        </>
    )
}
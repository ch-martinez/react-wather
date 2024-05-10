import { Location } from "./Location"
import { Current } from "./Current"
import { Forecast } from "./Forecast"
import { Spinner } from "./Spinner"

export const Weather = ({isLoading, showData, weatherData}) => {

    if (isLoading) {return <Spinner/>}

    if(showData == true){
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
    }else{
        return(
            <></>
        )
    }
}
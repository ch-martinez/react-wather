//Devuelve solo la hora
const getTime = (date) => {
    return date.slice(11)
}

export const Forecast = ({forecast}) => {
    if (forecast != null){
        const fHours = forecast[0]
        const fDays = forecast.slice(1)

        return (
            <>
                <article>
                    <h3>Pronostico por hora</h3>
                    <ul>
                        {fHours.hour.map((hour, i) => (
                            <li key={i}>
                                {getTime(hour.time)}
                                <img src={hour.condition.icon} alt="" srcset="" />
                                <span>{hour.temp_c}°</span>
                            </li>
                        ))}
                    </ul>
                </article>
                <article>
                    <h3>Pronostico por dias</h3>
                    <ul>
                        {fDays.map((day, i) => (
                            <li key={i}>
                                {day.date}
                                <img src={day.day.condition.icon} alt="" srcset="" />
                                <span>MIN: {day.day.mintemp_c}°</span>
                                <span>MAX: {day.day.maxtemp_c}°</span>
                            </li>
                        ))}
                    </ul>
                </article>
            </>
        );
    }
}
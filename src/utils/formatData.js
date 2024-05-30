// Segun el codigo del clima, devuelve el nombre del icon a mostrar
const setIcon = (code, is_Day) => {
    switch (code) {
        //sunny
        case 1000:
            return is_Day == 1 ? "001d" : "001n";

        //Cloudy / Nublado
        case 1006: case 1009:
            return "002";

        //Partly cloudy / Parcialmente nublado
        case 1003:
            return is_Day == 1 ? "002d" : "002n";

        //Mist / Neblina
        case 1030:
            return "009-fog";
        case 1135:
            return "020-fog-1";

        // Patchy rain possible / Posible lluvia irregular
        case 1063: case 1180: case 1183: case 1192: case 1195: case 1243:
            return "004";

        // Patchy snow possible / Posible nueve irregular
        case 1066:
            return "snowflakes";

        // Patchy sleet possible / Posible aguanieve irregular
        case 1069: case 1072: case 1168: case 1171: case 1198: case 1201: case 1204: case 1207: case 1249: case 1252:
            return "012-sleet";

        // Thundery outbreaks possible / Posibles estallidos tormentosos
        case 1087:
            return "006";

        // Blizzard / Tormenta de nieve
        case 1117: case 1114:
            return "013-blizzard";

        // Patchy light drizzle / Llovizna ligera irregular
        case 1150: case 1153: case 1240:
            return "003";

        // Moderate rain at times
        case 1186: case 1189:
            return "003d";

        //Patchy light snow / Nieve ligera irregular
        case 1210: case 1213: case 1255:
            return "025-snowing";

        // Patchy moderate snow 
        case 1216: case 1219:
            return "snowflakes";

        // Heavy snow
        case 1222: case 1225: case 1258:
            return "snowflake";

        // Ice pellets / granizo
        case 1237: case 1261: case 1264:
            return "021-hail";

        // Torrential rain shower
        case 1246:
            return "drops";

        // thunder
        case 1273: case 1276: case 1279: case 1282:
            return "005";

        default:
            return "default";
    }

}

// Devuelve el nombre del dia segun la fecha indicada
const getDay = (data) => {
    return ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][new Date(data).getDay()];
}

// Devuelve un array con las horas formateadas del dia actual
const formatForecastHours = (data) => {
    let forecastHour = []
    data.forEach((hour) => {
        forecastHour.push({
            hour: hour.time.slice(11),
            temp: hour.temp_c,
            icon: setIcon(hour.condition.code, hour.is_day)
        })
    })
    return forecastHour
}

// Devuelve un array con los dias formateados
const formatForecastDays = (data) => {
    let forecastDays = []
    data.forEach((day) => {
        forecastDays.push({
            day: getDay(day.date),
            date: day.date,
            temp_max: day.day.maxtemp_c,
            temp_min: day.day.mintemp_c,
            icon: setIcon(day.day.condition.code, 1)
        })
    })
    return forecastDays
}

// Formatea los datos de locacion, clima actual, pronostico de horas y pronostico de dias
export const formatData = (location, weather) => {
    return {
        location: {
            ...location,
            localtime: weather.location.localtime.slice(11)
        },
        current: {
            temp: weather.current.temp_c,
            feels_like: weather.current.feelslike_c,
            clouds: weather.current.cloud,
            humidity: weather.current.humidity,
            precip: weather.current.precip_mm,
            pressure: weather.current.pressure_mb,
            uv: weather.current.uv,
            wind: weather.current.wind_kph,
            wind_degree: weather.current.wind_degree,
            wind_dir: weather.current.wind_dir,
            condition: weather.current.condition.text,
            icon: setIcon(weather.current.condition.code, weather.current.is_day)
        },
        forecast_hours: formatForecastHours(weather.forecast.forecastday[0].hour),
        forecast_days: formatForecastDays(weather.forecast.forecastday)
    }
}

// Formatea los datos de locacion
export const formatLocationData = (location) => {
    return {
        id: location.plus_code,
        lat: location.lat,
        lon: location.lon,
        city: location.city,
        state: location.state,
        country: location.country,
        formatted_address: `${location.city}, ${location.state ? location.state + "," : ""} ${location.country}`
    }
}
import axios from "axios"

const api_key = '6e5e93e398c4e4733e9388e86df07d1e'

export const getGeolocationFromAPI = (locationInput) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?appid=${api_key}&limit=5&q=${locationInput}`
    return axios.get(url).then(res => res.data)
}

export const getCurrentWeatherFromAPI = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${api_key}&lang=es&units=metric&lat=${city.lat}&lon=${city.lon}`
    return axios.get(url).then(res => res.data)
}

export const getForecastFromAPI = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?&appid=${api_key}&lang=es&units=metric&lat=${city.lat}&lon=${city.lon}`
    return axios.get(url).then(res => res.data)
}
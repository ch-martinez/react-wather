// https://www.weatherapi.com/docs/#intro-request

import axios from "axios"

const api_key = '820ab2966c224b35ad7212216240805'

export const getWeatherDataFromAPI = async (query) => {
    const days = 16
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${query}&days=${days}&aqi=no&alerts=no`
    return await axios.get(url).then(res => res.data)
}
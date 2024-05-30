//API URL: https://www.geoapify.com/
import axios from "axios"
import { formatLocationData } from "./formatData"

const api_key = "0aba5f30249c4c53b1f877501e0e4b01"

// Devuelve el listado de ciudades segun el nombre indicado
export const getCitiessAPI = async (query) => {
    const res = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&lang=es&format=json&type=city&apiKey=${api_key}`)
    const results = res.data.results
    let resultsAux = []

    //Filtra los resultados que se repiten
    results.forEach((result) => {
        const exist = resultsAux.some((ra) => ra.id === result.plus_code)
        if (!exist) { resultsAux.push(formatLocationData(result)) }
    })

    return resultsAux
}

// Devuelve la ciudad segun la latitud y longitud indicada
export const getReverseCityAPI = async (query) => {
    const res = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?apiKey=${api_key}&lang=es&format=json&lat=${query.latitude}&lon=${query.longitude}&type=city`)
    return formatLocationData(res.data.results[0])
}
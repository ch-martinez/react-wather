import axios from "axios"

//API URL: https://www.geoapify.com/

const api_key = "0aba5f30249c4c53b1f877501e0e4b01"

//Formato de datos
const formatData = (data) => {
    return {
        id: data.plus_code,
        lat: data.lat,
        lon: data.lon,
        city: data.city,
        state: data.state,
        country: data.country,
        formatted_address: `${data.city}, ${data.state ? data.state+"," : ""} ${data.country}`
    }
}

export const getCitiessAPI = async (query) => {
    const res = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&lang=es&format=json&type=city&apiKey=${api_key}`)
    const results = res.data.results
    let resultsAux = []

    //Filtra los resultados que se repiten
    results.forEach((result) => {
        const exist = resultsAux.some((ra) => ra.id === result.plus_code)
        if (!exist) {resultsAux.push(formatData(result))}
    })

    return resultsAux
}
import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Weather } from "../components/Weather/Weather";
import { getWeatherDataFromAPI } from "../utils/weatherAPI";
import { useSearchParams } from "react-router-dom";
import { getReverseCityAPI } from "../utils/geoapifyAPI";
import { formatData } from "../utils/formatData";


export const MainPage = () => {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null)

    let [searchParams, setSearchParams] = useSearchParams(); // En caso de haber, obtiene los query "lat" y "lon" de la URL

    const handleSearch = async (location) => {
        setLoading(true);
        await getWeatherDataFromAPI(location)
            .then((weather) => {
                setData(formatData(location,weather))
                setLoading(false);
                setShow(true);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setShow(false);
            });
    };

    //Si en la URL hay querys de lat y lon, se carga y se limpia la URL
    useEffect(() => {
        const location = {
            latitude: Number(searchParams.get("lat")),
            longitude: Number(searchParams.get("lon")),
        };
        if (location.latitude && location.longitude) {
            window.history.pushState({}, document.title, "/");
            getReverseCityAPI(location).then((query) => {
                handleSearch(query);
            });
        }
    }, []);

    return (
        <body className="container">
            <SearchBar handleSearch={handleSearch} />
            <Weather
                isLoading={loading}
                showData={show}
                data={data}
            />
        </body>
    );
};

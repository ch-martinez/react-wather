import { Current } from "./Current";
import { Forecast } from "./Forecast";
import { Spinner } from "../Spinner";

export const Weather = ({ isLoading, showData, data }) => {

    if (isLoading) {
        return <Spinner />;
    }

    if (showData) {
        console.log(data)
        return (
            <>
                <Current location={data.location} current={data.current} />
                <Forecast title="Pronostico por horas" forecast={data.forecast_hours} />
                <Forecast title="Pronostico por dias" forecast={data.forecast_days} />
            </>
        );
    } else {
        return <></>;
    }
};

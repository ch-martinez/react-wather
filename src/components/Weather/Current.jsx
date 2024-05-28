export const Current = ({current}) => {
    if (current != null){
        return(
            <section>
                <div>
                    <img src={current.condition.icon} alt={current.condition.text} />
                    <p>{current.condition.text}</p>
                </div>
                <div>
                    <p>{current.temp_c}°</p>
                </div>
                <div>
                    <ul>
                        <li>{current.feelslike_c}</li>
                        <li>{current.humidity}</li>
                        <li>{current.wind_kph}</li>
                    </ul>
                </div>
            </section>
        )
    }
}
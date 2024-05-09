export const Location = ({location}) => {
    if (location != null){
        return(
            <section>
                <h6>{location.localtime}</h6>
                <h3>{location.name}, {location.region}, {location.country}</h3>
            </section>
        )
    }
}
interface Props {
    weather: WeatherObj,
    message: string,
}
interface WeatherObj {
    country: string,
    city: string,
    temp: number,
    pressure: number,
    sunset: number,
}

const Weather = ({weather, message}: Props) => {

    return (
        <div className={'infoWeather'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    )
}

export default Weather;
import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.ts";

interface Sys {
    country: string;
    sunset: number;
}

interface Main {
    temp: number;
    pressure: number;
}

interface weatherTypes {
    sys: Sys;
    name: string;
    main: Main;
}

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "", country: "", pressure: 0, sunset: 0, temp: 0
    });
    const [message, setMessage] = useState('Enter city name');

    const getWeather = (city: string) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then((data: weatherTypes) => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                })
                setMessage('')
            })
            .catch(e => {
                console.log(e);
                setMessage('Enter correct city name')
            })
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather message={message} weather={weatherInfo}/>
        </div>
    );
};

export default Data;
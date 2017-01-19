import axios from 'axios';

const API_KEY = '42d4941bd0c8d9ba2c830ef40f6470e1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
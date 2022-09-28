import { printError } from './log.services.js';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.services.js'
import fetch from 'node-fetch';

const geoCoding = async (city, apiKey) => { // Get the lat && lon by the name of the city

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()

    return data.pop();
}

const getWeather = async (city) => { // Get info about weather in the City

    const token = await getKeyValue(TOKEN_DICTIONARY.token)

    if (!token) { throw new Error('API key is undefined, use -t command') }

    const geoCod = await geoCoding(city, token)

    if (!geoCod) { printError('Name of the city not found') }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${geoCod.lat}&lon=${geoCod.lon}&appid=${token}`

    const data = await fetch(url)
    const res = await data.json()
    console.log(res);
    //return res;

}

export { getWeather }
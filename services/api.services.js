import { TOKEN_DICTIONARY, getKeyValue } from './storage.services.js'
import fetch from 'node-fetch';

const geoCoding = async (city, apiKey) => { // Get the lat && lon by the name of the city

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()

    return data.pop();
}

const getWeather = async () => { // Get info about weather in the City

    const city = await getKeyValue(TOKEN_DICTIONARY.city)
    const token = await getKeyValue(TOKEN_DICTIONARY.token)

    if (!token) { throw new Error('API key is undefined, use -t command') }

    const geoCod = await geoCoding(city, token)

    if (!geoCod) { throw new Error('Name of the city not found') }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${geoCod.lat}&lon=${geoCod.lon}&appid=${token}&lang=ua&&units=metric`

    const data = await fetch(url)
    const res = await data.json()
    return res;

}

export { getWeather }
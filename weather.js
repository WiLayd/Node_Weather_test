import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess, printWeather } from "./services/log.services.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.services.js";
import { getWeather } from "./services/api.services.js";


const saveToken = async (token) => {
    if (!token.length) {
        printError('Token is undefined')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Success token saving')
    } catch (e) {
        printError(e.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('Token is undefined')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('Success city saving')
    } catch (e) {
        printError(e.message)
    }
}

const getForcast = async () => {
    try {
        const weather = await getWeather('Вінниця');
        printWeather(weather)
        //console.log(weather)
    } catch (e) {
        printError(e.message)
    }

}

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        saveCity(args.s)
    }
    if (args.t) {
        saveToken(args.t)
    }
    getForcast()
    // Log weather
}

initCLI()
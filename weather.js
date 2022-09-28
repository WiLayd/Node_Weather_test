
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.services.js";
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

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        (getWeather('Vinnytsia').then(res => console.log(res)));
        //save sity
    }
    if (args.t) {
        saveToken(args.t)
    }
    // Log weather
}

initCLI()
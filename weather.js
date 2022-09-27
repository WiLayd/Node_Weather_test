
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.services.js";
import { saveKeyValue } from "./services/storage.services.js";


const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
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
        //save sity
    }
    if (args.t) {
        saveToken(args.t)
    }
    // Log weather
}

initCLI()
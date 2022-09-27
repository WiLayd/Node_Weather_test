
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.services.js";
import { saveKeyValue } from "./services/storage.services.js";


const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //save sity
    }
    if (args.t) {
        saveKeyValue('token', args.t)
        //save token
    }
    // Log weather
}

initCLI()
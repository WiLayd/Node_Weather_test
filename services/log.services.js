import chalk from 'chalk';
import dedent from 'dedent';

const printError = (err) => {
    console.log(chalk.bgRed(`Error:  ${err}`));
}

const printSuccess = (msg) => {
    console.log(chalk.bgGreen(`Success:  ${msg}`));
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('Helpper')}
        Without arguments - output weather
        -s [CITY]  for attaching city
        -h for help description
        -t [API_KEY] for save token 
        `
    );
}

export { printError, printHelp, printSuccess }
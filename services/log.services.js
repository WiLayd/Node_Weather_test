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

const printWeather = (weather) => {
    console.log(
        dedent`${chalk.bgBlue(`Погода у місті ${weather.name}`)}
        Завтра у ${weather.name} очікуєтсья: ${weather.weather.pop().description}
        Температура повітря складатиме: ${weather.main.temp} °C та відчуватиметься як: ${weather.main.feels_like} °C
        Швидкість вітру складатиме: ${weather.wind.speed} км/год
        Вологість повітря складатиме: ${weather.main.humidity}%
        Бережіть себе!
        `
    );
}



export { printError, printHelp, printSuccess, printWeather }
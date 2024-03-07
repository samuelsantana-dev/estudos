// index.mjs
//Para instalar poderia ser:  npm install inquirer chalk
import inquirer from 'inquirer';
import chalk from 'chalk';

inquirer.prompt([
    {
        name: 'name',
        message: 'Qual é o seu nome?',
    },
    {
        name: 'idade',
        message: 'Adicione sua idade',
    },
    {
        name: 'time',
        message: 'Qual time você torce?',
    },
    {
        name: 'esporte',
        message: 'Qual esporte você pratica?',
    },
]).then((response) => {
    console.log(chalk.green('Respostas:'));
    console.log(chalk.bgYellow.black(`Nome: ${response.name}`));
    console.log(chalk.bgYellow.black(`Idade: ${response.idade}`));
    console.log(chalk.bgYellow.black(`Time: ${response.time}`));
    console.log(chalk.bgYellow.black(`Esporte: ${response.esporte}`));
}).catch((err) => console.log(err));

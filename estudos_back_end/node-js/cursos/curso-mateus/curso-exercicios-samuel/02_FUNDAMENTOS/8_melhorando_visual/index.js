const chalk = require("chalk");

const nota = 1;
const notaDois = 38;

if (nota >= 7) {
  console.log(chalk.green.bold("Parabéns, você passou!"));
} else {
  console.log(chalk.bgRed.black("Você precisa fazer a prova final!"));
}

if(notaDois <=18){
  console.log(chalk.yellow("Cor amarelo"))
} else{
  console.log(chalk.red('cor vermelho'))
}

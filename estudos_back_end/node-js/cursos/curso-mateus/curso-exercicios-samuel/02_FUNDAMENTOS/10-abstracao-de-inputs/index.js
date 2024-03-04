const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota ?'
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota ?'
    }
]).then((response) => {
    const media = (parseInt(response.p1) + parseInt(response.p2)) / 2;
    console.log(`A média é: ${media}`);

    if(media <= 7){
        console.log("Reprovado!")
    } else {
        console.log("Aprovado")
    }
}).catch((err) => console.log(err));

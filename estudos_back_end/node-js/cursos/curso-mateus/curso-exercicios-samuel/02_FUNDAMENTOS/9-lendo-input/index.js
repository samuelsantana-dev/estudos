const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Qual a sua linguagem favorita?", (linguagem) => {
    if (linguagem === "python") {
        console.log("Isso nem é linguagem");
    } else {
        console.log(`A minha linguagem favorita é ${linguagem}`);
    }

    rl.close();
});

//Pode chamar sem a instalçao do raedline tambem


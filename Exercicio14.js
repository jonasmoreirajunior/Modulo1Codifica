const prompt = require('prompt-sync')();

let soma = 0;
let quantidadeNumeros = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número decimal, ou digite 0 para encerrar: "));
    
    if (numero === 0) {
        break;
    }
    
    if (!isNaN(numero)) {
        soma += numero;
        quantidadeNumeros++;
    } else {
        console.log("Por favor, insira um número decimal válido.");
    }
}

if (quantidadeNumeros > 0) {
    let media = soma / quantidadeNumeros;
    console.log(`A média aritmética dos números é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi inserido.");
}

// Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.

const prompt = require('prompt-sync')();

/**
 * Função para verificar se o valor informado é PAR ou ÍMPAR
 * @param {number} valor 
 * @returns 
 */
const verificaNumero = (valor) => {
    if (valor % 2 === 0) {
        return "PAR"
    } else {
        return "ÍMPAR"
    }
}

while(true) {
    let valorInformado = parseInt(prompt("Informe um valor, caso queira sair, digite 0: "))

    if (valorInformado <= 0 || isNaN(valorInformado)) {
        console.log("Programa encerrado com sucesso")
        break
    }

    let resultado = verificaNumero(valorInformado)
    console.log("O valor", valorInformado, "é", resultado)
}
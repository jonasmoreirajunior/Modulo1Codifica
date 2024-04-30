// Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const prompt = require('prompt-sync')();

const quantidadeEleitores = parseInt(prompt("Informe a quantidade total de eleitores: "))
const quantidadeVotosBrancos = parseInt(prompt("Informe a quantidade de votos brancos: "))
const quantidadeVotosNulos = parseInt(prompt("Informe a quantidade de votos nulos: "))
const quantidadeVotosValidos = parseInt(prompt("Informe a quantidade de votos válidos: "))

/**
 * Função para calcular o percentual de votos
 * @param {number} value 
 * @param {string} tipoVoto 
 * @returns 
 */
function calculaPercentual(value, tipoVoto) {
    const percentualCalculado = (value / quantidadeEleitores) * 100
    return console.log(`O percentual de votos ${tipoVoto} é: `, percentualCalculado)
}

calculaPercentual(quantidadeVotosBrancos, "brancos")
calculaPercentual(quantidadeVotosNulos, "nulos")
calculaPercentual(quantidadeVotosValidos, "válidos")
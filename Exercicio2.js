const prompt = require('prompt-sync')();

const quantidadeEleitores = parseInt(prompt("Informe a quantidade total de eleitores: "))
const quantidadeVotosBrancos = parseInt(prompt("Informe a quantidade de votos brancos: "))
const quantidadeVotosNulos = parseInt(prompt("Informe a quantidade de votos nulos: "))
const quantidadeVotosValidos = parseInt(prompt("Informe a quantidade de votos válidos: "))

function calculaPercentual(value, tipoVoto) {
    const percentualCalculado = (value / quantidadeEleitores) * 100
    return console.log(`O percentual de votos ${tipoVoto} é: `, percentualCalculado)
}

calculaPercentual(quantidadeVotosBrancos, "brancos")
calculaPercentual(quantidadeVotosNulos, "nulos")
calculaPercentual(quantidadeVotosValidos, "válidos")
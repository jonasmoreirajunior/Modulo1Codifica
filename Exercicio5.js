// Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0

const prompt = require('prompt-sync')();

const nota1 = parseInt(prompt("Informe o valor da primeira nota: "))
const nota2 = parseInt(prompt("Informe o valor da segunda nota: "))

const mediaSemestre = (nota1 + nota2) / 2

if (mediaSemestre >= 6) console.log("PARABÉNS, você foi aprovado!")
else console.log("Você foi REPROVADO! Estude mais.")
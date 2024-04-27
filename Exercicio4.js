// Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).

const prompt = require('prompt-sync')();

const nota1 = parseInt(prompt("Informe o valor da primeira nota: "))
const nota2 = parseInt(prompt("Informe o valor da segunda nota: "))

const mediaSemestre = (nota1 + nota2) / 2

if (mediaSemestre >= 6) console.log("PARABÉNS, você foi aprovado!")
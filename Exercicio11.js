const prompt = require('prompt-sync')();

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
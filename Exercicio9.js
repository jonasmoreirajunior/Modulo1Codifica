// Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:

const prompt = require('prompt-sync')();

const codigoProduto = parseInt(prompt("Informe o código de origem do produto: "))

const codigos = [
    {
        cod_regiao_min: 1,
        cod_regiao_max: 1,
        regiao: "Sul"
    },
    {
        cod_regiao_min: 2,
        cod_regiao_max: 2,
        regiao: "Norte"
    },
    {
        cod_regiao_min: 3,
        cod_regiao_max: 3,
        regiao: "Leste"
    },
    {
        cod_regiao_min: 4,
        cod_regiao_max: 4,
        regiao: "Oeste"
    },
    {
        cod_regiao_min: 5,
        cod_regiao_max: 6,
        regiao: "Nordeste"
    },
    {
        cod_regiao_min: 7,
        cod_regiao_max: 9,
        regiao: "Sudeste"
    },
    {
        cod_regiao_min: 10,
        cod_regiao_max: 20,
        regiao: "Centro-Oeste"
    },
    {
        cod_regiao_min: 25,
        cod_regiao_max: 50,
        regiao: "Nordeste"
    }
]

const verificaCodigo = (cod) => {
    if (cod >= 1 && cod <= 50) {
        codigos.forEach(codigo => {
            if (cod >= codigo.cod_regiao_min && cod <= codigo.cod_regiao_max) {
                console.log(codigo.regiao)
            }
        });
    } else {
        console.log("Produto Importado")
    }
}

verificaCodigo(codigoProduto)
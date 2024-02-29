const readline = require('readline-sync');

const produtos = [];

function criar() {
    const nome = readline.question("Informe o nome do produto: ")
    const preco = readline.question("Informe o preco do produto: ")
}

function listar() {
    produtos.forEach((produto) =>
    console.log(produto, nome, "-", produto.preco));
}


function menu() {
    console.log("1. Listar");
    console.log("2. Criar");
    console.log("3. Buscar");
    console.log("4. Atualizar");
    console.log("5. Remover");
    console.log("6. Sai");
}

function escolherOpcao(opcao) {
    switch (opcao) {
        case "1": break;
        case "2": break;
        case "3": break;
        case "4": break;
        case "5": break;
        case "6": process.exit(0);
        default: console.log('Opcao invalida');
    }
}

function main() {
    while (true) {
        menu();
        const opcao = readline.question("Entre com uma opcao: ")
        escolherOpcao(opcao);
    }
}

main();
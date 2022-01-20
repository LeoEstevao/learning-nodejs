// ESTE Arquivo será importado pelo arquivo '02-modules.index.js'

// Um único export
function enviaMensagem(texto) {
    return console.log(`Olá, a função enviaMensagem retornou ${texto}`)
};

// module.exports = enviaMensagem;


// Múltiplos exports
// Criando uma var para exportar
let nomeCalc = 'Calculadora simples';

function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//Ps: module.exports é uma função nativa do nodejs
module.exports = {
    soma,
    subtrai,
    multiplica,
    divide,
    nomeCalc // Exportando a var
}

// Using ES6
// export default {
//     soma, 
//     subtrai, 
//     multiplica, 
//     divide, 
//     nomeCalc
// }

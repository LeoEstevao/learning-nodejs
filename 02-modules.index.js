// Para trabalharmos com módulos, precisamos exportá-los e importá-los através de arquivos.

// Um módulo, seria uma função que está em outro arquivo, e que podemos exportar para um arquivo principal. ex:

// Ps: require() é uma função nativa do nodejs
let enviaMensagem = require("./02-modules.external");
// Using ES6
// import enviaMensagem from './02-modules.external'; 
enviaMensagem('Mensagem enviada')

let operacoes = require("./02-modules.external");
// Using ES6
// import operacoes from './02-modules.external';
console.log(operacoes.soma(1, 5));
console.log(operacoes.subtrai(1, 5));
console.log(operacoes.multiplica(1, 5));
console.log(operacoes.divide(1, 5));
console.log(`O nome da Calculadora é: ${operacoes.nomeCalc}`);

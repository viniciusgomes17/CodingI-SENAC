//concatenação de string         1º questão

var nome = "carol"; 
var idade = "25";

console.log (`ola! Meu nome é ${nome}, e tenho ${idade} anos.`)



//  2º questão 

let nome = "vinicius";
let cidade = "londres";

console.log (nome + " é de " + cidade + ".");



//   3ª questão

let num1 = 80;
let num2 = 100;
console.log (num1 + num2); 
console.log (num1 - num2);
console.log (num1 * num2);
console.log (num1 / num2);



// 4ª  questão 

let base = 12;
let altura = 70;
let area = (base * altura) / 2;
console.log (`A área do triângulo é ${(base * altura) / 2}`);



//       5ª Questão

const prompt = require('prompt-sync')({sigint:true});

var n1 = 7;
var n2 = 9;
var n3 = 5;

var media = (n1 + n2+ n3) / 3;
var resultado = media.toFixed(3);

console.log (`sua média é... ${resultado}.`);



// 6º questão

let preco_original = 300;
let desconto = 10;
let valor_desconto = (preco_original * desconto) / 100;
let preco_final = (preco_original - valor_desconto);
console.log (`O preço original era R$ ${preco_original}, com o desconto de ${desconto}%, o preço final é ${preco_final}.`);



//      7º questão 
                /*Até R$ 1.500: Isento
                * De R$ 1.501 até R$ 3.000: 10%
                * De R$ 3.001 até R$ 5.000: 15%
                *    Acima de R$ 5.000: 20%*/

let salario_bruto = 4500;
let aliquota;
let imposto;

if (salario_bruto <= 1500) {
    aliquota = 0;
} else if (salario_bruto <= 3000) {
    aliquota = 10;
} else if (salario_bruto <= 5000) {
    aliquota = 15;
} else if (salario_bruto > 5000) {
    aliquota = 20;
}

imposto = (salario_bruto * aliquota) / 100;

 console.log (`O salário bruto é R$ ${salario_bruto}, a alíquota aplicada vai ser ${aliquota}%, o valor do imposto de renda é R$ ${imposto}.`)


 
 //                    8º questão

 // 1 USD Dólar americano = Real brasileiro  5,43 BRL

/let valor_inicial = 3000;
 let taxa_cambio = 5.43;

 let valor_convertido = (valor_inicial / taxa_cambio);
 console.log (`O valor de R$ ${valor_inicial}, equivale a USD ${valor_convertido.toFixed(2)} com a taxa de câmbio de ${taxa_cambio}.`)



 //     9º questão

 let celsius = 50;
 let conversao = (celsius * 9/5) + 32;
 console.log (`A temperatura para o dia de hoje será de ${conversao}°`);



 //    10º questão

 let peso = 70;
 let altura = 1.73;
 let imc = (peso / (altura * altura));
 console.log (`O resultado do seu IMC é ${imc.toFixed(3)}`)

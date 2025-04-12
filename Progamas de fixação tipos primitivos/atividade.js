/*1º questão 
Declare uma variável chamada nome e atribua o seu nome a ela.
Declare uma variável chamada idade e atribua a sua idade a ela.*/

var nome = "carol"; 
var idade = "25";

console.log (`ola! Meu nome é ${nome}, e tenho ${idade} anos.`)



/*2º questão
Declare uma variável para nome e para cidade
Armazene as informações do tipo String em variáveis e imprima uma mensagem*/

let nome = "vinicius";
let cidade = "londres";

console.log (nome + " é de " + cidade + ".");



/*3ª questão
Declare duas variáveis numéricas: num1 e num2.
Realize as quatro operações básicas(+, -, *, /), e imprima os resultados.*/

let num1 = 80;
let num2 = 100;
console.log (num1 + num2); 
console.log (num1 - num2);
console.log (num1 * num2);
console.log (num1 / num2);



/*4ª questão 
Declare duas variáveis numéricas: base e altura.
Armazene nas variáveis a base e a altura de um triângulo.
Calcule a área e exiba o resultado.
Exemplo: “A área do triângulo é _______”.*/

let base = 12;
let altura = 70;
let area = (base * altura) / 2;
console.log (`A área do triângulo é ${(base * altura) / 2}`);



/*5ª Questão
Declare variáveis para inserir 3 notas de um aluno.
Crie uma nova variável chamada media, nela deve conter o cálculo da média das 3
notas.
Exiba o resultado da média, informado a nota final.
Exemplo: “O resultado da média é __________’”.*/

const prompt = require('prompt-sync')({sigint:true});

var n1 = 7;
var n2 = 9;
var n3 = 5;

var media = (n1 + n2+ n3) / 3;
var resultado = media.toFixed(3);

console.log (`sua média é... ${resultado}.`);



/*6º questão
Crie um programa que calcule o valor final de um produto com desconto.
As variáveis devem informar o preço original e o percentual de desconto.*/

let preco_original = 300;
let desconto = 10;
let valor_desconto = (preco_original * desconto) / 100;
let preco_final = (preco_original - valor_desconto);
console.log (`O preço original era R$ ${preco_original}, com o desconto de ${desconto}%, o preço final é ${preco_final}.`);



/*7º questão Simule um cálculo simplificado de imposto de renda, considerando uma tabela de
alíquotas.
A variável deve informar o salário bruto.
Exiba o resultado com uma mensagem personalizada.
                *Até R$ 1.500: Isento
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


 
 /*8º questão
Crie um conversor de moedas, considerando taxas de câmbio atualizadas.
As variáveis devem guardar o valor das moedas inicial e final.
1 USD Dólar americano = Real brasileiro  5,43 BRL*/

/let valor_inicial = 3000;
 let taxa_cambio = 5.43;

 let valor_convertido = (valor_inicial / taxa_cambio);
 console.log (`O valor de R$ ${valor_inicial}, equivale a USD ${valor_convertido.toFixed(2)} com a taxa de câmbio de ${taxa_cambio}.`)



 /*9º questão
Crie uma variável para a temperatura em Celsius e faça a conversão para
Fahrenheit usando a fórmula (Celsius * 9/5) + 32.*/


 let celsius = 50;
 let conversao = (celsius * 9/5) + 32;
 console.log (`A temperatura para o dia de hoje será de ${conversao}°`);



 /*   10º questão
Crie variáveis para peso (em kg) e altura (em metros).
Calcule o IMC utilizando a fórmula: IMC = peso / (altura * altura).*/

 let peso = 70;
 let altura = 1.73;
 let imc = (peso / (altura * altura));
 console.log (`O resultado do seu IMC é ${imc.toFixed(3)}`)

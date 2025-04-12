//array
let futebol = ["bola", "chuteira", "gramado", "rede", "arquibancada"];
index               0         1           2       3           4
console.log (futebol[3]);

// consulta por nome do elemento e mostra o index.
let consulta = futebol.indexOf("gramado");     // indexOf 
console.log (consulta)

let futebol = ["bola", "chuteira", "gramado", "rede", "arquibancada"];
console.log (futebol.pop()); // remove o ultimo elemento e mostra o elemento removido.

console.log (futebol.push("placar")); // adiciona elementos no final da array e mostra a quantidade da array.

console.log (futebol.sort()); //coloca em ordem alfabetica

console.log (futebol.length); // conta elementos

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const estudante = {
  nome: "vinícius",
  idade: 25,
  matricula: "999999",
  }
console.log(estudante.nome);
// notaçâo por .
console.log(estudante["matricula"]);
//notaçâo por cochetes
console.log(`meu nome é ${estudante.nome} e tenho ${estudante.idade} anos.` );
//usando template string
console.log(estudante.matricula.substring(0,3));
//método substring

for (const key in estudante) {
  console.log(estudante[key]);
}
//loop for..in

//Adicionar
const estudante = {
    nome: "vinícius",
    idade: 25,
    matricula: "999999",
    }
  
  estudante.fones= ["23135455","584643487"];
  
  estudante.curso = {
    nomes_curso: "front-end",
    disciplinas: 10,
    carga_horaria: "110h"
  }
  console.log(estudante);
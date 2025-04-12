// Switch Case
const pesquisa = prompt ("pesquise o nome do(a) estudante.")

switch (pesquisa) {
  case "ana":
    console.log (`${pesquisa}, esta na turma TADS043.`);
    break;
  case "roberto":  //<<<<<pode colocar varias cases após um break quando vc quiser juntar 
  case "julia":
    console.log (`${pesquisa}, esta na turma TADS042.`);
    break;
  default:
    console.log (`${pesquisa}, nao esta matriculado(a).`);
}

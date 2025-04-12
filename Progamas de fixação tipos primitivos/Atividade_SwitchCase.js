/*Crie um algoritmo de pesquisa, com o tema da
sua escolha. Utilize o prompt e analise a condição
de resposta para tomar decisões usando Switch Case.*/

let pesquisa = prompt ("Pesquise o gênero musical da sua escolha.")
switch (pesquisa) {
  case "samba":
  case "pagode":  
    console.log (`${pesquisa} Está na 2º página, onde todas as músicas do mesmo gênero se enquadram! :)`)
    break;
  case "rock and roll":
  case "rock internacional":
    console.log (`${pesquisa} Está na 5º página, onde todas as músicas do mesmo gênero se enquadram! :)`);
    break;
  case "pop internacional":
    console.log (`${pesquisa} Está na 1º página, onde todas as músicas do mesmo gênero se enquadram! :)`);
    break;
  case "mpb":
    console.log (`${pesquisa} Está na 3º página, onde todas as músicas do mesmo gênero se enquadram! :)`);
    break;
  case "rock brasileiro":
    console.log (`${pesquisa} Está na 4º página, onde todas as músicas do mesmo gênero se enquadram! :)`);
    break;
  case "r&b":
    console.log (`${pesquisa} Está na 6º página, onde todas as músicas do mesmo gênero se enquadram! :)`);
    break;
  default:
    console.log (`${pesquisa}, Opa!Gênero não encontrado!:( `);
}
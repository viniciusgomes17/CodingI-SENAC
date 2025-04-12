/*Exercício de fixaçãp
Crie um algoritmo de atendimento na área de
saúde. Utilize o prompt e analise a condição de
resposta para tomar decisões usando if/ else if
/else, operadores lógicos e comparativos.*/

let marcar_consulta = prompt ("Por favor! Insira a especialidade para sua consulta.(cardiologia, ginecologia, odontologia, nutricionista)").toLowerCase();

if (marcar_consulta === "cardiologia") {
  console.log ("Tudo ok! Sua consulta com o cardiologista está marcada!");
} else if (marcar_consulta === "odontologia") {
  console.log ("Tudo ok! Sua consulta com o dentista está marcada!")
} else if (marcar_consulta === "ginecologia") {
  console.log ("Tudo ok! Sua consulta com o ginecologista está marcada!")
} else if (marcar_consulta === "nutricionista") {
    console.log ("Tudo ok! Sua consulta com o nutricionista está marcada!")
  } else {
    console.log ("Não estamos fazendo marcação para essa especialidade no momento!")
  };
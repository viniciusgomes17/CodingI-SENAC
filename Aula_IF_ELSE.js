/*se porta esta aberta
faça acender a lampada 

se não 
faça apagar a lampada*/

const portaAberta = prompt("como esta a porta?").toLowerCase()

if (portaAberta == "aberta") {
  console.log ("a porta esta aberta, lampada acesa");
} else if (portaAberta == "entreaberta") {
  console.log ("a porta esta entreaberta, lampada piscando")
} else if (portaAberta == "fechada") {
  console.log ("a porta esta fechada, lampada apagada")
} else {
  console.log ("Eita! Voce errou.");
};


const portaAberta = prompt("como esta a porta?").toLowerCase()

if (portaAberta == "aberta") {
  console.log ("a porta esta aberta, lampada acesa");
} else if (portaAberta == "fechada" || portaAberta == "entreaberta") {
  console.log ("a porta nao esta aberta, lampada apagada")
} else {
  console.log ("Eita! Voce errou.");
};


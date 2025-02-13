// Estruturas de dados

//Condicionais (If Else ; Switch Case)

var precoPriduto = 150;

if  (precoPriduto>=100) {
    console.log("Valor a Pagar: " +(precoPriduto*0.9));
} else {
    console.log("Valor a Pagar" + (precoPriduto));
}

// Switch Case
var mes = 2;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
        
    default: 
    console.log("Outro Mês")
        break;
}

//Estrutura de repetição (For ; While)

//for(ponto de Inicio; ponto de parada; incremento)
for (let i = 0; i < 10; i++) {
   console.log ("Indice: " +i);
}

//while (condição de parada == false)
var continuar = true;
var numeroEscolhido = 3;
var tentativas=0;
while (continuar) {
    let numeroSortiado = Math.round(Math.random()*10)
    if (numeroEscolhido==numeroSortiado) {
        continuar = false
    }
    tentativas++;
    console.log("Nº de Tentativas : " +tentativas);
}

//funçoes (métodos)

function saudacao(nome) {
    return "Olá, " +nome + "!!!";
}

console.log(saudacao("Maria"));
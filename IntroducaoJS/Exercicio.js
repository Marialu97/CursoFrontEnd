var prompt = require("prompt-sync")();
// Exercicio 1 - Par Impar
var idade = Number(prompt("Informe sua idade:"));
//if emcadiado
if (idade<18) {
    console.log("Menor de Idade");
} else if(idade>=18 && idade<60) { //condicao int
    console.log("Aduto");
}else{
    console.log("Idoso");
}


//tbuada 5

for(let i=1; 1<=10;i++){
    console.log("5 X "+i+ " = "+(i*5));
}



//1 a 2 

for(let i=1;i<=20;i++){
    if ((i%2)==0) {
        console.log(i + "é par");
    }
}
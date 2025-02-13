var prompt = require("prompt-sync")();

//calculadora simples

//funções

//soma
function soma(a,b){
    return (a+b);
}
//subtação
function subtacao(a,b){
    return (a-b);
}
//multiplicação
function multiplicacao(a,b){
    return (a*b);
}
//divisão
function Divisao(a,b){
    return (a/b);
}

function menu(){
    console.log ("Escolha a Operação Desejada");
    console.log("1 soma");
    console.log("2 subtação");
    console.log("3 multiplicação");
    console.log("4 divisão");

    let Operacao = Number(prompt());
    switch (Operacao) {
        case 1:
            var a = Number(prompt("insforme o 1º nº"));
            var b = Number(prompt("insforme o 2º nº"));
            console.log(soma(a,b));
            break;
        case 2:
            var a = Number(prompt("insforme o 1º nº"));
            var b = Number(prompt("insforme o 2º nº"));
            console.log(sub (a,b));
            break;

        case 3:
            var a = Number(prompt("insforme o 1º nº"));
            var b = Number(prompt("insforme o 2º nº"));
            console.log(muti (a,b));
            break;
       case 4:
            var a = Number(prompt("insforme o 1º nº"));
            var b = Number(prompt("insforme o 2º nº"));
            if (b==0){
            console.log("Não Dividiras por 0!!!") 
            }else{
                Divisao (a,b);}
        default:
            break;
             
    }
}
menu();

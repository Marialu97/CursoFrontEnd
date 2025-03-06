// array e matrizes

//declaração de um arrya
let dados =[]; // uso do colchete permite a declaração de Array

let numeros = [1,2,3,4,5,6,7,8,9,];
let palavras = ["Bola", "Sapato", "Caixa"];
let mista = [1, "texto", true];

console.log(numeros.length); //quantidade de elementos do array

//indices do array

//imprimir o 5º elemento de um array
console.log(numeros[4]); //5

//adicionar elementos em um array

palavras.push("Cachorro"); // no final do array
console.log(palavras);

palavras.unshift("Prédio"); //no comeco do array
console.log(palavras);

//Remover elementos
palavras.pop(); //remove o ultimo elemento
palavras.shift(); //remove o primeiro elemento
console.log(palavras);

//Alterar o Valor de um Elemento
palavras[2]="Sacola";
console.log(palavras);

//percorrer um array (ioop) - for
for(let i = 0; i<numeros.length; i++){
    console.log("numero["+i+"]="+numeros[i])
}

//forEach - repetição em um vetor
palavras.forEach(palavra => {
    console.log(palavra);
});

//Splice
//remove pelo índice 
palavras.splice(1,1);
console.log(palavras);

// manipulação de arrays
let numerosDobre = numeros.map(x => x*10);
console.log(numerosDobre);

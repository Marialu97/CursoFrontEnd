// array e matrizes

//declaração de um arrya
let dados =[]; // uso do colchete permite a declaração de Array

let numeros = [1,2,3,4,5,6,7,8,9,];
let palavras = ["Bola", "Sapato", "Caixa"];

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

//forEach - repetição em um vetor
palavras.forEach(palavra => {
    console.log(palavra);
});

//Splice

palavras.splice(1,1);
console.log(palavras);

// manipulação de arrays
let numerosDobre = numeros.map(x => x*10);
console.log(numerosDobre);

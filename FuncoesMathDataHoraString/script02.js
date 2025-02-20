// funções de String(Texto)

var texto = "Aula de JavaScript";
console.log(texto.length); // contar o nº de caracterias

console.log(texto.toUpperCase()); //tudo MAIÚSCULO

console.log(texto.toLowerCase()); //tudo minúsculo

//manípulação de texto
console.log(texto.substring(0,4)); // Aula
console.log(texto.slice(-10)); //JavaScript 
console.log(texto.replace("JavaScript", "TypeScript"));

//split (usar um caracter em comum para separa em um vetor)

let linguagens = "JavaScript,C++,Python,Java,PHP"
let arrayLinguagens = linguagens.split(",");
console.log(arrayLinguagens);

//trim (tesoura)
let tesoura = " JavaScript";
console.log(tesoura);
console.log(tesoura.trim());
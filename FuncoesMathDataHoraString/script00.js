//Funções Matemáticas

//Sqrt //Pow
// raiz quadrada de 25
console.log(Math.sqrt(25)); //5

//potência
console.log(Math.pow(3,2)); //3² = 9
console.log(Math.pow(4,3)); //4³ = 64
console.log(Math.pow(27,1/3)); // 27^(1/3) = 3

// Arrendondamento 
// Math.round ( arrendondar para o mais proximo)
console.log(Math.round(4.4)); //4
console.log(Math.round(4.7)); //5
//Math.floor (para baixo)
console.log(Math.floor(4.9)); //4
//Math.ceil (para cima)
console.log(Math.ceil(4.1)); //5

//números Aleatórios
console.log(Math.random()); //0 ->1

//1 -> 100 -> numeros com , tambem sai
console.log(Math.random()*100);
//1 -> 100 -> inteiros
console.log(Math.ceil(Math.random()*100));

//0 -> 99
console.log(Math.floor(Math.random()*100));
//1->10000
console.log(Math.ceil(Math.random()*100000));
//1->9999
console.log(Math.ceil(Math.random()*100000));
//0 -> 50
console.log(Math.round(Math.random()*50));
// 50 -> 100
console.log(Math.round(Math.random()*50+50));

//Maximo, Minimo , Absoluto
var numeros = [0,1,2,3,4,5,6,7,8,9]; //array
console.log(Math.max(numeros)); //9 maior nº da sequênsia
console.log(Math.min(numeros)); //0 menor nº da sequênsia
var Absoluto = -10;
console.log(Math.abs(Absoluto)); //10 //módulo
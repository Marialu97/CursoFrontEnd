function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}

// getElementById - seleção do elemento pelo Id
let titulo = document.getElementById("titulo");
//variavel comum
titulo.style.color = "blue"; 
let descricao = document.getElementsByClassName("descricao");
//variel vetor//array
descricao[0].style.fontWeight  = "bold";
descricao[1].style.color  = "green"

//getElementsByTagName
let todosParagrafos  = document.getElementsByTagName("p");
console.log(todosParagrafos.length); 

// querySelector ->Primeiro elemento -> comum
let primeiroParagrafo = document.querySelector(".descricao");
primeiroParagrafo.style.color = "red";

// querySelectorAll -> Todos Elementos -> Vetor
let ps = document.querySelectorAll("p");
ps.forEach(p => p.style.fontSize = "18px");

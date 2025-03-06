 // 1
 
 let titulo = document.querySelector("#titulo");//select by id
 console.log(titulo);

 let paragrafo = document.querySelector(".paragrafo");//select by class
 console.log(paragrafo);

 let button = document.querySelector("button");//select by tag
 console.log(button);

 // 2
 function alterarTexto(){
 titulo.innerText="Novo Titulo";
 paragrafo.innerText="Novo Paragrafo";
 }
 // 3
 function alterarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
 }
 //4 - adicionar class
 function adicionarClasse(){
   titulo.classList.add("descricao");
   let descricao = document.querySelector(".descricao");
   descricao.style.color = ("red");
 }


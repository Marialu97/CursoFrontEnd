
//Exemplo de Script para Manipulação DOM

function clickBtn(){
    //manipulação pelo ID - Variavel Simples
    let titulo = document.getElementById("titulo");
    console.log(titulo);
    titulo.innerText = "Meu Título Modificado";
    let li = document.createElement("li");
    let Texto = "Modíficado Texto do Titulo";
    li.innerHTML = Texto+ '<button onclick="btnConfere(this)">Confere</button>';
    //querySelector -> Variavel Simples
    document.querySelector(".lista").appendChild(li);
    //getElementsByClassName -> vetor .descricao
    let descricao = document.querySelectorAll(".descricao");
    console.log(descricao);
    descricao.forEach(Element => Element.style.color = "red");
    Texto = "Modíficado Cor da Classe descricao para Vermelho";
    li.innerHTML = Texto+ '<button onclick="btnConfere(this)">Confere</button>';
    document.querySelector(".lista").appendChild(li);

}
  
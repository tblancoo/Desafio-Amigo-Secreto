//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('[id=amigo]').value;
    let listaAmigos = document.querySelector('[id=listaAmigos]');

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaDeAmigos.push(nomeAmigo);

    listaAmigos.innerHTML += `<li>${nomeAmigo}</li>`;

    document.querySelector('[id=amigo]').value = '';
}

function sortearAmigo() {
    let sorteio = [...listaDeAmigos];
    let resultado = document.querySelector('[id=resultado]');
    resultado.innerHTML = "";

    let amigoSorteado = sorteio[parseInt(Math.random() * sorteio.length)];
    resultado.innerHTML = `<p>O amigo secreto sorteado é: ${amigoSorteado}</p>`;
}

function limparCampo() {
    let campo = document.querySelector('[id=amigo]');
    campo.value = '';
}


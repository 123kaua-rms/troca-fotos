"use strict";

const botaoTrocarImagem = document.querySelector('#trocar-imagem button');
const imagens = [
    'url("https://conteudo.imguol.com.br/c/esporte/5a/2023/09/24/onibus-com-a-delegacao-do-sao-paulo-chega-ao-morumbi-para-final-da-copa-do-brasil-1695577023490_v2_900x506.jpg")',
    'url("https://images2.alphacoders.com/117/1174673.png")',
    'url("https://img.nsctotal.com.br/wp-content/uploads/2025/02/Sao-Paulo-joga-nesta-quinta-feira.jpg")',
    'url("https://images6.alphacoders.com/116/1166823.jpg")'
];

let indiceAtual = 0;

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.documentElement.style.setProperty('--imagem-fundo', imagens[indiceAtual]);
}

botaoTrocarImagem.addEventListener('click', trocarImagem);
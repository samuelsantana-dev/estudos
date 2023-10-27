'use strict';

// Definição das imagens com seus IDs e URLs
const images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./img/ippo.png' },
]

// Seleciona o elemento que conterá os itens de imagem
const containerItems = document.querySelector('#container-items');

// Função para carregar as imagens no contêiner especificado
const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `;
    });
}

// Carrega as imagens no contêiner selecionado
loadImages(images, containerItems);

// Seleciona todos os elementos com a classe 'item'
let items = document.querySelectorAll('.item');

// Função para mover o primeiro item para o final da lista
const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

// Função para mover o último item para a posição inicial da lista
const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

// Adiciona os ouvintes de evento para os botões de navegação
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

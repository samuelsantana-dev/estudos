// Seleciona o elemento que contém o contêiner pai
let containerPai = document.querySelector(".containerPai");

// Seleciona o elemento que contém as imagens no carrossel
let divImagens = document.querySelector(".container-items");

// Array de objetos com informações sobre as imagens
const imagens = [
    {'id': '1', 'url': '../img/chrono.jpg'},
    {'id': '2', 'url': '../img/inuyasha.jpg'},
    {'id': '3', 'url': '../img/ippo.png'},
    {'id': '4', 'url': '../img/tenchi.jpg'},
    {'id': '5',  'url': '../img/tenjhotenge.jpg'}
];

// Percorre o array de imagens e cria elementos HTML para cada imagem
imagens.map((img) => {
    divImagens.innerHTML += `
        <div class="itens"> 
             <img src=${img.url} alt="Fotos do carrossel">
        </div>
    `;
});

// Seleciona todos os elementos com a classe 'itens'
let items = document.querySelectorAll('.itens');

// Função para avançar as imagens no carrossel
const AvançarImagens = () => {
    // Captura o último item da lista
    const lastItem = items[items.length - 1];
    
    // Move o primeiro item para a posição após o último item
    divImagens.insertBefore(items[0], lastItem);
    
    // Atualiza a lista de itens após a reordenação
    items = document.querySelectorAll('.itens');
};

// Função para voltar as imagens no carrossel
const VoltarImagens = () => {
    // Captura o último item da lista
    const lastItem = items[items.length - 1];
    
    // Move o último item para a posição antes do primeiro item
    divImagens.insertBefore(lastItem, items[0]);
    
    // Atualiza a lista de itens após a reordenação
    items = document.querySelectorAll('.itens');
};

// Adiciona um ouvinte de evento ao botão de avançar
document.getElementById("next").addEventListener("click", AvançarImagens);

// Adiciona um ouvinte de evento ao botão de voltar
document.getElementById("voltar").addEventListener("click", VoltarImagens);

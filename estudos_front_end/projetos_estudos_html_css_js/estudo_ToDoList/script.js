let toDoList = [];

const form = document.querySelector('#submit');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let inputValue = document.querySelector('#input').value;

    if (inputValue !== '') {
        toDoList.push({
            tamanho: inputValue.length,
            valor: inputValue
        });
    } else {
        alert('Digite algo antes de adicionar!');
    }

    document.querySelector('#input').value = '';
    document.querySelector('#input').focus();
    adicionar();
});

function adicionar() {
    let lista = document.querySelector('#lista');
    lista.innerHTML = '';

    toDoList.forEach(function(element, index) {
        lista.innerHTML += `
        <div class="novaDiv"> 
            <li class="li">${element.valor}</li>  
            <button class="editar" data-index="${index}">✏</button> 
            <button class="remover" data-index="${index}">❌</button> 
        </div>`;
    });

    let botaoR = document.querySelectorAll('.remover');
    botaoR.forEach(function(element) {
        remover(element);
    });

    let botaoE = document.querySelectorAll('.editar');
    botaoE.forEach(function(element) {
        editar(element);
    });
}

function remover(element) {
    element.addEventListener('click', function() {
        let index = element.getAttribute('data-index');
        toDoList.splice(index, 1);
        adicionar();
    });
}

function editar(element) {
    element.addEventListener('click', function() {
        let index = element.getAttribute('data-index');
        let novaDiv = document.querySelector('.novaDiv');

        novaDiv.innerHTML = `<input type="text" placeholder="Atualize" class="inputEditar" > <button class="enviarEditado" data-index="${index}">Enviar</button>`;
        let botaoEnviar = novaDiv.querySelector('.enviarEditado');

        botaoEnviar.addEventListener('click', function() {
            let inputEditar = novaDiv.querySelector('.inputEditar');
            let novoValor = inputEditar.value;
            toDoList[index].valor = novoValor;
            adicionar();
        });
    });
}

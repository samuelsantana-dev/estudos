let toDoList = []

get("#form").addEventListener("submit", function(e){
	e.preventDefault()
	const inputValue = get("#input").value
	
	if(inputValue.length){
		
		toDoList.push({
			id: toDoList.length,
			name: inputValue
		})
		
		get("#input").value = ""
		updateToDoList()
	}
})

function get(element){
	return document.querySelector(element)
}


function cleanToDoList(){
	document.querySelector("#toDoList").innerHTML = ''
}


function removeToDo(element){

	element.addEventListener("click", function(){
		const dataId = element.parentElement.getAttribute("data-id") 
		toDoList = toDoList.filter(function(item){
			return item.id != dataId
		})

		updateToDoList()			
	})
}


function updateToDoList(){

	cleanToDoList()

	toDoList.forEach(function(item){
		document.querySelector("#toDoList").innerHTML += 
		`
			<li class="flex justify-between w-full border items-center border-radius p-1 mb-1">
				${item.name}
				<div data-id="${item.id}">
					<span class="removeToDo cuor-pointer">❌</span>
				</button>
			</li>
		`
	})

	document.querySeelectorAll(".removeToDo").forEach(function(element){
		removeToDo(element)
	})
}

// Pode-se guardar dentro da funçao simplesmente nao precisa estar em uma variavel dependendo da situaçao,usando o document

//Bisu criar funçoes diferentes e chama-las em outras funçoes

//Aqui remove 
	// Aqui localiza o removeToDo do span da class
	// Vai executar a funçao removetodo para cada elemento do span

	// usar o span pra agrupamento de linhas e textos	
//Aqui adiciona em lista (codigo abaixo), aqui é so como vai aparecer no html,por isso sempre chama essa funçao	
// Aqui mostra o caminho de onde ele vai ficar guardado
		/*Apagar*/
//Aqui é onde limpa,onde apaga e onde adiciona tambem 
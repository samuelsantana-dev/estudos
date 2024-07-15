let toDoList = []

function get(element){
	return document.querySelector(element)
}

function getAll(element){
	return document.querySelectorAll(element)
}

function cleanToDoList(){
	get("#toDoList").innerHTML = ''
}''

/**
 *	addTodo é para subir pro array
 * 	isEditing é para
 */

function addTodo(){
	const inputValue = get("#input").value
	
	if(inputValue.length){
		toDoList.push({
			id: toDoList.length,
			name: inputValue,
			isEditing: false
		})
		
		get("#input").value = ""
		updateToDoList()
	}
}

// funçao de remover
function removeToDo(element){
	element.addEventListener("click", function(){
		const dataId = element.parentElement.parentElement.getAttribute("data-id")
		toDoList = toDoList.filter(function(item){
			return item.id != dataId
		})

		updateToDoList()			
	})
}

// Aqui esta a funçao de editar 
//toggleEditToDo == alternarEditToDo (traduçao)

function toggleEditToDo(element){
	element.addEventListener("click", function(){
		const dataId = element.parentElement.parentElement.getAttribute("data-id")
		toDoList = toDoList.map(function(item){
			return {
				...item,
				isEditing: item.id == dataId
			}
		})
				
		updateToDoList()			
	})
}

//Faz com que seja para todos os elementos que vao ser criados automaticamente
function hideEditTodo(element){
	element.addEventListener("click", function(){
		const dataId = element.parentElement.parentElement.getAttribute("data-id")
		toDoList = toDoList.map(function(item){
			return {
				...item,
				isEditing: item.id == dataId ? false : item.isEditing
			}
		})
				
		updateToDoList()			
	})
}

function editToDo(element){
	element.addEventListener("submit", (e) => {
		e.preventDefault()
		
		const dataId = element.parentElement.getAttribute("data-id")
		const inputValue = element.children[0].value
		
		toDoList = toDoList.map(function(item){
			return {
				...item,
				name: dataId == item.id ? inputValue : item.name,
				isEditing: false
			}
		})

		updateToDoList()
	})
}

/**
 *  O data-id está aqui dentro do li ou seja se for pra adicionar seria no li
 */
function updateToDoList(){
	// essa funçao mostra no html
	cleanToDoList()
	toDoList.forEach(function(item){
		get("#toDoList").innerHTML += `
			<li 
				data-id="${item.id}"
				class="flex justify-between w-full border items-center border-radius p-1 mb-1"
			>
			${item.isEditing ? 
			`
				<form class="editForm">
					<input placeholder="New content" type="text" />
					<button type="submit" class="confirmEdit cursor-pointer">✅</button>
					<button class="cancelEdit cursor-pointer">❌</button>
				</form>
				` :
				`${item.name}
				<div>
					<span class="toggleEditToDo cursor-pointer">✏</span>
					<span class="removeToDo cursor-pointer">❌</span>
				</div>`
			}
			</li>
		`
	})
	

/**
 * Aqui sao os botoes todos sendo craidos com element
 * o getAll é so para localizar exemplo um querySelector
 */
	getAll(".removeToDo").forEach(function(element){
		removeToDo(element)
	})
	
	getAll(".toggleEditToDo").forEach(function(element){
		toggleEditToDo(element)
	})
	
	getAll(".editForm").forEach(function(element){
		editToDo(element)
	})
	
	getAll(".cancelEdit").forEach(function(element){
		hideEditTodo(element)
	})
}

get("#form").addEventListener("submit", function(e){
	e.preventDefault()
	addTodo()
})


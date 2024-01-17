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



getAll(".toggleEditToDo").forEach(function(element){
    toggleEditToDo(element)
})

getAll(".editForm").forEach(function(element){
    editToDo(element)
})

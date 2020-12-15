const input = document.querySelector('.item-input');
const todoId = document.querySelector('.id');
const enter = document.querySelector('.enter');
const list = document.querySelector('.item-list');
const error = document.querySelector('.error');

let id = 1;

document.addEventListener('keypress', function (e) {
	if (e.key === "Enter") {
		handleInput();
	}
})

enter.addEventListener('click', handleInput);



function handleInput() {
	if (input.value == "") {
		error.innerHTML = '<span class="text-danger">Item cannot be empty.</span>';
	} else {
		if (todoId.value == "") {
			// New Todo
			error.innerHTML = '';
			let item = input.value

			let todo = `<div id="${id}" class="todo d-flex justify-content-between border p-2 mb-2 todo">
							<div class="todo-text">${item}</div>
							<div>
								<span onclick="check(${id})" class="text-success"  role="button"><i class="fas fa-check-circle"></i></span>
								<span onclick="edit(${id})" class="text-info mx-3"  role="button"><i class="fas fa-edit"></i></span>
								<span onclick="trash(${id})" class="text-danger" role="button"><i class="fas fa-trash"></i></span>
							</div>
						</div>`;

			list.insertAdjacentHTML('beforeend', todo);
			// clear the input 
			input.value = '';
			id++;
		} else {
			console.log('update todo');
			let todo = document.getElementById(todoId.value).querySelector('.todo-text').innerText = input.value;
			todoId.value="";
			input.value="";
		}


	}
}

function check(id) {
	document.getElementById(id).classList.toggle('checked');
}

function trash(id) {
	if(todoId.value == id){
		return;
	}
	
	document.getElementById(id).remove();
}

function edit(id) {
	let todoText = document.getElementById(id).querySelector('.todo-text');
	input.value = todoText.innerText;
	todoId.value = id;
	input.focus();
}
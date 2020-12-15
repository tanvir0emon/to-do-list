const input = document.querySelector('.item-input');
const enter = document.querySelector('.enter');
const list = document.querySelector('.item-list');
const error = document.querySelector('.error');

document.addEventListener('keypress', function(e){
	if(e.key === "Enter"){
		handleInput();
	}
})

enter.addEventListener('click', handleInput);



function handleInput () {
	if (input.value == "") {
		error.innerHTML = '<span class="text-danger">Item cannot be empty.</span>';
	} else {
		error.innerHTML = '';
		let item = input.value

		let todo = `<div class="d-flex justify-content-between border p-2 mb-2">
						<div class="todo">${item}</div>
						<div>
							<span class="check text-success"  role="button"><i class="fas fa-check-circle"></i></span>
							<span class="check text-info mx-3"  role="button"><i class="fas fa-edit"></i></span>
							<span class="check text-danger"  role="button"><i class="fas fa-trash"></i></span>
						</div>
					</div>`;

		list.insertAdjacentHTML('beforeend', todo);

		// clear the input 
		input.value = '';

		// Check the to do
		document.querySelectorAll('.check').forEach(function(checkBtn){
			checkBtn.addEventListener('click', function(){
				this.parentElement.previousElementSibling.classList.toggle('checked');
			})
		})

		// Delete Cheque 

		document.querySelectorAll('.trash').forEach(function(trashBtn){
			trashBtn.addEventListener('click',function(){
			
			})

		})





	}
}

function removeToDo(element){
	element.parentNode.parentNode.removeChild(element.parentNode);
	
	LIST[element.id].trash = true;
}
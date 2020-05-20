//Selectors
const todoInput = document.querySelector('.todoInput');
const button = document.querySelector('.button');
const listContainer = document.querySelector('.listContainer');

//listener 
button.addEventListener('click', addTodo);
todoInput.addEventListener("keydown", keycode);
listContainer.addEventListener('click', delCheck);

//on click enter also, function addTodo has to run
function keycode(e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    addTodo(e);
}
}

const Li = [];

//function
function addTodo(event) {
    //prevent from submitting
     event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="far fa-circle"></i>';
    completedButton.classList.add("completedBtn");
    todoDiv.appendChild(completedButton);


    //storing value of todo in text
    const input = todoInput.value;
    //create Li and h3 inside it
    const newTodo = document.createElement('li');
    newTodo.classList.add('todoItem');

    const insideTxt = document.createElement('h4');
    insideTxt.classList.add('insideTxt');
    insideTxt.innerHTML = input;                     //adding txt to h4

    newTodo.appendChild(insideTxt);
    todoDiv.appendChild(newTodo);
    

     //trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
     trashButton.classList.add("trashBtn");
     todoDiv.appendChild(trashButton);
 
     //append to ul in html
     listContainer.appendChild(todoDiv);
     //emptying the input box
     todoInput.value = "";
}

function delCheck(e) {
    const completedBtn = document.querySelector('.completedBtn');
    const item = e.target;

    //delete todo
    if (item.classList[0] === "trashBtn") {
        const todo1 = item.parentElement;
        todo1.remove();
    }

    //Check
    if (item.classList[0] === "completedBtn") {
        const todo1 = item.parentElement;
        todo1.classList.toggle("completed")
        //completedBtn.innerHTML = '<i class="far fa-check-circle"></i>';
    }
}

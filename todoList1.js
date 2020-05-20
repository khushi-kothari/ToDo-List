//Selectors
const todoInput = document.querySelector('.todoInput');
const button = document.querySelector('.button');
const listContainer = document.querySelector('.listContainer');

//easy excess
const Check = "fa-check-circle"
const Uncheck = "fa-circle"
const LineThrough = "lineThrough"

//listener 
button.addEventListener('click', addTodo);
todoInput.addEventListener("keydown", keycode);

//on click enter also, function addTodo has to run
function keycode(e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    addTodo(e);
}
}

function addTodo(toDo, id, done, trash) {

    if(trash) { return; }

    const Done = done ? Check : Uncheck;
    const Line = done ? LineThrough : "";

    const text = `<li class="item">
                <i class="far ${Done} complete" job="complete" id="${id}"> </i>
                <p class="text ${Line}"> ${toDo} </p>
                <i class="fas ${Done} delete" job="delete" id="${id}"> </i>
                </li>`

    const position = "beforeend";
    list.insertAdjacentHTML(postition, text);
}

 /* const completedBtn = document.querySelector('.completedBtn');
     const trashBtn = document.querySelector('.trashBtn');
     completedBtn.addEventListener('click', cmp);

     var details = {
         "id" : 0,
         "text": input,
         completedBtn : false,
         "trashBtn" : false
     };
     Li.push(details);
     console.log(Li);

     

    //function for complete button
     function cmp( ) {
         Li[0].completedBtn = true;
        //removing the previously added html
        //adding tick mark button
        $('#circle').empty();
        completedButton.innerHTML = '<i class="far fa-check-circle"></i>';
        completedBtn.classList.remove(".completedBtn");
    
        //removing Li innerHtml
        //adding strike text
        $('#insideTxt').empty();
        insideTxt.innerHTML = Li[0].text;
        insideTxt.classList.add("strike");
        console.log(Li);
        }

       function uncmp() {
            Li[0].completedBtn = false;

            $('#circle').empty();
            completedButton.innerHTML = '<i class="far fa-circle circle"></i>';
            completedBtn.classList.add("completedBtn");

            $('#insideTxt').empty();
            insideTxt.innerHTML = Li[0].text;
            insideTxt.classList.add("normal");
        }

     //on 2nd 3rd click 
        if ($("button").hasClass("completedBtn") == true) {
            completedBtn.addEventListener('click', cmp);
        }
        else {
            completedBtn.addEventListener('click', uncmp);
        }*/
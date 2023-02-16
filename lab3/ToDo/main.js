let addToDoBtn = document.getElementById('addToDo');
let toDoList = document.getElementById("toDoList");
let inputText = document.getElementById("myInput");

addToDoBtn.addEventListener('click', function () {
    var par = document.createElement('p');
    par.classList.add('paragraph-styling');
    par.innerText = inputText.value;
    toDoList.appendChild(par);
    inputText.value = "";
    par.addEventListener('click', function () {
        par.style.textDecoration = "line-through";
    })
    par.addEventListener('dblclick', function () {
        toDoList.removeChild(par);
    })
})
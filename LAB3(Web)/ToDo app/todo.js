let newTask = document.querySelector('.new_task')
let allTasks = document.querySelector('.all_tasks');
let addButton = document.querySelector('.add_button');
let oneTask = document.querySelectorAll('.one_task');
let deleteImage = document.querySelectorAll('.delete_img');

function addTask(){
    if(newTask.value != null){
        let div = document.createElement("div");
        div.className="one_task";
        let label = document.createElement("label");
	    label.className = "one_new_task";
        let check = document.createElement("input");
        check.type = "checkbox";
        check.className = "checkbox";
        let span = document.createElement("span");
	    span.innerHTML = newTask.value;
        let image = document.createElement("img");
        image.className = "delete_img";
        image.src = "delete.png";
        image.addEventListener('click', remove);
        allTasks.appendChild(div);
        div.appendChild(label);
        label.appendChild(check);
        label.appendChild(span);
        div.appendChild(image);
        newTask.value = null;
    }
}
function remove(){
    this.parentNode.remove();
}
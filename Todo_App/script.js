const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

function addTask() {
    if (input_box.value === '') {
        alert("Please insert some data")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);

        // create cross and attach to every child
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = "";
    // call the saveTask function after we creat the todo
    saveTask();

}
// toggle checked
list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove("checked");
        saveTask();

    }
})

// store the todo in browser storage 
function saveTask() {
    localStorage.setItem("data", list_container.innerHTML);
}

// get the item from the localstorage
function showTask() {
    list_container.innerHTML = localStorage.getItem("data")
}

// call the showTask globally to display the list of todo
showTask();
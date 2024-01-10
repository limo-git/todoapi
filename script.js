var myList = []

function addItem() {
    var input= document.getElementById("createId" ).value;

    if (input.trim() !== "") {
        myList.push(input);

        
        updateList();
    }

    
    document.getElementById("createId").value = "";
}

function updateList() {
    
    var outputList = document.getElementById("todos");

    todos.innerHTML = "";

    myList.forEach(function(item) {
        var listItem = document.createElement("li");
        listItem.textContent = item;
        todos.appendChild(listItem);
    });
}

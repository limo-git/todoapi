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

fetch('DATABASE_URL', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    todo: 'hi',
    done: true,
  }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

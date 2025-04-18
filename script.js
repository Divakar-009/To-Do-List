function update() {
    let tableBody = document.getElementById("tablebody");
    let itemJsonArray = [];

    if (localStorage.getItem('itemJson') != null) {
        itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
    }

    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-primary" onclick="deleteItem(${index})">Delete</button></td>
            </tr>`;
    });

    tableBody.innerHTML = str;
}

// Function to add a new item
let add = document.getElementById("add");
add.addEventListener("click", () => {
    console.log("UPDATING LIST......");

    let tit = document.getElementById("title").value;
    let disc = document.getElementById("description").value;

    let itemJsonArray = [];

    if (localStorage.getItem('itemJson') != null) {
        itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
    }

    itemJsonArray.push([tit, disc]);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));

    update(); // Refresh the table after adding
});

// Function to delete an item
function deleteItem(index) {
    let itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
    itemJsonArray.splice(index, 1); // Remove the item
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    update(); // Refresh the table
}

// Initial load
update();
let clearButton=document.getElementById("clear");
 clearButton.addEventListener("click",()=>{
    clearFunc();
})
const clearFunc = () => {
    // Show confirmation dialog
    if (confirm("Do you really want to clear local storage?")) {
        console.log('Clearing the list...');
        localStorage.clear(); // Clear local storage
        update(); // Call the update function
    } else {
        console.log('Clear action canceled.');
    }
};

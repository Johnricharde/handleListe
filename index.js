// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');
let listItems = [];
var inputValue = "";

// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
    let html = `<h1>Handleliste</h1><br>
        <input oninput="inputValue = this.value" type="text">
        <button onclick="addItem()">Legg til </button>`;


    html += /*HTML*/ `
    <div>
        <div>
            <ul  id="list">
                ${list || ""}
            </ul>
        </div>   
    </div>
`
for (let i = 0; i < listItems.length; i++) {
    html += `
        <li>${listItems[i]}</li>
        <button onClick="removeItem(${i})">Fjern</button>
        <button onClick="editItem(${i})">Rediger</button>
    `
}

app.innerHTML = html
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////
var list = document.getElementById('list').innerHTML;
let editIndex = -1;


// Add to list ....................................................... Add to list
function addItem() {
    listItems.push(inputValue);
    inputValue = ""

    updateView()
}
// Remove from list ............................................. Remove from list
function removeItem(index) {
    listItems.splice(index, 1);

    updateView()
}
// Edit in list ..................................................... Edit in list
function editItem(index) {
    listItems[index] = inputValue;

    updateView()
    }
// Save edit in list ........................................... Save edit in list
function saveItem(index) {
    listItems[index] = inputValue;

    updateView()
}
// ...............................................................................



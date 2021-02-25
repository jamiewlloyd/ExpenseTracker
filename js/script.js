// Grab input values
let expenseType = document.getElementById("type");
let expenseDate = document.getElementById("date");
let expenseAmmount = document.getElementById("ammount");
let addButton = document.querySelector('.submit');
// Grab the table
let table = document.getElementById("tableBody");
// Grab subtotals and total


addButton.addEventListener('click', addExpense);

function addExpense() {

    if (expenseType.value == "" || expenseDate.value == "" || expenseAmmount.value == "") {
        alert("Please enter all information");
    } else {
        // Create row and cells
        let row = table.insertRow(-1);
        let date = row.insertCell(0);
        let type = row.insertCell(1);
        let ammount = row.insertCell(2);
        let remove = row.insertCell(3);

        // Format the date
        let theDate = new Date(expenseDate.value);
        let formatted_date = theDate.getDate() + `/` + (theDate.getMonth() + 1) + `/` + theDate.getFullYear();

        // Insert values
        date.innerHTML = formatted_date;
        type.innerHTML = expenseType.value;
        ammount.innerHTML = `<span>£</span><span class="subTotal">${expenseAmmount.value}</span>`;
        remove.innerHTML = `<span class="delete">X</span>`;

        // Reset values in input
        expenseType.value = "";
        expenseDate.value = "";
        expenseAmmount.value = "";

        // Run Calculation - for loop
    }
}

// Create calculation function
// Create delete function
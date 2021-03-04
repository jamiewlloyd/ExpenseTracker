// Grab input values
let expenseType = document.getElementById("type");
let expenseDate = document.getElementById("date");
let expenseAmmount = document.getElementById("ammount");
let addButton = document.querySelector('.submit');

// Grab the table
let table = document.getElementById("tableBody");

// Grab message
let message = document.querySelector('.notify');

// Check for Enter keypress 
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addExpense();
    }
});

// Add click event to submit button
addButton.addEventListener('click', addExpense);

function addExpense() {

    if (expenseType.value == "" || expenseDate.value == "" || expenseAmmount.value == "") {
        // Display error notification 
        message.innerHTML = `<p>Please Complete All Fields</p>`
        displayNotification('confirm', 'error');
        hideNotification();

    } else {
        // Display added notification 
        message.innerHTML = `<p>Expense Added</p>`
        displayNotification('error', 'confirm');
        hideNotification();
        // resetClass('confirm');

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
        let expenseAmmountValue = parseFloat(expenseAmmount.value)
        ammount.innerHTML = `<span>£</span><span>${expenseAmmountValue.toFixed(2)}</span>`;
        remove.innerHTML = `<span class="delete">X</span>`;

        // Reset values in input
        expenseType.value = "";
        expenseDate.value = "";
        expenseAmmount.value = "";

        expenseType.focus();

        calculate();
        setDelete();
    }
}

// Calculation function
function calculate() {
    let total = document.getElementById("totalSum")
    let table = document.getElementById("tableBody");
    let sumVal = 0;

    for (let i = 0; i < table.rows.length; i++) {
        sumVal = sumVal + parseFloat(table.rows[i].cells[2].lastChild.innerHTML);
    }

    total.innerHTML = `<span>£</span>${sumVal.toFixed(2)}`
}

// Delete button functionality
function setDelete() {
    document.querySelectorAll('.delete').forEach(item => {
        item.addEventListener('click', event => {
            event.target.parentElement.parentElement.remove();
            calculate();

            message.innerHTML = `<p>Expense Deleted</p>`
            displayNotification('error', 'confirm');
            hideNotification();
            // resetClass('confirm');
        })
    })


}

function hideNotification() {
    setTimeout(function () {
        message.classList.add('hidden');
    }, 2000);
}

function displayNotification(classToRemove, classToAdd) {
    message.classList.remove(classToRemove);
    message.classList.add(classToAdd);
    message.classList.remove('hidden');
}
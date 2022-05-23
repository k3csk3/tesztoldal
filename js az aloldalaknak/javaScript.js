function calcAmount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value) * price;
    alert("Fizetendő: " + amount+"ft");
}

function calcAmountTwo() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-inputTwo']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountInput.value) * price;
    
    showAmount.innerHTML = amount
}

function calcAmountThree() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-inputThree']");
    let showAmount = document.querySelector("span.show-amountThree");
    let amountNumber = parseInt(amountInput.value)

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhatunk!")
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnunk!")
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount
    }
}

function calcAmountFour() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-inputFour']");
    let showAmount = document.querySelector("span.show-amountFour");
    let amountNumber = parseInt(amountInput.value)
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhatunk!")
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnunk!")
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount
    }
}
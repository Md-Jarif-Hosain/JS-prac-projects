
// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    const transactionArea = document.getElementById('transaction-are');
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block';
});

// Deposit button event handler
const depositBtn = document.getElementById('add-deposit');
depositBtn.addEventListener('click', function () {

    const depositNumber = getInputNumber('deposit-amount');

    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);


    document.getElementById('deposit-amount').value = "";
});

// withdraw button event handler
const withdrawBtn = document.getElementById('add-withdraw'); withdrawBtn.addEventListener('click', function () {

    const withdrawNumber = getInputNumber('withdraw-amount');


    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);
    document.getElementById('withdraw-amount').value = "";
});


//******************************************** */ FUNCTIONS
function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
};
function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNUmber = parseFloat(current);
    const totalAmount = addedNumber + currentNUmber;
    document.getElementById(id).innerText = totalAmount;
};
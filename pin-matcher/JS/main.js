// Pin generator area Functions 
const generateBtn = document.getElementById('pin-generate-btn');
generateBtn.addEventListener('click', generatePin);

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // got 3 digit and calling again, pin
        return getPin();
    };
};
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-generator-screen').value = pin;
};

// Input field Functions
var outputScreen = document.getElementById('output-screen');

function display(num) {
    outputScreen.value += num;
};
const clearBtn = document.getElementById('clear-btn')
    clearBtn.addEventListener('click', clear);
function clear() {
    outputScreen.value = "";
};

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
};

// Submit btn event handler 
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', pinMatcher);

function pinMatcher() {
    let pin = document.getElementById('pin-generator-screen');
    let pinNumber = pin.value;
    let typed = document.getElementById('output-screen');
    let typedNumber = typed.value;
    const match = document.getElementById('match');
    const unMatch = document.getElementById('unMatch');

    if (pinNumber == "") {
        unMatch.style.display = "none";
        match.style.display = "none";
        inputsClear()
        alert("Please generate a pin number");
    }
    if (pinNumber == typedNumber) {
        match.style.display = "block";
        unMatch.style.display = "none";
        inputsClear()
    }

    else {
        unMatch.style.display = "block";
        match.style.display = "none";
        inputsClear()
        actionLeft()
        alert("Pin didn't match, please try again.");
    }
};
function inputsClear() {
    const pin = document.getElementById('pin-generator-screen');
    const typed = document.getElementById('output-screen');
    pin.value = "";
    typed.value = "";

};
function actionLeft() {
    let notice = document.getElementById('left');
    let convert = parseInt(notice.innerText);
    let cal = convert - 1;
    notice.innerText = cal + " ";

    if (notice.innerText <= 0) {
        notice.innerText = 0 + " ";
    }
};
var outputScreen = document.getElementById('output-screen');

function display(num) {
    outputScreen.value += num;
};
function calculate() {
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
};

(function clear() {
    outputScreen.value = "";
    const clearBtn = document.getElementById('clear-btn')
    clearBtn.addEventListener('click', clear);
})();

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
};

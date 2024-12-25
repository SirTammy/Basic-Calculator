const display = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const allSymbols = ['%', '/', 'x', '-', '+', 'C', '='];
let firstVal = '';
let secondVal = '';
let symbol = '';
let result = '';
let calclDone = false;

const calculate = () => {
    firstVal = parseFloat(firstVal);
    secondVal = parseFloat(secondVal);

    if (symbol == '+') result = firstVal + secondVal;
    if (symbol == '-') result = firstVal - secondVal;
    if (symbol == '/') result = secondVal === 0 ? 'Error' : firstVal / secondVal;
    if (symbol == '%') result = firstVal % secondVal;
    if (symbol == 'x') result = firstVal * secondVal;

    display.innerText = result === 'Error' ? result : result.toString();
    firstVal = result === 'Error' ? '' : result.toString();
    secondVal = '';
};

const clear = () => {
    firstVal = '';
    secondVal = '';
    symbol = '';
    display.innerText = '';
};

for (let button of buttons) {
    button.addEventListener('click', function () {
        const btnValue = button.innerText;
        const btnIsSymbol = allSymbols.includes(btnValue);

        if (btnValue === 'C') {
            clear();
            calclDone = false;
            return;
        }

        if (btnValue === 'DEL') {
            handleDelete();
            return;
        }

        if (btnIsSymbol) {
            handleSymbol(btnValue);
        } else if (btnValue === '=') {
            calculate();
            calclDone = true;
        } else {
            handleNumber(btnValue);
        }

        if (btnValue !== '=' && btnValue !== 'C') {
            display.innerText = firstVal + (symbol || '') + secondVal;
        }
    });
}

function handleSymbol(symbolVal) {
    if (calclDone) {
        secondVal = '';
        calclDone = false;
    } else if (secondVal) {
        calculate();
    }
    symbol = symbolVal;
}

function handleNumber(num) {
    if (num === '.' && (symbol ? secondVal.includes('.') : firstVal.includes('.'))) {
        return;
    }
    if (calclDone) {
        firstVal = num;
        secondVal = '';
        symbol = '';
        display.innerText = num;
        calclDone = false;
    } else if (!symbol) {
        firstVal += num;
    } else {
        secondVal += num;
    }
}

function handleDelete() {
    if (!symbol) {
        firstVal = firstVal.slice(0, -1);
    } else if (secondVal) {
        secondVal = secondVal.slice(0, -1);
    } else {
        symbol = '';
    }
    display.innerText = firstVal + (symbol || '') + secondVal;
}

var arrayOfElements = []; // [1, "+", 1]
var enteredNumber = ""; // 111
var input = document.querySelector("input");
var result = false;
var firstNull = false;

function handleNumberClick(number) {
    enteredNumber = enteredNumber + number;
    console.log("result", result);
    if (result) {
        input.value = "";
        input.value += number;
        result = false;
        arrayOfElements = [];
    } else if (number == 0 && input.value == "0"){
        input.value = "";
    } else {
        input.value += number;
    }
}

function handleSignClick(sign) {
    if(enteredNumber) {
        arrayOfElements.push(+enteredNumber);
    }
    if (typeof arrayOfElements[arrayOfElements.length-1] == "number") {
        arrayOfElements.push(sign);
        input.value += sign;
    } else if (arrayOfElements[arrayOfElements.length-1] !== sign) {
        arrayOfElements[arrayOfElements.length-1] = sign;
        input.value += sign;
    }
    if (result) {
        result = false;
    }
    enteredNumber = "";
}

function calculate() {
    input.value = "";
    arrayOfElements.push(+enteredNumber);
    var res = 0;
    var madeFirstOperation = false;
    for(var i = 0; i < arrayOfElements.length; i++) {
        if(arrayOfElements[i] == "+") {
            if (madeFirstOperation) {
                res += arrayOfElements[i+1];
            } else {
                res += (arrayOfElements[i-1] + arrayOfElements[i+1]);
                madeFirstOperation = true;
            }
        }
        if(arrayOfElements[i] == "-") {
            if (madeFirstOperation) {
                res -= arrayOfElements[i+1];
            } else {
                res += (arrayOfElements[i-1] - arrayOfElements[i+1]);
                madeFirstOperation = true;
            }
        }
        if(arrayOfElements[i] == "*") {
            if (madeFirstOperation) {
                res *= arrayOfElements[i+1];
            } else {
                res += (arrayOfElements[i-1] * arrayOfElements[i+1]);
                madeFirstOperation = true;
            }
        }
        if(arrayOfElements[i] == "/") {
            if (madeFirstOperation) {
                res /= arrayOfElements[i+1];
            } else {
                res += (arrayOfElements[i-1] / arrayOfElements[i+1]);
                madeFirstOperation = true;
            }
        }
    }
    input.value = res;
    result = true;
    console.log("res", res);
    console.log("arrayOfElements", arrayOfElements);
    arrayOfElements = [res];
    enteredNumber = "";
}

function handleClearClick() {
    input.value = "";
    arrayOfElements = [];
}

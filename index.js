
var arrayOfElements = []; // [1, "+", 1]
var enteredNumber = ""; // 111
var input = document.querySelector("input");

function clickOnButton(number) {
    enteredNumber = enteredNumber + number;
    input.value += number;
}

function clickOnSign(sign) {
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
    console.log("res", res);
    console.log("arrayOfElements", arrayOfElements);
    arrayOfElements = [res];
    enteredNumber = "";

}

function clearCalculation() {
    input.value = "";
    arrayOfElements = [];
}

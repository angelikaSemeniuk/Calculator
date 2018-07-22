
var arrayOfElements = []; // [1, "+", 1]
var enteredNumber = ""; // 111

function clickOnButton(number) {
    enteredNumber = enteredNumber + number;
    console.log("enteredNumber", enteredNumber);

}

function clickOnSign(sign) {
    if(enteredNumber) {
        arrayOfElements.push(+enteredNumber);
    }
    if (typeof arrayOfElements[arrayOfElements.length-1] == "number") {
        arrayOfElements.push(sign);
    } else if (arrayOfElements[arrayOfElements.length-1] !== sign) {
        arrayOfElements[arrayOfElements.length-1] = sign;
    }

    enteredNumber = "";
}

function calculate() {
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
    console.log("res", res);
    console.log("arrayOfElements", arrayOfElements);
    arrayOfElements = [res];
    enteredNumber = "";

}

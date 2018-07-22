
var arrayOfElements = []; // [1, "+", 1]
var enteredNumber = ""; // 111

function clickOnButton(number) {
    //arrayOfElements.push(number);
    console.log(arrayOfElements);
    enteredNumber = enteredNumber + number;
}

function clickOnSign(sign) {
    arrayOfElements.push(+enteredNumber);
    arrayOfElements.push(sign);
    console.log(arrayOfElements);
    enteredNumber = "";
}

function calculate() {
    arrayOfElements.push(+enteredNumber);
    console.log(arrayOfElements);
    var res = 0;
    for(var i = 0; i< arrayOfElements.length; i++) {
        if(arrayOfElements[i] == "+") {
            res = arrayOfElements[i-1] + arrayOfElements[i+1];
        }
    }
    console.log(res);
}

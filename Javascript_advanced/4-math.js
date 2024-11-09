function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

function addBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber + firstNumber;
    };
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divedeBy10 = divideBy(100);
const divedeBy100 = divideBy(1000);
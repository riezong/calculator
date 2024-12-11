console.log("Hello World");

let input = "";

let number1 = "";
let operator = "";
let number2 = "";
let prevResult = ""; // For chaining equations

const keypad = document.querySelector("#keypad");
const display = document.querySelector("#display");
const showInput = document.createElement("div");

function operate(num1, op, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    switch(op) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            break;
    }
    console.log(result);
    return result;
}

function clearEquation() {
    number1 = "";
    operator = "";
    number2 = "";
    console.log("CLEAR",number1,operator,number2);
}

keypad.addEventListener('click', (event) => {
    const target = event.target;
    switch(target.id) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            if (operator != "") { // Determine where to append the new digits
                number2 += target.id;
            } else {
                number1 += target.id;
            }
            break;
        case "period":
            if (operator != "") { // Determine where to append the new digits
                number2 += ".";
            } else {
                number1 += ".";
            }
            break;
        case "add":
            if (operator != "") {
                prevResult = operate(number1, operator, number2);
                clearEquation();
                number1 = prevResult; // Move old result to left of operator
                operator = target.id;
            } else {
                operator = target.id;
            }
            break;
        case "sub":
            if (operator != "") {
                prevResult = operate(number1, operator, number2);
                clearEquation();
                number1 = prevResult; // Move old result to left of operator
                operator = target.id;
            } else {
                operator = target.id;
            }
            break;
        case "multiply":
            if (operator != "") {
                prevResult = operate(number1, operator, number2);
                clearEquation();
                number1 = prevResult; // Move old result to left of operator
                operator = target.id;
            } else {
                operator = target.id;
            }
            break;
        case "divide":
            if (operator != "") {
                prevResult = operate(number1, operator, number2);
                clearEquation();
                number1 = prevResult; // Move old result to left of operator
                operator = target.id;
            } else {
                operator = target.id;
            }
            break;
        case "equal":
            console.log("EQUATION",number1,operator,number2);
            operate(number1, operator, number2);
            clearEquation();
        default:
            break;
    }

    // console.log(number1, "+", operator, "+", number2);
});
console.log("Hello World");

let input = "";
let output = "";

let number1 = "";
let operator = "";
let number2 = "";
let prevResult = ""; // For chaining equations

const keypad = document.querySelector("#keypad");
const display = document.querySelector("#display");
const showInput = document.createElement("div");
const showOutput = document.createElement("div");

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

function clearDisplay() {
    input = "";
    output = "";
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
            input += target.id;
            break;
        case "period":
            if (operator != "") { // Determine where to append the new digits
                number2 += ".";
            } else {
                number1 += ".";
            }
            input += target.id;
            break;
        case "add":
            if (operator != "") { // Resolve current equation before adding more operators
                prevResult = operate(number1, operator, number2);
                input = prevResult;
                clearEquation();
                number1 = prevResult; // Move old result to left of operator
                operator = target.id;
            } else {
                operator = target.id;
            }
            input += "+";
            break;
        case "sub":
            if (operator != "") {
                prevResult = operate(number1, operator, number2);
                input = prevResult;
                clearEquation();
                number1 = prevResult;
                operator = target.id;
            } else {
                operator = target.id;
            }
            input += "-";
            break;
        case "multiply":
            if (operator != "") {
                prevResult = operate(number1, operator, number2);
                input = prevResult;
                clearEquation();
                number1 = prevResult;
                operator = target.id;
            } else {
                operator = target.id;
            }
            input += "x";
            break;
        case "divide":
            if (operator != "") {
                prevResult = operate(number1, operator, number2);
                input = prevResult;
                clearEquation();
                number1 = prevResult;
                operator = target.id;
            } else {
                operator = target.id;
            }
            input += "/";
            break;
        case "equal":
            console.log("EQUATION",number1,operator,number2);
            output = operate(number1, operator, number2);
            // clearEquation();
            break;
        case "clear":
            clearEquation();
            clearDisplay();
            break;
        default:
            break;
    }
    showInput.textContent = input;
    showOutput.textContent = output;
    display.appendChild(showInput);
    display.appendChild(showOutput);

    // console.log(number1, "+", operator, "+", number2);
});
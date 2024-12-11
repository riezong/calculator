console.log("Hello World");

const equation = [];
let equationString = "";

const keypad = document.querySelector("#keypad");
const display = document.querySelector("#display");
const showEquation = document.createElement("div");
const answer = document.createElement("div");

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
            console.log(target.id);
            equation.push(target.id);
            equationString = equationString + target.id;
            break;
        case "add":
            console.log(target.id);
            equation.push("+");
            equationString = equationString + "+";
            break;
        case "sub":
            console.log(target.id);
            equation.push("-");
            equationString = equationString + "-";
            break;
        case "multiply":
            console.log(target.id);
            equation.push("*");
            equationString = equationString + "*";
            break;
        case "divide":
            console.log(target.id);
            equation.push("/");
            equationString = equationString + "/";
            break;
        case "equal":
            let result = 
            display.append(answer);
    }
    
    console.log(equationString);
    showEquation.textContent = equationString;
    display.append(showEquation);
});
const number1 = 20;
const number2 = 4;
const number3 = 1;

const operator = "+";

switch (operator) {
    case "+":
        result = number1 + number2 + number3
        console.log(result);
        break;
    case "-":
        result = number1 - number2 - number3;
        console.log(result);
        break;
    case "*":
        result = number1 * number2 * number3;
        console.log(result);
        break;
    case "/":
        result = number1 / number2 / number3;
        console.log(result);
        break;
    case "C":
        console.clear();
        break;

    default:
        console.log("This is not a valid operator");
        break;
}

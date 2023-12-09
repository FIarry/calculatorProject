let button = document.getElementById("convert");
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let input3 = document.getElementById("operation");
let output = document.getElementById("out");

function print() {
    let num1 = Number(input1.value); // Получаем актуальное значение из поля ввода     
    let num2 = Number(input2.value); // Получаем актуальное значение из поля ввода  
    let opVal = input3.value
    result = 'Ошибка'
    if (opVal == '+') {
        result = num1 + num2
    } else if (opVal == '-') {
        result = num1 - num2
    } else if (opVal == '*') {
        result = num1 * num2
    } else if (opVal == '/') {
        result = num1 / num2
    }
    output.value = result;
}
button.addEventListener("click", print); 

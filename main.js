const firstOperand = document.getElementById('operand-1');
const secondOperand = document.getElementById('operand-2');
const inputValue = document.getElementById('number');
const result = document.getElementById('result');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const generateNumbers = () => {
    inputValue.value = '';
    result.innerHTML = ' ';
    firstOperand.innerHTML = randomNumber();
    secondOperand.innerHTML = randomNumber();
};

const checkResult = () => {
    let first = +firstOperand.innerHTML;
    let second = +secondOperand.innerHTML;

    if (first + second === +inputValue.value) {
        result.innerHTML = 'Das stimmt';
        result.style.color = 'green';
    } else {
        result.innerHTML = 'Das ist leider falsch';
        result.style.color = 'red';
    }
};

generateNumbers();

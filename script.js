const numPad = document.getElementById('num-pad');
const results = document.getElementById('results');
const resultsOne = document.getElementById('results-one');
const resultsTwo = document.getElementById('results-two');


let signCheck = false
let sign = ''

let num1 = []
let num1Int;
let num2 = []
let num2Int;
let signs = []
let display = '';


let result = 0;
let finalResult;
let buttons;
let AC;
let parenthesis;
let remaining;
let two;
let three;
let four;
let five; 
let six; 
let seven; 
let eight; 
let nine; 
let zero; 
let goBack; 
let dot; 
let equal; 
let divideSign; 
let sumSign; 
let multiplySign; 
let minusSign; 

const buttonTexts = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '↶',
    '0',
    '.',
    '=',
];

function createGrid() {
    let buttonIndex = 0
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 5; col++) {
            let num = document.createElement('div');
            let button = document.createElement('button')
            button.innerHTML = buttonTexts[buttonIndex];

            button.className = 'buttons'
            num.className = 'gridNum'; 
            num.setAttribute('id', `a${row}${col}`)
            numPad.appendChild(num);
            num.appendChild(button)

            buttonIndex++
        }


    }
    events()


}

function events() {
    AC = document.querySelector('#a00')
    plusOrMinus = document.querySelector('#a01')
    remaining = document.querySelector('#a02')
    divideSign = document.querySelector('#a03')
    seven = document.querySelector('#a04')
    eight = document.querySelector('#a10')
    nine = document.querySelector('#a11')
    multiplySign = document.querySelector('#a12')
    four = document.querySelector('#a13')
    five = document.querySelector('#a14')
    six = document.querySelector('#a20')
    minusSign = document.querySelector('#a21')
    one = document.querySelector('#a22')
    two = document.querySelector('#a23')
    three = document.querySelector('#a24')
    sumSign = document.querySelector('#a30')
    goBack = document.querySelector('#a31')
    zero= document.querySelector('#a32')
    dot = document.querySelector('#a33')
    equal = document.querySelector('#a34')
    buttons = document.querySelectorAll('.buttons')


// ----------------------Operators logic----------------------------------------------------

    sumSign.addEventListener('click', () => {
        sign = '+'
        lengthCheck(sign)
    })

    minusSign.addEventListener('click', () => {
        sign = '-'
        lengthCheck(sign)
    })

    multiplySign.addEventListener('click', () => {
        sign = 'x'
        lengthCheck(sign)
    })

    divideSign.addEventListener('click', () => {
        sign = '÷'
        lengthCheck(sign)
    })
 
//------------------Each button logic-------------------------------------------------------------------

    AC.addEventListener('click', () => {
        num1 = []
        num2 = []
        signs = []
        display = '';
        resultsOne.innerHTML = `0`
        resultsTwo.innerHTML = ''
        signCheck = false
        resultsOne.style.fontSize = '60px'
    })

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            applyButtonPressAnimation(button);
        });
    });

    one.addEventListener('click', () => {
        lengthCheck(1)

    })

    two.addEventListener('click', () => {
        lengthCheck(2)
    })

    three.addEventListener('click', () => {
        lengthCheck(3)
    })

    four.addEventListener('click', () => {
        lengthCheck(4)
    })

    five.addEventListener('click', () => {
        lengthCheck(5)
    })

    six.addEventListener('click', () => {
        lengthCheck(6)
    })

    seven.addEventListener('click', () => {
        lengthCheck(7)
    })

    eight.addEventListener('click', () => {
        lengthCheck(8)
    })

    nine.addEventListener('click', () => {
        lengthCheck(9)
    })

    zero.addEventListener('click', () => {
        lengthCheck(0)
    })

    dot.addEventListener('click', () => {
        lengthCheck('.')
    })

    equal.addEventListener('click', () => {
        if(signs.length === 0) {
        resultsTwo.innerHTML = `${num1Int}`
        resultsTwo.style.fontSize = '40px'
    } else {
        makeOperations(num1Int, num2Int, sign)
    }
    })

    
}




createGrid() 

resultsOne.innerHTML = `${result}`
resultsTwo.style.fontSize = '40px'

//----------------Functionality to add numbers and functions to make math calculations------------------------


function lengthCheck(number) {
    if(display.length < 11) {
        addNumbers(number)
    } else {
        resultsOne.style.fontSize = '20px'
        addNumbers(number)
    }
}


function addNumbers(number) {
    if (signs.length === 0) { // run code if sign button has not been clicked

        if (Number.isInteger(number)) { // run if clicked button is a number
            num1.push(number);
            num1Int = parseFloat(num1.join(''));
            display += number.toString();
            resultsOne.innerHTML = `${display}`;
        } else if(number === '.') { // run if number is a . to add decimals
            num1.push(number);
            display += number.toString();
            resultsOne.innerHTML = `${display}`;
        } else { // run if clicked button isn't a number or .
            signs.push(number);
            display += number;
            resultsOne.innerHTML = `${display}`;
        }
        
    } else { // run code if sign button has been already clicked

        if (Number.isInteger(number)) { // run if clicked button is a number

            if(signCheck === false) {  // run if signCheck is false
            num2.push(number)
            num2Int = parseFloat(num2.join(''));
            display += number
            resultsOne.innerHTML = `${display}`
            } else { // run if signCheck is true
                num2.push(number)
                num2Int = parseFloat(num2.join(''));
                display+= number
                resultsOne.innerHTML = `${display}`
            }

        } else if(number === '.') { // run if number is a . to add decimals
            num2.push(number);
            num2Int = parseFloat(num2.join(''));
            display += number.toString();
            resultsOne.innerHTML = `${display}`;
        }
        else { // run if clicked button isn't a number
            signCheck = true // turn signCheck on when sign button is clicked twice
            signs.push(number)
            display += number
            makeOperations(parseFloat(num1.join('')), parseFloat(num2.join('')), signs[signs.length  - 2])
            num1 = [finalResult]
            num1Int = finalResult
            resultsOne.innerHTML = `${display}`
            num2 = []
        }
    }
}

function makeOperations(num1, num2, sign) {
    switch(sign) {
        case "+":
            finalResult = num1 + num2
            resultsTwo.innerHTML = `${parseFloat(finalResult)}`
            break;
        case "-":
            finalResult = num1 - num2
            resultsTwo.innerHTML = `${parseFloat(finalResult)}`
            break;
        case "x":
            finalResult = num1 * num2
            resultsTwo.innerHTML = `${parseFloat(finalResult)}`
            break;
        case "÷":
            finalResult = num1 / num2
            resultsTwo.innerHTML = `${parseFloat(finalResult)}`
            break;
    }
}


function applyButtonPressAnimation(button) {
    button.classList.add("button-press-animation");
    setTimeout(() => {
        button.classList.remove("button-press-animation");
    }, 100);
}
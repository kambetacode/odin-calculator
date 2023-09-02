const numPad = document.getElementById('num-pad');
const results = document.getElementById('results');
const resultsOne = document.getElementById('results-one');
const resultsTwo = document.getElementById('results-two');


let signCheck = false
let num1 = [];
let num2 = [];
let num1Display = 0;
let num2Display = 0;
let sign = ''
let numTest = [[], [], []];
let display;


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
            addNumToArr(sign)
    })

    minusSign.addEventListener('click', () => {
            sign = '-'
            addNumToArr(sign)
    })

    multiplySign.addEventListener('click', () => {
        if(signCheck === false) {
            sign = '*'
            addNumToArr(sign)
            signCheck = true
            resultsOne.innerHTML = `${num1Display} ${sign}`
        }
    })

    divideSign.addEventListener('click', () => {
        if(signCheck === false) {
            sign = '/'
            addNumToArr(sign)
            signCheck = true
            resultsOne.innerHTML = `${num1Display} ${sign}`
        }
    })
 
//------------------Each button logic-------------------------------------------------------------------

    AC.addEventListener('click', () => {
        num1 = []
        num1Display = 0
        num2 = []
        num2Display = 0
        resultsOne.innerHTML = `${num1Display}`
        resultsTwo.innerHTML = ''
        signCheck = false
    })

    one.addEventListener('click', () => {
            addNumToArr(1)
            resultsOne.innerHTML = `${num1Display}`
    })

    two.addEventListener('click', () => {
        addNumToArr(2)
        resultsOne.innerHTML = `${num1Display}`
    })

    three.addEventListener('click', () => {
        addNumToArr(3)
        resultsOne.innerHTML = `${num1Display}`
    })

    four.addEventListener('click', () => {
        addNumToArr(4)
        resultsOne.innerHTML = `${num1Display}`
    })

    five.addEventListener('click', () => {
        addNumToArr(5)
        resultsOne.innerHTML = `${num1Display}`
    })

    six.addEventListener('click', () => {
        addNumToArr(6)
        resultsOne.innerHTML = `${num1Display}`
    })

    seven.addEventListener('click', () => {
        addNumToArr(7)
        resultsOne.innerHTML = `${num1Display}`
    })

    eight.addEventListener('click', () => {
        addNumToArr(8)
        resultsOne.innerHTML = `${num1Display}`
    })

    nine.addEventListener('click', () => {
        addNumToArr(9)
        resultsOne.innerHTML = `${num1Display}`
    })

    zero.addEventListener('click', () => {
        addNumToArr(0)
        resultsOne.innerHTML = `${num1Display}`
    })

    dot.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne('.')
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo('.')
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    equal.addEventListener('click', () => {
        if(signCheck === false) {
        resultsTwo.innerHTML = `${num1Display}`
        resultsTwo.style.fontSize = '40px'
    } else {
        switch(sign) {
            case '+': 
            resultsTwo.innerHTML = `${add(num1Display, num2Display)}`
            break
            case '-': 
            resultsTwo.innerHTML = `${subtract(num1Display, num2Display)}`
            break
            case '*': 
            resultsTwo.innerHTML = `${multiply(num1Display, num2Display)}`
            break
            case '÷': 
            resultsTwo.innerHTML = `${divide(num1Display, num2Display)}`
            break
        }
        
        
    }
    })

    
}




createGrid() 

resultsOne.innerHTML = `${result}`
resultsTwo.style.fontSize = '40px'

//----------------Functionality to add numbers and functions to make math calculations------------------------

function addNumToArr(number) {
    if (numTest[1].length === 0) {
        if (Number.isInteger(number)) {
            numTest[0].push(number)
            num1Display = numTest[0].join('')
            display = num1Display
            resultsOne.innerHTML = `${display}`
            console.log(display)
        } else if (isNaN(number)) {
            numTest[1] = number
            display = num1Display.concat(numTest[1])
            console.log(display)
            resultsOne.innerHTML = `${display}`
        }
    } else {
        if (Number.isInteger(number)) {
            numTest[2].push(number)
            num2Display = numTest[2].join('')
            display = display.concat(num2Display)
            resultsOne.innerHTML = `${display}`
            console.log(display)
        } else if (isNaN(number)) {
            numTest[1] = number
            console.log(numTest)
        }
    }
}

function addNumberTwo(number) {
    num2.push(number)
    if(num2[num2.length - 1] === '.') {
        num2Display = num2.join('')
    } else {
    num2Display = parseFloat(num2.join(''))
    }
}

function add(num1, num2) {
    finalResult = num1 + num2
    return finalResult
}

function subtract(num1, num2) {
    finalResult = num1 - num2
    return finalResult
}

function multiply(num1, num2) {
    finalResult = num1 * num2
    return finalResult
}

function divide(num1, num2) {
    finalResult = num1 / num2
    return finalResult
}
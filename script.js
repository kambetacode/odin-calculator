const numPad = document.getElementById('num-pad');
const results = document.getElementById('results')


let num1 = [];
let num1Display;
let num2;
let buttons;
let AC;
let result = 0;
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

    buttons.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            console.log(e)
            e.target.classList.add('hovered')
            
        })
    })

    AC.addEventListener('click', () => {
        num1 = []
        num1Display = 0
        results.innerHTML = `${num1Display}`
    })

    one.addEventListener('click', () => {
        addNumberOne(1)
        results.innerHTML = `${num1Display}`
    })

    two.addEventListener('click', () => {
        addNumberOne(2)
        results.innerHTML = `${num1Display}`
    })

    three.addEventListener('click', () => {
        addNumberOne(3)
        results.innerHTML = `${num1Display}`
    })

    four.addEventListener('click', () => {
        addNumberOne(4)
        results.innerHTML = `${num1Display}`
    })

    five.addEventListener('click', () => {
        addNumberOne(5)
        results.innerHTML = `${num1Display}`
    })

    six.addEventListener('click', () => {
        addNumberOne(6)
        results.innerHTML = `${num1Display}`
    })

    seven.addEventListener('click', () => {
        addNumberOne(7)
        results.innerHTML = `${num1Display}`
    })

    eight.addEventListener('click', () => {
        addNumberOne(8)
        results.innerHTML = `${num1Display}`
    })

    nine.addEventListener('click', () => {
        addNumberOne(9)
        results.innerHTML = `${num1Display}`
    })

    zero.addEventListener('click', () => {
        addNumberOne(0)
        results.innerHTML = `${num1Display}`
    })

    dot.addEventListener('click', () => {
        addNumberOne('.')
        results.innerHTML = `${num1Display}`
    })

    
}




createGrid() 

results.innerHTML = `${result}`

// ------------------------------------------------------------------------------------------------------------------------------------------

function addNumberOne(number) {
    num1.push(number)
    num1Display = num1.join('')
}

function add(num1, num2) {
    result = num1 + num2
}

function subtract(num1, num2) {
    result = num1 - num2
}

function multiply(num1, num2) {
    result = num1 * num2
}

function divide(num1, num2) {
    result = num1 / num2
}
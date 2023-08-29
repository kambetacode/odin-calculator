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


// --------------------------------Operators logic----------------------------------------------------------------------------------------

    sumSign.addEventListener('click', () => {
        if(num1Display === 0) {
            alert('invalid format')
        } else {
            if(signCheck === false) {
            signCheck = true
            sign = '+'
            resultsOne.innerHTML = `${num1Display} ${sign}`
            }
        }
    })

    minusSign.addEventListener('click', () => {
        if(num1Display === 0) {
            alert('invalid format')
        }   else {
            if(signCheck === false) {
            signCheck = true
            sign = '-'
            resultsOne.innerHTML = `${num1Display} ${sign}`
            }
        }
    })

    multiplySign.addEventListener('click', () => {
        if(num1Display === 0) {
            alert('invalid format')
        }   else {
            if(signCheck === false) {
            signCheck = true
            sign = '*'
            resultsOne.innerHTML = `${num1Display} ${sign}`
            }
        }
    })

    divideSign.addEventListener('click', () => {
        if(num1Display === 0) {
            alert('invalid format')
        }   else {
            if(signCheck === false) {
            signCheck = true
            sign = '÷'
            resultsOne.innerHTML = `${num1Display} ${sign}`
            }
        }
    })

//---------------------------------------------------------------------------------------------------------------------------------
 
//---------------------------------Each button logic-------------------------------------------------------------------------------
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
        if(signCheck === false) {
            addNumberOne(1)
            resultsOne.innerHTML = `${num1Display}`

        } else {
            addNumberTwo(1)
            resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
        }
    })

    two.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(2)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(2)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    three.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(3)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(3)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    four.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(4)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(4)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    five.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(5)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(5)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    six.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(6)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(6)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    seven.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(7)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(7)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    eight.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(8)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(8)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    nine.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(9)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(9)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
    })

    zero.addEventListener('click', () => {
        if(signCheck === false) {
        addNumberOne(0)
        resultsOne.innerHTML = `${num1Display}`
    } else {
        addNumberTwo(0)
        resultsOne.innerHTML = `${num1Display} ${sign} ${num2Display}`
    }
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

// ------------------------------------------------------------------------------------------------------------------------------------------


//----------------------------Functionality to add numbers and functions to make math calculations-------------------------------------------

function addNumberOne(number) {
    num1.push(number)
    if(num1[num1.length - 1] === '.') {
        num1Display = num1.join('')
    } else {
    num1Display = parseFloat(num1.join(''))

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
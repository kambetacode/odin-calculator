const numPad = document.getElementById('num-pad');
let AC;
let result;

const buttonTexts = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'X',
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
            num.setAttribute('id', `${buttonTexts[buttonIndex]}`)
            numPad.appendChild(num);
            num.appendChild(button)

            buttonIndex++
        }


    }
    events()


}

function events() {
    AC = document.querySelector('#AC')
    
    AC.addEventListener('click', () => console.log('TEST'))
}



createGrid() 

// ------------------------------------------------------------------------------------------------------------------------------------------

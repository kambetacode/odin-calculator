const numPad = document.getElementById('num-pad')

function createGrid() {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 5; col++) {
            let num = document.createElement('div');
            num.className = 'gridNum'; 
            num.setAttribute('id', `cell-${row}-${col}`)
            numPad.appendChild(num);
        }
    }
}

createGrid()
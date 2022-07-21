let squareNo = 0;
do squareNo = Math.round(parseInt(prompt('Enter the number of squares in a row')));
while(typeof(squareNo)!= 'number');
let size = squareNo *squareNo;
const body = document.querySelector('body');
createCanvas();
function createCanvas(){
    const container = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${squareNo},1fr)`;
    container.style.gridTemplateRows = `repeat(${squareNo},1fr)`;

    container.classList.add('container');
    for(let i = 0;i<size;i++){
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
    body.appendChild(container);

}
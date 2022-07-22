
const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click',createCanvas);
function createCanvas(){
    let temp = document.getElementById('container-id');
    if(typeof(temp)!= 'undefined'&& temp !=null){
        body.removeChild(temp);
    }
    const value = document.querySelector('input').value;    
    let squareNo = Math.round(parseInt(value));
    let size = squareNo *squareNo;
    const container = document.createElement('div');
    container.id = 'container-id';
    container.style.gridTemplateColumns = `repeat(${squareNo},1fr)`;
    container.style.gridTemplateRows = `repeat(${squareNo},1fr)`;

    container.classList.add('container');
    for(let i = 0;i<size;i++){
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        div.addEventListener('mouseover',(e)=>{
           e.target.style.backgroundColor = colorGenerate();
        })
    }
    body.appendChild(container);
}

function draw(e){
    
}
function colorGenerate(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let a = Math.random() * 0.3 + 0.7;
    return `rgba(${r},${g},${b},${a})`
}

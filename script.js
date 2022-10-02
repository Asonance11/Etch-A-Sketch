const grid = document.querySelector('#gameContainer');
let value = prompt("enter ur value");
parseInt(value);

function createGrid(){
    grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${value}, 1fr)`
    for(let i = 1; i <= value * value; i++ ){
        const gridElement = document.createElement('div')
        gridElement.classList.add('gridCell')
        gridElement.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = `black`
        });
        grid.appendChild(gridElement)
    }
}
createGrid();
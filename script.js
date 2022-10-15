const grid = document.querySelector('#Container');
const clearButton = document.querySelector('#clearBtn')
let value = prompt("enter ur value");
parseInt(value);

createGrid();
clearButton.addEventListener('click', reloadGrid);
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
function clearGrid(){
   grid.innerHTML = ''
}
function reloadGrid(){
    clearGrid();
    createGrid();
}
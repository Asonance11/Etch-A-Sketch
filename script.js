const grid = document.querySelector('#Container');
const clearButton = document.querySelector('#clearBtn');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const slider = document.querySelector('#mySlider')
const screenVal = document.querySelector('.value')
const blackbtn = document.querySelector('#black');
createGrid();


slider.addEventListener('input', () => {
    let val = document.getElementById('mySlider').value;
    screenVal.textContent = `${val} x ${val}`;
    removeNodes(grid);
    grid.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${val}, 1fr)`;
    for (let i = 1; i <= val * val; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('gridCell');
        gridElement.addEventListener('mouseover', function (event) {
                event.target.style.backgroundColor = `black`;
        });
        grid.appendChild(gridElement);
    }
});

rainbow.addEventListener('click', function(){
    let val = document.getElementById('mySlider').value;
    let cell = grid.children;
    for (let i = 1; i <= val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        }); 
    }
} );
blackbtn.addEventListener('click', function(){
    let val = document.getElementById('mySlider').value;
    let cell = grid.children;
    for (let i = 1; i <= val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = `black`;
        }); 
    }
})
eraser.addEventListener('click', function(){
    let val = document.getElementById('mySlider').value;
    let cell = grid.children;
    for (let i = 1; i <= val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = `white`;
        }); 
    } 
})
clearButton.addEventListener('click', function(){
    let val = document.getElementById('mySlider').value;
    let cell = grid.children;
    for (let i = 1; i <= val * val; i++) {
        cell[i].style.backgroundColor = `white`
    }
}); 


function createGrid(){
    let val = document.getElementById('mySlider').value;
    grid.style.gridTemplateColumns = `repeat(${val}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${val}, 1fr)`
    for(let i = 1; i <= val * val; i++ ){
        const gridElement = document.createElement('div')
        gridElement.classList.add('gridCell')
        gridElement.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = `black`
        });
        grid.appendChild(gridElement)
    }
}
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
function removeNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
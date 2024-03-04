// Elements
const main = document.querySelector('.main-wrapper');
const playBtn = document.getElementById('play');
const levelSelect = document.getElementById('level');
let grid = document.querySelector('.grid-container');

// DATA
const levels = [100, 81, 49];
let squareNumbers;

// Events
playBtn.addEventListener('click', play);


// Functions
function play(){
  reset();
  squareNumbers = levels[levelSelect.value];
  generatePlayground();
}

function generatePlayground(){
  grid = document.createElement('div');
  grid.className = "grid";
  for(let i = 1; i <= squareNumbers; i++){
    const square = createSquare(i);
    grid.append(square);
  }
  main.append(grid);
}

function createSquare(index){
  const square = document.createElement('div');
  square.className  = 'square';
  square.classList.add('square' + squareNumbers);
  square._sqID = index;
  square.addEventListener('click', handleClick)
  return square;
}

function handleClick(){
  this.classList.add('clicked')
}

function reset(){
  main.innerHTML = '';
}
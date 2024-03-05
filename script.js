// Elements
const main = document.querySelector('.main-wrapper');
const playBtn = document.getElementById('play');
const levelSelect = document.getElementById('level');
let grid = document.querySelector('.grid-container');
let points = 0;
const numBombs = 16;
const endMessage = document.querySelector('.endGameMessage');

// DATA
const levels = [100, 81, 49];
let squareNumbers;
let bombs = [];

// Events
playBtn.addEventListener('click', play);


// Functions
function play(){
  reset();
  squareNumbers = levels[levelSelect.value];
  bombs = generateBombs();
  generatePlayground();
}

function generateBombs(){
  const bombsTemp = [];
  while(bombsTemp.length < numBombs){
    const bombId = Math.ceil(Math.random() * squareNumbers);
    if(!bombsTemp.includes(bombId)) bombsTemp.push(bombId)
  }
  return bombsTemp;
}

function generatePlayground(){
  const grid = document.createElement('div');
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
  if(bombs.includes(this._sqID)){
    endGame(false);
  }else{
    this.classList.add('clicked');
    if(!this.classList.contains('clicked')){
      points++;
    }
    if(points === (squareNumbers - numBombs)){
      endGame(true);
    }
  }
}

function endGame(isWin){
  let message;
  showBombs();
  blockGrid();
  if(isWin){
    message = 'Hai Vinto!'
  }else{
    message = `Hai Perso! Punti: ${points} su ${squareNumbers - numBombs}`
  }
  endMessage.innerHTML = message;
}

function blockGrid(){
  const endGameEl = document.createElement("div");
  endGameEl.className = "end-game"; 
  main.append(endGameEl);
}

function showBombs(){
  const squares = document.querySelectorAll('.square');
  for(let i = 0; i < squares.length; i++){
    const square = squares[i];
    if(bombs.includes(square._sqID)){
      square.classList.add('bomb');
    }
  }
}

function reset(){
  main.innerHTML = '';
  points = 0;
  bombs = [];
  endMessage.innerHTML = '';
}
const gridContainer = document.querySelector(`.grid-container`);

const btn = document.querySelector(`.btn`);

btn.addEventListener('click', start);

// Functions

// Reset
function reset(){
  gridContainer.innerHTML = "";
}

// Inizio
function start(){

  reset();

  for (let i = 1; i <= 100; i++) {
    const square = addSquare(i);
    gridContainer.append(square);
  }
}

function addSquare(numero){
  
  const sq = document.createElement('div');
  
  sq.className = 'square';

  sq._sqID = numero;
  
  sq.addEventListener('click', function(){
    
    console.log(this._sqID);
    
    this.innerHTML = (!this.classList.contains('clicked'))
                      ? this.innerHTML = numero 
                      : this.innerHTML = '';

    this.classList.toggle('clicked');

  });

  return sq;
}
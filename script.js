// Elements
const main = document.getElementsByClassName('.main-wrapper');
const playBtn = document.getElementById('play');
const levelSelect = document.getElementById('level');

// DATA
const levels = [100, 81, 49];
let squareNumbers;



// Events
playBtn.addEventListener( 'click', play);


// Functions
function play(){

  reset();

  squareNumbers = levels[levelSelect.value];

  // Calcolo quadrati

  // generatePlayground()

}

function reset(){
  main.innerHTML = '';
}
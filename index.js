// DOM selectors 

let board = document.getElementById('board');

let gameOver = document.getElementById('message');

let resetButton = document.getElementById('resetButton')

//literally saying make an array from this array like object
let shell = Array.from(document.querySelectorAll('#board > div'));

let randomizer = Math.floor(Math.random()*3);

// event handlers

resetButton.addEventListener('click', function() {
 for (let i=0; i < shell.length; i ++) {
    shell[i].className = '';
 }
 gameOver.innerText= '';
});

board.addEventListener('click', function(event) {
 let target = event.target;
 if (target.id === '') {
   for(let i = 0; i < shell.length; i++) {
    if(shell[i].className !=='') {
        alert("You Need to Reset!")
        return;
    }
   }
 let index = shell.indexOf(target);
 if (index === randomizer) {
   target.className = "win";
   gameOver.innerText= 'You Win!'

 }
   else {
   target.className = "loose";
   gameOver.innerText= 'You Loose!'
   }
}
});


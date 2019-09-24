// HC: great job adding comments to describe your code!
//NIGHT MODE
let night = document.querySelector('.night');
let nightClick = 0;
function lightsOff() {
    nightClick++;
    if (nightClick % 2 === 0) {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = '#353c51';
    }
}
night.addEventListener('click', lightsOff);
//////////////////////////////
//SCORE
let scoreNum = 0;
let number = 0;
let score = document.querySelector('.score');

///////BEGIN BUTTON
let beginBtn = document.querySelector('.begin');
let modal = document.querySelector('.modal');

function begin() {
    modal.style.display = 'none';
}
beginBtn.addEventListener('click', begin);

//////////////////////
let numberOfClicks = 0;
let firstCard;
let secondCard;
let board = document.querySelector('.card-area');

// HC: Consider breaking up the logic inside this disappearingAct function into smaller helper function calls
/////Listen to click
function disappearingAct(e) {
    if (e.target.classList.contains('faceCard')) {
        let timer = 0;
        numberOfClicks++;

        e.target.src = e.target.dataset.img;
        if (numberOfClicks % 2 == 1) {
            //pass the odd clicks into first card
            firstCard = e.target;
        } else if (numberOfClicks % 2 === 0) {
            //pass the even clicks into second card
            //compare if name is the same
            secondCard = e.target;
            if (firstCard.name === secondCard.name) {
                //add a pt
                scoreNum += 1;
                number += 1;
                score.innerText = scoreNum;
                //UPDATE SCORE ON DOM
                if (scoreNum === 6) {
                    win.style.display = 'block';
                }
            } else {
                setTimeout(() => {
                    //flip cards back over
                    //use src to flip back over
                    firstCard.src = 'img/jcg_bg_red@3x.png';
                    //use src to flip back over
                    secondCard.src = 'img/jcg_bg_red@3x.png';
                }, 1000);
            }
        }
        function playAgain() {
            win.style.display = 'none';
            location.reload();
        }
        againBtn.addEventListener('click', playAgain);

        function close() {
            win.style.display = 'none';
        }
        closeBtn.addEventListener('click', close);
        let modalText = document.querySelector('.winner-text');
        function getTime(timer) {
            timer++;
        }
        setInterval(getTime, 1000);

        modalText.innerHTML = `It took ${numberOfClicks} moves to complete this challenge. Great Job!`;
    }
}
board.addEventListener('click', disappearingAct);
//////Listen for click
////////////////AGAIN
let closeBtn = document.querySelector('.close');
let againBtn = document.querySelector('.play-again');
let win = document.querySelector('.modal-again');

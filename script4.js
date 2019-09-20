//NIGHT MODE

let night=document.querySelector('.night');
let nightClick=0;
function lightsOff(){
    nightClick++;
    if(nightClick%2===0){
        document.body.style.backgroundColor="white";
    }
    else{
        document.body.style.backgroundColor="#353c51";

    }
}

night.addEventListener('click',lightsOff)
//////////////////////////////
//SOCRE
let scoreNum=0;

let score=document.querySelector('.score');




///////RID OF BUTTON

let begin=document.querySelector('.begin');
let modal=document.querySelector('.modal')

function modalLeave(){
    modal.style.display="none";

}

begin.addEventListener('click',modalLeave);



////////////////




let numberOfClicks=0;
// let clickedCards=[["a","b"],["a","b"]]
let clickedFirst;
let clickedSecond;

//CREATE BOARD//////
/////Current Deck

let board;
function createBoard(){


    board=document.querySelector('.card-area')

    let cardCount=4;
    let bgCard;
    
    for (let i=0;i<cardCount;i++){
        bgCard=document.createElement('img');
        bgCard.className="card";
        bgCard.classList.add('bgCard')
        bgCard.src="img/jcg_bg_red@3x.png";
        board.appendChild(bgCard);
    
    bgCard.addEventListener('click',pickACard)
    
    }
}    
createBoard()

    ////Board Created/////
    

let currentCardDeck=[];
    for(let i=0;i<2;i++){

        let geisha=document.createElement('img');
        geisha.classList.add('geisha');
      board.appendChild(geisha);

            // currentCardDeck.push(faceCards[i]);
            // board.appendChild(faceCards[i]);
            // faceCards[i].style.display="block";

    
    }


////
function pickACard(e){
    numberOfClicks++
    if (numberOfClicks%2===1&numberOfClicks!==0){
        clickedFirst=e.target
    }

   
    else if (numberOfClicks%2===0&numberOfClicks!==0){
        clickedSecond=e.target
    }
    console.log('Picked')


}

for( let i=0;i<1;i++){

        function change(e){

            if (e.target.classList.contains("bgCard")){
                e.target.classList.remove('bgCard')

            e.target.classList.toggle('geisha')
    
    
            console.log(e.target.classList)
    
    
        }

        this.addEventListener('click',change)


    }
   
    

}






/////////SHUFFLE


// function shuffleDeck(currentCardDeck,board){

//     let currentIndex=currentCardDeck.length;
//     let temp;
//     let randomI;

//     while(0 !== currentIndex){
//         randomI=Math.floor(Math.random()*currentIndex);
//         currentIndex-=1;



//         temp=currentCardDeck[currentIndex];
//         currentCardDeck[currentIndex]=currentCardDeck[randomI];
//         currentCardDeck[randomI]=temp;
//         board.appendChild(currentCardDeck[0]);

//     }
//     return currentCardDeck;

// /////SHUFFLED
// }

// shuffleDeck(currentCardDeck);

///Shuffled///



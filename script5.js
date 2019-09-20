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
//SCORE
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
/****
 * 
 * 

 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 

 
 
 
 
 
 
  * TIMER TO SHOW HOW LONG PLAYER HAS PLAYED GAME TO SEE IF THEY CAN BEAT THIS TIME NEXT TIME



GOAL>>FACE CARDS SHOULD BE SHUFFLED AT BEGINING OF GAME
 GOAL>>>>LET CARDS KNOW WHEN THEY ARE CLICKED
 
  * GOAL>> ALLOW cards got appear IN PAIRS

   * GOAL>>>>SHUFFLE CARDS

 * CARDS DONT REPEAT WHEN THEY APPEAR
 * 
 GOAL>>>WHEN CARDS ARE CLICKED SHOULD REVEAL A FACECARD


* GOAL>>>>Be able to click on an img with class of bgCard and have that img remove bgCard and become one of our faceCard images


 * GOAL>>>KNOW IF CARDS MATCHED IF PICKED (FOR EVERY 2 CARDS)

 GOAL>>>FOR EVERY TWO MOVES COMPARE WHAT WAS CLICKED

 GOAL >>>IF CLICKED ONCE PUSH THE CLICKED CARD INTO AN ARRAY AT CLICKEDCARDS [0] POSITION
 

 GOAL >>>IF CLICKED TWICE PUSH THE CLICKED CARD INTO AN ARRAY AT CLICKEDCARDS [1] POSITION
 
GOAL>>>SEE IF THOSE CARDS MATCH BY CHECKING THEIR NAME
 
 
  * GOAL FOR EVERY TWO CARDS THAT MATCH SCORE INCREASES


   * GOAL >>>>IF CARDS DONT MATCH FLIP BACK OVER SCORE DOESNT INCREASE


    * GOAL>>>SHOW A GAME WIN. WHEN ALL CARDS ARE FLIPPED AND MATCHED PAIRS

    GOAL>> SHOW PLAYER THEIR TIME AND SEE IF THEY WANT TO PLAY AGAIN TO BEAT PREVIOUS TIME
 ***/


///////////////////////
// GOAL>>>>HAVE A TABLE 
 
 
// GOAL>>>>HAVE CARDS FACE DOWN ON TABLE
let board={};
let clickedFirst;
let clickedSecond;
let numberOfClicks=0;

let cardDeck=[];
let faceCard;



////////////////
  
function createBoard(board){


    board=document.querySelector('.card-area')

    let cardCount=4;
    let bgCard;
    for (let i=0;i<4;i++){

        bgCard=document.querySelectorAll('.bgCard');

    
    console.log("BG CARD"+i)
    }


    function shuffleDeck(cardDeck){

        let currentIndex=cardDeck.length;
        let temp;
        let randomI;
    
        while(0 !== currentIndex){
            randomI=Math.floor(Math.random()*currentIndex);
            currentIndex-=1;
    
    
    
            temp=cardDeck[currentIndex];
            cardDeck[currentIndex]=cardDeck[randomI];
            cardDeck[randomI]=temp;
    
        }
        return cardDeck;
    
    /////SHUFFLED
    }
    
   
    function createDeck(){
    
        for(let i=0;i<4;i++){
            
            faceCard=document.querySelectorAll('.faceCard');
            
            
            
            // faceCard[i].style.display="none"
    
            cardDeck.push(faceCard[i]);
            console.log('hi')
            console.log(i)
        }
    }
    
    createDeck();
    


    shuffleDeck(cardDeck);
    cardDeck=shuffleDeck(cardDeck);
    
    for(let i=0;i<4;i++){
        board.appendChild(cardDeck[i]);
        console.log('appended' +i)
    
    }



 










}    
createBoard()

//////////////HAVE TABLE///////////////








//////////
////////
///click logic
function clickACard(e){
    
    // numberOfClicks++/////adds click every time a card clicked
    // if (numberOfClicks%2===1&numberOfClicks!==0&&e.target.className==="bgCard"){
    //     clickedFirst=e.target
    // }

   
    // else if (numberOfClicks%2===0&numberOfClicks!==0&&e.target.className==="bgCard"){
    //     clickedSecond=e.target
    // }





if(e.target.className==="bgCard"){
    e.target.style.dipslay="none"
    e.target.classList.toggle('bgCard');
    // e.target.classList.toggle('notClicked');


    // e.target.classList.toggle('geisha');


    // faceCard[0].style.dipslay="block";

    for(let i=0;i<1;i++){


    }


}




console.log(e.target)
    
}

this.addEventListener('click',clickACard)


// e.target.classList.toggle('bgCard');



// if (e.target.style.display="block"&& e.target.classList.includes('bgCard')){


//     e.target.classList.toggle('faceCard[i]')


// }




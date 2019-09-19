
//CREATE BOARD//////

let board=document.querySelector('.card-area')

let cardCount=4;
let bgCard;

for (let i=0;i<cardCount;i++){
    bgCard=document.createElement('img');
    bgCard.className="card";
    bgCard.src="img/jcg_bg_red@3x.png";
    board.appendChild(bgCard);



}

let numberOfClicks=0;
let clickedCards=[["a","b"],["a","b"]]

//BOARD CREATED/////////
//CREATE DECK

let card1=document.createElement('img');
card1.src="img/jcg_dino_red@3x.png";
card1.className="card dino";

let card2=document.createElement('img');
card2.src="img/jcg_geisha_red@3x.png";
card2.className="card geisha";


// let card3=document.createElement('img');
// card3.src="img/jcg_home_red@3x.png";
// card3.className="card home";


// let card4=document.createElement('img');
// card4.src="img/jcg_post_red@3x.png";
// card4.className="card post";


// let card5=document.createElement('img');
// card5.src="img/jcg_sumo_red@3x.png";
// card5.className="card sumo";



// let card6=document.createElement('img');
// card6.src="img/jcg_volcano_red@3x.png";
// card6.className="card volcano";

let cardDeck1=[[card1,card1],[card2,card2]]
// let cardDeck2=[[card3,card3],[card4,card4]]
// let cardDeck3=[[card5,card5],[card6,card6]]

let currentCardDeck=[];
/////////////HAVE DECK


///MAKE CARD DECK CHOICE RANDOM
// let randomNum=Math.floor(Math.random()*3)
// if (randomNum===0){
    currentCardDeck=cardDeck1;
// }
// else if (randomNum===1){
//     currentCardDeck=cardDeck2;
// }
// else if (randomNum===2){
//     currentCardDeck=cardDeck3;
// }
// console.log(randomNum);

console.log(currentCardDeck);
///Card Deck Is Random
////////Get cards on board randomized




function shuffleDeck(currentCardDeck){

    let currentIndex=currentCardDeck.length;
    let temp;
    let randomI;

    while(0 !== currentIndex){
        randomI=Math.floor(Math.random()*currentIndex);
        currentIndex-=1;



        temp=currentCardDeck[currentIndex];
        currentCardDeck[currentIndex]=currentCardDeck[randomI];
        currentCardDeck[randomI]=temp;
        // board.appendChild(currentCardDeck[0]);

    }
    return currentCardDeck;

/////SHUFFLED
}

shuffleDeck(currentCardDeck);




///////////cards show up random
//NEED CARDS TO LISTEN
for(let i=0;i<1;i++){

    function clickCard(e){
        numberOfClicks++



        // if(numberOfClicks===1){
        //     clickedCards[0][0]=e.target;
        //     clickedCards[0][0]=e.target;

        // }
        // else if(numberOfClicks===2){
        //     clickedCards[0][1]=e.target;
        // }
        // else if(numberOfClicks===3){
        //     clickedCards[1][0]=e.target;
        // }
        // else if(numberOfClicks===4){
        //     clickedCards[1][1]=e.target;
        // }



//makes sure only cards trigger response
        // if (e.target.className==="card"){

        //     let randomly=Math.floor(Math.random()*4);
        //     if (randomly===0){

                e.target.src=currentCardDeck[0][0].src;

            // }
            // else if (randomly===1){

                e.target.src=currentCardDeck[0][1].src;

            // }
            // else if (randomly===2){

                e.target.src=currentCardDeck[1][0].src;

            // }
            // else if (randomly===3){

                e.target.src=currentCardDeck[1][1].src;

            }
            console.log('card clicked')
            console.log(numberOfClicks)

            // console.log(currentCardDeck[0][0].outerHTML);

if(numberOfClicks===1){
            clickedCards[0][0]=e.target;

        }
        else if(numberOfClicks===2){
            clickedCards[0][1]=e.target;
        }
        else if(numberOfClicks===3){
            clickedCards[1][0]=e.target;
        }
        else if(numberOfClicks===4){
            clickedCards[1][1]=e.target;
        }

//matching logic
            if((clickedCards[0][0].outerHTML===clickedCards[0][1].outerHTML)&&(numberOfClicks!==0 && numberOfClicks%2===0)){
                console.log('Match')
            }
            else if((clickedCards[1][0].outerHTML===clickedCards[1][1].outerHTML)&&(numberOfClicks!==0 && numberOfClicks%2===0)){
                console.log('Match')
            }
        }



    // }

   this.addEventListener('click',clickCard);

// }

//////////////////////////////BG CARDS ARE LISTENING



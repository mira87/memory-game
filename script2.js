
//CREATE BOARD//////

let board=document.querySelector('.card-area')

let cardCount=4;
// let bgCard;
   let bgCard1=document.querySelector('.bgCard1');
   let bgCard2=document.querySelector('.bgCard2');
   let bgCard3=document.querySelector('.bgCard3');
   let bgCard4=document.querySelector('.bgCard4');

    // bgCard.className="card";
    // bgCard.src="img/jcg_bg_red@3x.png";
    // board.appendChild(bgCard);
    let cardbgHolder=[bgCard1,bgCard2,bgCard3,bgCard4];




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


let card3=document.createElement('img');
card3.src="img/jcg_home_red@3x.png";
card3.className="card home";


let card4=document.createElement('img');
card4.src="img/jcg_post_red@3x.png";
card4.className="card post";


let card5=document.createElement('img');
card5.src="img/jcg_sumo_red@3x.png";
card5.className="card sumo";



let card6=document.createElement('img');
card6.src="img/jcg_volcano_red@3x.png";
card6.className="card volcano";

let cardDeck1=[[card1,card1],[card2,card2]]
let cardDeck2=[[card3,card3],[card4,card4]]
let cardDeck3=[[card5,card5],[card6,card6]]

let randomly;

let currentCardDeck=[];
/////////////HAVE DECK


///MAKE CARD DECK CHOICE RANDOM
let randomNum=Math.floor(Math.random()*3)
if (randomNum===0){
    currentCardDeck=cardDeck1;
}
else if (randomNum===1){
    currentCardDeck=cardDeck2;
}
else if (randomNum===2){
    currentCardDeck=cardDeck3;
}
console.log(randomNum);

console.log(currentCardDeck);
///Card Deck Is Random
////////Get cards on board randomized








///////////cards show up random
//NEED CARDS TO LISTEN
for(let i=0;i<1;i++){
    randomly=Math.floor(Math.random()*4);

    function clickCard(e,){
        numberOfClicks++
console.log(randomly)


        if(numberOfClicks===1){
            clickedCards[0][0]=e.target;
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



//makes sure only cards trigger response
        if (e.target.className==="card"){

            if (randomly===0){
console.log('clicked me!!!')
                e.target.src=currentCardDeck[0][0].src;

                currentCardDeck[0][0].src;



/////////////


/////////////////


/////////




// function click0(){
//     cardbgHolder[0].src=choices[0][1];
//     numberOfClicks+=1;
//     }
//     function click1(){
//         cardbgHolder[1].src=choices[0][1];
//         numberOfClicks+=1
//         }
//         function click2(){
//             cardbgHolder[2].src=choices[1][1];
//             numberOfClicks+=1

//             }
//             function click3(){
//                 cardbgHolder[3].src=choices[1][1];
//                 numberOfClicks+=1

//                 }



////////////


//////////

/////////
            }
            else if (randomly===1){

                e.target.src=currentCardDeck[0][1].src;

            }
            else if (randomly===2){

                e.target.src=currentCardDeck[1][0].src;

            }
            else if (randomly===3){

                e.target.src=currentCardDeck[1][1].src;

            }
            console.log('card clicked')
            console.log(numberOfClicks)

            // console.log(currentCardDeck[0][0].outerHTML);

if(numberOfClicks===1){
            clickedCards[0][0]=e.target;
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
            if(clickedCards[0][0].outerHTML===clickedCards[0][1].outerHTML&&numberOfClicks!==0&&numberOfClicks%2===0){
                console.log('Match')
            }
            else if(clickedCards[1][0].outerHTML===clickedCards[1][1].outerHTML&&numberOfClicks!==0&&numberOfClicks%2===0){
                console.log('Match')
            }
        }



    }

   this.addEventListener('click',clickCard);

}

//////////////////////////////BG CARDS ARE LISTENING



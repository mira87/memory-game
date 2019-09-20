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
let clickedCards=[["a","b"],["a","b"]]
let clickedFirst;
let clickedSecond;

//CREATE BOARD//////
/////Current Deck
function createBoard(){


}
let currentCardDeck=[];
    for(let i=0;i<4;i++){

        faceCards=document.querySelectorAll('.faceCard');
        // currentCardDeck[i].style.display="none";
        faceCards[i].style.display="none";

            currentCardDeck.push(faceCards[i]);

    
    }


////

function pickACard(e){
    numberOfClicks++
    if (numberOfClicks%2===1&numberOfClicks!==0){
        clickedFirst=e.target
    }


    console.log('Picked')


}





let board=document.querySelector('.card-area')

let cardCount=4;
let bgCard;

for (let i=0;i<cardCount;i++){
    bgCard=document.createElement('img');
    bgCard.className="card";
    bgCard.src="img/jcg_bg_red@3x.png";
    board.appendChild(bgCard);

bgCard.addEventListener('click',pickACard)

}



////Board Created/////





/////////SHUFFLE


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
        board.appendChild(currentCardDeck[0]);

    }
    return currentCardDeck;

/////SHUFFLED
}

shuffleDeck(currentCardDeck);

///Shuffled///



/////Listen to click

for (let i=0;i<4;i++){

    function disappearingAct(e){
       
        if (e.target.className==="card"||e.target.className==="bgCard"){
            numberOfClicks++
            console.log(numberOfClicks)
        
            if(numberOfClicks===1){
                e.target.style.display="none"
                currentCardDeck[0].style.display="block"
                // e.target.src=currentCardDeck[0].src;
            
            }
            else if(numberOfClicks===2){
                e.target.style.display="none"
                currentCardDeck[1].style.display="block"

                // e.target.src=currentCardDeck[1].src;
            
            }
            else if(numberOfClicks===3){
                e.target.style.display="none"
                currentCardDeck[2].style.display="block"

                // e.target.src=currentCardDeck[2].src;
            
            }
            else if(numberOfClicks===4){
                e.target.style.display="none"
                currentCardDeck[3].style.display="block"

                // e.target.src=currentCardDeck[3].src;
            
            }
            
        
        }







        //////////////////



        if(numberOfClicks===1){
            clickedCards[0][0]=currentCardDeck[0];
        
        }
        else if(numberOfClicks===2){
            clickedCards[0][1]=currentCardDeck[1];
        }
        else if(numberOfClicks===3){
            clickedCards[1][0]=currentCardDeck[2];
        }
        else if(numberOfClicks===4){
            clickedCards[1][1]=currentCardDeck[3];
        }
        
        //matching logic
            if((clickedCards[0][0].name===clickedCards[0][1].name)&&(numberOfClicks!==0 && numberOfClicks===2)){
                console.log('Match')
                e.target.removeEventListener('click',disappearingAct);
                e.target.classList.add('matched')

                clickedCards[0][0].classList.add('matched')
                clickedCards[0][1].classList.add('matched')


                scoreNum+=1;
                score.innerText=scoreNum


            }
            else if((clickedCards[1][0].name===clickedCards[1][1].name)&&(numberOfClicks!==0 && numberOfClicks===4)){
                console.log('Match')
                e.target.removeEventListener('click',disappearingAct);
                e.target.classList.add('matched')
                clickedCards[1][0].classList.add('matched')
                clickedCards[1][1].classList.add('matched')


                scoreNum+=1;
                score.innerText=scoreNum



            }

            else if((clickedCards[1][0].name===clickedCards[1][1].name)&&(numberOfClicks!==0 &&numberOfClicks%2===0)){
                function wrong(){
                        console.log("wrong")
                        for(let i=0;i<2;i++){

                            this.style.display="none"
                            bgCard.style.display="block"                        
                        }
                       
                }
              
              
                setTimeout(wrong,2000)


            }
        /////////////
            if (clickedCards[0][0].classList.contains('matched')&&clickedCards[0][1].classList.contains('matched')&&clickedCards[1][0].classList.contains('matched')&&clickedCards[1][1].classList.contains('matched')&& numberOfClicks>0){

                // scoreNum+=1;
                // score.innerText=scoreNum


                shuffleDeck(currentCardDeck);
                currentCardDeck[0].style.display="none";
                currentCardDeck[1].style.display="none";
                currentCardDeck[2].style.display="none";
                currentCardDeck[3].style.display="none";

                numberOfClicks=0;

                for(let i=0;i<currentCardDeck;i++){
                    bgCard[i].style.display="block"
                }

            
            // numberOfClicks=0;
            // // clickedCards=[["a","b"],["a","b"]]
            //     for (let i=0;i<currentCardDeck.length;i++){
            //         currentCardDeck[i].style.display="none"}
                

            
        }

        // if(e.target.classList.contains("matched")){
        //     e.target.removeEventListener('click',disappearingAct);

        // }




        
        
        
        }
        
    }






this.addEventListener('click',disappearingAct);

////Listen for click



// Matching Logic





//










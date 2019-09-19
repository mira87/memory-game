//have an array of cards
//cards are faced down
let board=document.querySelector('.card-area')

let cardbg1=document.createElement('img');
cardbg1.src="img/jcg_bg_red@3x.png";
cardbg1.className="card";


let cardbg2=document.createElement('img');
cardbg2.src="img/jcg_bg_red@3x.png";
cardbg2.className="card";


let cardbg3=document.createElement('img');
cardbg3.src="img/jcg_bg_red@3x.png";
cardbg3.className="card";


let cardbg4=document.createElement('img');
cardbg4.src="img/jcg_bg_red@3x.png";
cardbg4.className="card";




let cardbgHolder=[cardbg1,cardbg2,cardbg3,cardbg4];
for(let i=0;i<cardbgHolder.length;i++){
    board.appendChild(cardbgHolder[i]);
}

//random number chooses card deck



let numberOfClicks=0;






// let card1=document.createElement('img');
// card1.src="img/jcg_dino_red@3x.png";

// let card2=document.createElement('img');
// card2.src="img/jcg_geisha_red@3x.png";

// let card3=document.createElement('img');
// card3.src="img/jcg_home_red@3x.png";

// let card4=document.createElement('img');
// card4.src="img/jcg_post_red@3x.png";

// let card5=document.createElement('img');
// card5.src="img/jcg_sumo_red@3x.png";


// let card6=document.createElement('img');
// card6.src="img/jcg_volcano_red@3x.png";

let choices=[["img/jcg_volcano_red@3x.png","img/jcg_volcano_red@3x.png"],["img/jcg_sumo_red@3x.png","img/jcg_sumo_red@3x.png"],["img/jcg_post_red@3x.png","img/jcg_post_red@3x.png"],["img/jcg_home_red@3x.png","img/jcg_home_red@3x.png"],["img/jcg_geisha_red@3x.png","img/jcg_geisha_red@3x.png"],["img/jcg_dino_red@3x.png","img/jcg_dino_red@3x.png"]]
/////////////////////////////////

////////////TIMER/////////
// let timer=document.querySelector('.timer');
// timer.innerHTML=21;
// function clock(){
//     if(timer.innerHTML>0){
//         console.log(timer.innerHTML-=1)

        
//     }


// }
////////////
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

let score=document.querySelector('.score');
score.innerHTML=0;






////////////////
let compare=[[],[]];

    // cardbgHolder.push(first);
    // console.log(cardbgHolder.src)
// function randomSelection(){    

for(let i=0;i<choices.length;i++){

let randomDeck=Math.floor(Math.random()*3);
let randomly=Math.floor(Math.random()*3)
if(randomDeck===0){

   
    choices=[["img/jcg_volcano_red@3x.png","img/jcg_volcano_red@3x.png"],["img/jcg_sumo_red@3x.png","img/jcg_sumo_red@3x.png"]]

    if (randomly===0){
 
        
        



        function click0(){
            cardbgHolder[0].src=choices[0][1];
            numberOfClicks+=1;
            }
            function click1(){
                cardbgHolder[1].src=choices[0][1];
                numberOfClicks+=1
                }
                function click2(){
                    cardbgHolder[2].src=choices[1][1];
                    numberOfClicks+=1

                    }
                    function click3(){
                        cardbgHolder[3].src=choices[1][1];
                        numberOfClicks+=1

                        }

    }
  else if(randomly===1){
    

    function click0(){
        cardbgHolder[0].src=choices[1][1];
        numberOfClicks+=1

        }
        function click1(){
            cardbgHolder[1].src=choices[0][1];
            numberOfClicks+=1

            }
            function click2(){
                cardbgHolder[2].src=choices[1][1];
                numberOfClicks+=1

                }
                function click3(){
                    cardbgHolder[3].src=choices[0][1];
                    numberOfClicks+=1

                    }

   }
 

   else if(randomly===2){
   

    function click0(){
        cardbgHolder[0].src=choices[0][1];
        numberOfClicks+=1

        }
        function click1(){
            cardbgHolder[1].src=choices[1][1];
            numberOfClicks+=1

            }
            function click2(){
                cardbgHolder[2].src=choices[0][1];
                numberOfClicks+=1

                }
                function click3(){
                    cardbgHolder[3].src=choices[1][1];
                    numberOfClicks+=1

                    }

   }

   else if(randomly===3){
   

    function click0(){
        cardbgHolder[0].src=choices[1][1];
        numberOfClicks+=1

        }
        function click1(){
            cardbgHolder[1].src=choices[1][1];
            numberOfClicks+=1

            }
            function click2(){
                cardbgHolder[2].src=choices[0][1];
                numberOfClicks+=1

                }
                function click3(){
                    cardbgHolder[3].src=choices[0][1];
                    numberOfClicks+=1

                    }

   }
    
    

}
else if(randomDeck===1){
    choices=[["img/jcg_post_red@3x.png","img/jcg_post_red@3x.png"],["img/jcg_home_red@3x.png","img/jcg_home_red@3x.png"]]

if (randomly===0){
  
    function click0(){
        cardbgHolder[0].src=choices[0][1];
        numberOfClicks+=1
        console.log(numberOfClicks);


        }
        function click1(){
            cardbgHolder[1].src=choices[0][1];
            numberOfClicks+=1
            console.log(numberOfClicks);


            }
            function click2(){
                cardbgHolder[2].src=choices[1][1];
                numberOfClicks+=1
                console.log(numberOfClicks);


                }
                function click3(){
                    cardbgHolder[3].src=choices[1][1];
                    numberOfClicks+=1
                    console.log(numberOfClicks);


                    }

}
else if(randomly===1){


function click0(){
    cardbgHolder[0].src=choices[1][1];
    numberOfClicks+=1
    console.log(numberOfClicks);


    }
    function click1(){
        cardbgHolder[1].src=choices[0][1];
        numberOfClicks+=1
        console.log(numberOfClicks);


        }
        function click2(){
            cardbgHolder[2].src=choices[1][1];
            numberOfClicks+=1
            console.log(numberOfClicks);


            }
            function click3(){
                cardbgHolder[3].src=choices[0][1];
                numberOfClicks+=1
                console.log(numberOfClicks);


                }

}


else if(randomly===2){


function click0(){
    cardbgHolder[0].src=choices[0][1];
    numberOfClicks+=1
    console.log(numberOfClicks);


    }
    function click1(){
        cardbgHolder[1].src=choices[1][1];
        numberOfClicks+=1
        console.log(numberOfClicks);


        }
        function click2(){
            cardbgHolder[2].src=choices[0][1];
            numberOfClicks+=1
            console.log(numberOfClicks);


            }
            function click3(){
                cardbgHolder[3].src=choices[1][1];
                numberOfClicks+=1
                console.log(numberOfClicks);


                }

}

else if(randomly===3){


function click0(){
    cardbgHolder[0].src=choices[1][1];
    numberOfClicks+=1
    console.log(numberOfClicks);


    }
    function click1(){
        cardbgHolder[1].src=choices[1][1];
        numberOfClicks+=1
        console.log(numberOfClicks);


        }
        function click2(){
            cardbgHolder[2].src=choices[0][1];
            numberOfClicks+=1
            console.log(numberOfClicks);

        }

            function click3(){
                cardbgHolder[3].src=choices[0][1];
                numberOfClicks+=1
                console.log(numberOfClicks);


                }

}

}
else if(randomDeck===2){
    choices=[["img/jcg_dino_red@3x.png","img/jcg_dino_red@3x.png"],["img/jcg_geisha_red@3x.png","img/jcg_geisha_red@3x.png"]]
choices[0][0].className='dino';
choices[0][1].className='dino';
choices[1][0].className='dino';
choices[1][1].className='dino';
    if (randomly===0){
   
        function click0(e){
            cardbgHolder[0].src=choices[0][1];
            numberOfClicks+=1
            console.log(numberOfClicks);

            if(numberOfClicks===1){
                compare[0][0]=e.target;
            }
            else if(numberOfClicks===2){
                compare[0][1]=e.target;
            }
            else if(numberOfClicks===3){
                compare[1][0]=e.target;
            }
            else if(numberOfClicks===4){
                compare[1][1]=e.target;
            }
 
           
           if((compare[0][0].outerHTML===compare[0][1].outerHTML)&&(numberOfClicks===2)){
               console.log('match');
           }
          else if((compare[1][0]===compare[1][1])&&(numberOfClicks===4)){
            console.log('match');
        }
        else if((compare[0][0]!==compare[0][1])&&(numberOfClicks===2)){
            console.log('no match');
        }
        else if((compare[1][0]!==compare[1][1])&&(numberOfClicks===4)){
            console.log('no match');
        }

            


            }
            function click1(e){
                cardbgHolder[1].src=choices[0][1];
                numberOfClicks+=1
                console.log(numberOfClicks);


                if(numberOfClicks===1){
                    compare[0][0]=e.target;
                }
                else if(numberOfClicks===2){
                    compare[0][1]=e.target;
                }
                else if(numberOfClicks===3){
                    compare[1][0]=e.target;
                }
                else if(numberOfClicks===4){
                    compare[1][1]=e.target;
                }
    
               
               if((compare[0][0]===compare[0][1])&&(numberOfClicks===2)){
                   console.log('match');
               }
               else if((compare[1][0]===compare[1][1])&&(numberOfClicks===4)){
                console.log('match');
            }
            else if((compare[0][0]!==compare[0][1])&&(numberOfClicks===2)){
                console.log('no match');
            }
            else if((compare[1][0]!==compare[1][1])&&(numberOfClicks===4)){
                console.log('no match');
            }


                }
                function click2(e){
                    cardbgHolder[2].src=choices[1][1];
                    numberOfClicks+=1
                    console.log(numberOfClicks);



                    if(numberOfClicks===1){
                        compare[0][0]=e.target;
                    }
                    else if(numberOfClicks===2){
                        compare[0][1]=e.target;
                    }
                    else if(numberOfClicks===3){
                        compare[1][0]=e.target;
                    }
                    else if(numberOfClicks===4){
                        compare[1][1]=e.target;
                    }
        
                   
                   if((compare[0][0]===compare[0][1])&&(numberOfClicks===2)){
                       console.log('match');
                   }
                   else if((compare[1][0]===compare[1][1])&&(numberOfClicks===4)){
                    console.log('match');
                }
               else if((compare[0][0]!==compare[0][1])&&(numberOfClicks===2)){
                    console.log('no match');
                }
                else if((compare[1][0]!==compare[1][1])&&(numberOfClicks===4)){
                    console.log('no match');
                }
    

                    }
                    function click3(e){
                        cardbgHolder[3].src=choices[1][1];
                        numberOfClicks+=1
                        console.log(numberOfClicks);



                        if(numberOfClicks===1){
                            compare[0][0]=e.target;
                        }
                        else if(numberOfClicks===2){
                            compare[0][1]=e.target;
                        }
                        else if(numberOfClicks===3){
                            compare[1][0]=e.target;
                        }
                        else if(numberOfClicks===4){
                            compare[1][1]=e.target;
                        }
            
                       
                       if((compare[0][0]===compare[0][1])&&(numberOfClicks===2)){
                           console.log('match');
                       }
                      else if((compare[1][0]===compare[1][1])&&(numberOfClicks===4)){
                        console.log('match');
                    }
                    else if((compare[0][0]!==compare[0][1])&&(numberOfClicks===2)){
                        console.log('no match');
                    }
                    else if((compare[1][0]!==compare[1][1])&&(numberOfClicks===4)){
                        console.log('no match');
                    }
        


                        }

    }
  else if(randomly===1){





    function click0(e){
        cardbgHolder[0].src=choices[1][1];
        numberOfClicks+=1;
        console.log(numberOfClicks);



        if(numberOfClicks===1){
            compare[0][0]=e.target;
        }
        else if(numberOfClicks===2){
            compare[0][1]=e.target;
        }
        else if(numberOfClicks===3){
            compare[1][0]=e.target;
        }
        else if(numberOfClicks===4){
            compare[1][1]=e.target;
        }

       
       if(compare[0][0]===compare[0][1]&&numberOfClicks===2){

           console.log('match');
       }
      else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
        console.log('match');
    }
    else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
        console.log('no match');
    }
    else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
        console.log('no match');
    }


        }
        function click1(e){
            cardbgHolder[1].src=choices[0][1];
            numberOfClicks+=1
            console.log(numberOfClicks);



            if(numberOfClicks===1){
                compare[0][0]=e.target;
            }
            else if(numberOfClicks===2){
                compare[0][1]=e.target;
            }
            else if(numberOfClicks===3){
                compare[1][0]=e.target;
            }
            else if(numberOfClicks===4){
                compare[1][1]=e.target;
            }

           
           if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
               console.log('match');
           }
           else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
            console.log('match');
        }
        else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
            console.log('no match');
        }
        else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
            console.log('no match');
        }


            }
            function click2(e){
                cardbgHolder[2].src=choices[1][1];
                numberOfClicks+=1
                console.log(numberOfClicks);





                if(numberOfClicks===1){
                    compare[0][0]=e.target;
                }
                else if(numberOfClicks===2){
                    compare[0][1]=e.target;
                }
                else if(numberOfClicks===3){
                    compare[1][0]=e.target;
                }
                else if(numberOfClicks===4){
                    compare[1][1]=e.target;
                }
    
               
               if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
                   console.log('match');
               }
               else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
                console.log('match');
            }
            else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
                console.log('no match');
            }
            else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
                console.log('no match');
            }


                }
                function click3(e){
                    cardbgHolder[3].src=choices[0][1];
                    numberOfClicks+=1
                    console.log(numberOfClicks);




                    if(numberOfClicks===1){
                        compare[0][0]=e.target;
                    }
                    else if(numberOfClicks===2){
                        compare[0][1]=e.target;
                    }
                    else if(numberOfClicks===3){
                        compare[1][0]=e.target;
                    }
                    else if(numberOfClicks===4){
                        compare[1][1]=e.target;
                    }

                 
        
                   
                   if((compare[0][0]===compare[0][1])&&(numberOfClicks===2)){
                       console.log('match');
                   }
                  else if((compare[1][0]===compare[1][1])&&(numberOfClicks===4)){
                    console.log('match');
                }
                else if((compare[0][0]!==compare[0][1])&&(numberOfClicks===2)){
                    console.log('no match');
                }
                else if((compare[1][0]!==compare[1][1])&&(numberOfClicks===4)){
                    console.log('no match');
                }
    
                    
                    }

   }
 

   else if(randomly===2){
  

    function click0(e){
        cardbgHolder[0].src=choices[0][1];
        numberOfClicks+=1
        console.log(numberOfClicks);

        if(numberOfClicks===1){
            compare[0][0]=e.target;
        }
        else if(numberOfClicks===2){
            compare[0][1]=e.target;
        }
        else if(numberOfClicks===3){
            compare[1][0]=e.target;
        }
        else if(numberOfClicks===4){
            compare[1][1]=e.target;
        }

       
       if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
           console.log('match');
       }
       else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
        console.log('match');
    }
    else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
        console.log('no match');
    }
    else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
        console.log('no match');
    }



        }
        function click1(e){
            cardbgHolder[1].src=choices[1][1];
            numberOfClicks+=1
            console.log(numberOfClicks);

            if(numberOfClicks===1){
                compare[0][0]=e.target;
            }
            else if(numberOfClicks===2){
                compare[0][1]=e.target;
            }
            else if(numberOfClicks===3){
                compare[1][0]=e.target;
            }
            else if(numberOfClicks===4){
                compare[1][1]=e.target;
            }

           
           if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
               console.log('match');
           }
          else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
            console.log('match');
        }
         else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
            console.log('no match');
        }
        else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
            console.log('no match');
        }



            }
            function click2(e){
                cardbgHolder[2].src=choices[0][1];
                numberOfClicks+=1
                console.log(numberOfClicks);


                if(numberOfClicks===1){
                    compare[0][0]=e.target;
                }
                else if(numberOfClicks===2){
                    compare[0][1]=e.target;
                }
                else if(numberOfClicks===3){
                    compare[1][0]=e.target;
                }
                else if(numberOfClicks===4){
                    compare[1][1]=e.target;
                }
    
               
               if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
                   console.log('match');
               }
               else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
                console.log('match');
            }
            else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
                console.log('no match');
            }
            else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
                console.log('no match');
            }



                }
                function click3(e){
                    cardbgHolder[3].src=choices[1][1];
                    numberOfClicks+=1
                    console.log(numberOfClicks);



                    if(numberOfClicks===1){
                        compare[0][0]=e.target;
                    }
                    else if(numberOfClicks===2){
                        compare[0][1]=e.target;
                    }
                    else if(numberOfClicks===3){
                        compare[1][0]=e.target;
                    }
                    else if(numberOfClicks===4){
                        compare[1][1]=e.target;
                    }
        
                   
                   if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
                       console.log('match');
                   }
                   else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
                    console.log('match');
                }
                else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
                    console.log('no match');
                }
                else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
                    console.log('no match');
                }
    

                    }

   }

   else if(randomly===3){
   

  
   function click0(e){
    cardbgHolder[0].src=choices[1][1];
    numberOfClicks+=1
    console.log(numberOfClicks);



    if(numberOfClicks===1){
        compare[0][0]=e.target;
    }
    else if(numberOfClicks===2){
        compare[0][1]=e.target;
    }
    else if(numberOfClicks===3){
        compare[1][0]=e.target;
    }
    else if(numberOfClicks===4){
        compare[1][1]=e.target;
    }

   
   if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
       console.log('match');
   }
   else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
    console.log('match');
}
else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
    console.log('no match');
}
else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
    console.log('no match');
}



    }
    function click1(){
        cardbgHolder[1].src=choices[1][1];
        numberOfClicks+=1
        console.log(numberOfClicks);



        if(numberOfClicks===1){
            compare[0][0]=e.target;
        }
        else if(numberOfClicks===2){
            compare[0][1]=e.target;
        }
        else if(numberOfClicks===3){
            compare[1][0]=e.target;
        }
        else if(numberOfClicks===4){
            compare[1][1]=e.target;
        }

       
       if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
           console.log('match');
       }
      else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
        console.log('match');
    }
    else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
        console.log('no match');
    }
    else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
        console.log('no match');
    }



        }
        function click2(e){
            cardbgHolder[2].src=choices[0][1];
            numberOfClicks+=1
            console.log(numberOfClicks);



            if(numberOfClicks===1){
                compare[0][0]=e.target;
            }
            else if(numberOfClicks===2){
                compare[0][1]=e.target;
            }
            else if(numberOfClicks===3){
                compare[1][0]=e.target;
            }
            else if(numberOfClicks===4){
                compare[1][1]=e.target;
            }

           
           if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
               console.log('match');
           }
           else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
            console.log('match');
        }
        else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
            console.log('no match');
        }
        else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
            console.log('no match');
        }



            }
            function click3(e){
                cardbgHolder[3].src=choices[0][1];
                numberOfClicks+=1
                console.log(numberOfClicks);

                if(numberOfClicks===1){
                    compare[0][0]=e.target;
                }
                else if(numberOfClicks===2){
                    compare[0][1]=e.target;
                }
                else if(numberOfClicks===3){
                    compare[1][0]=e.target;
                }
                else if(numberOfClicks===4){
                    compare[1][1]=e.target;
                }
    
               
               if(compare[0][0]===compare[0][1]&&numberOfClicks===2){
                   console.log('match');
               }
               else if(compare[1][0]===compare[1][1]&&numberOfClicks===4){
                console.log('match');
            }
            else if(compare[0][0]!==compare[0][1]&&numberOfClicks===2){
                console.log('no match');
            }
            else if(compare[1][0]!==compare[1][1]&&numberOfClicks===4){
                console.log('no match');
            }




                }
            }
            if((compare[0][0]===compare[0][1])&&(compare[1][0]===compare[1][1])&&(numberOfClicks===4)){
                alert("You won")
            }
            
           

   
}
   


   // // console.log(randomDeck);
// console.log


// //shuffle array of cards
// //shuffle how cards appear on board




//only 2 pairs matchingconsole.log(numberOfClicks);


// console.log(choices[i][i])
}

// }

cardbg1.addEventListener('click',click0)
cardbg2.addEventListener('click',click1)
cardbg3.addEventListener('click',click2)
cardbg4.addEventListener('click',click3)

//TIMER
// setInterval(clock,1000);
// if (timer.innerHTML===0){
//     clearInterval(clock);
// }

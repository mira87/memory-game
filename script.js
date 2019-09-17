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










let card1=document.createElement('img');
card1.src="img/jcg_dino_red@3x.png";

let card2=document.createElement('img');
card2.src="img/jcg_geisha_red@3x.png";

let card3=document.createElement('img');
card3.src="img/jcg_home_red@3x.png";

let card4=document.createElement('img');
card4.src="img/jcg_post_red@3x.png";

let card5=document.createElement('img');
card5.src="img/jcg_sumo_red@3x.png";


let card6=document.createElement('img');
card6.src="img/jcg_volcano_red@3x.png";

let choices=[["img/jcg_volcano_red@3x.png","img/jcg_volcano_red@3x.png"],["img/jcg_sumo_red@3x.png","img/jcg_sumo_red@3x.png"],["img/jcg_post_red@3x.png","img/jcg_post_red@3x.png"],["img/jcg_home_red@3x.png","img/jcg_home_red@3x.png"],["img/jcg_geisha_red@3x.png","img/jcg_geisha_red@3x.png"],["img/jcg_dino_red@3x.png","img/jcg_dino_red@3x.png"]]




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
            }
            function click1(){
                cardbgHolder[1].src=choices[0][1];
                }
                function click2(){
                    cardbgHolder[2].src=choices[1][1];
                    }
                    function click3(){
                        cardbgHolder[3].src=choices[1][1];
                        }

    }
  else if(randomly===1){
    

    function click0(){
        cardbgHolder[0].src=choices[1][1];
        }
        function click1(){
            cardbgHolder[1].src=choices[0][1];
            }
            function click2(){
                cardbgHolder[2].src=choices[1][1];
                }
                function click3(){
                    cardbgHolder[3].src=choices[0][1];
                    }

   }
 

   else if(randomly===2){
   

    function click0(){
        cardbgHolder[0].src=choices[0][1];
        }
        function click1(){
            cardbgHolder[1].src=choices[1][1];
            }
            function click2(){
                cardbgHolder[2].src=choices[0][1];
                }
                function click3(){
                    cardbgHolder[3].src=choices[1][1];
                    }

   }

   else if(randomly===3){
   

    function click0(){
        cardbgHolder[0].src=choices[1][1];
        }
        function click1(){
            cardbgHolder[1].src=choices[1][1];
            }
            function click2(){
                cardbgHolder[2].src=choices[0][1];
                }
                function click3(){
                    cardbgHolder[3].src=choices[0][1];
                    }

   }
    
    

}
else if(randomDeck===1){
    choices=[["img/jcg_post_red@3x.png","img/jcg_post_red@3x.png"],["img/jcg_home_red@3x.png","img/jcg_home_red@3x.png"]]

if (randomly===0){
  
    function click0(){
        cardbgHolder[0].src=choices[0][1];
        }
        function click1(){
            cardbgHolder[1].src=choices[0][1];
            }
            function click2(){
                cardbgHolder[2].src=choices[1][1];
                }
                function click3(){
                    cardbgHolder[3].src=choices[1][1];
                    }

}
else if(randomly===1){


function click0(){
    cardbgHolder[0].src=choices[1][1];
    }
    function click1(){
        cardbgHolder[1].src=choices[0][1];
        }
        function click2(){
            cardbgHolder[2].src=choices[1][1];
            }
            function click3(){
                cardbgHolder[3].src=choices[0][1];
                }

}


else if(randomly===2){


function click0(){
    cardbgHolder[0].src=choices[0][1];
    }
    function click1(){
        cardbgHolder[1].src=choices[1][1];
        }
        function click2(){
            cardbgHolder[2].src=choices[0][1];
            }
            function click3(){
                cardbgHolder[3].src=choices[1][1];
                }

}

else if(randomly===3){


function click0(){
    cardbgHolder[0].src=choices[1][1];
    }
    function click1(){
        cardbgHolder[1].src=choices[1][1];
        }
        function click2(){
            cardbgHolder[2].src=choices[0][1];
            }
            function click3(){
                cardbgHolder[3].src=choices[0][1];
                }

}

}
else if(randomDeck===2){
    choices=[["img/jcg_dino_red@3x.png","img/jcg_dino_red@3x.png"],["img/jcg_geisha_red@3x.png","img/jcg_geisha_red@3x.png"]]


    if (randomly===0){
   
        function click0(){
            cardbgHolder[0].src=choices[0][1];
            }
            function click1(){
                cardbgHolder[1].src=choices[0][1];
                }
                function click2(){
                    cardbgHolder[2].src=choices[1][1];
                    }
                    function click3(){
                        cardbgHolder[3].src=choices[1][1];
                        }

    }
  else if(randomly===1){





    function click0(){
        cardbgHolder[0].src=choices[1][1];
        }
        function click1(){
            cardbgHolder[1].src=choices[0][1];
            }
            function click2(){
                cardbgHolder[2].src=choices[1][1];
                }
                function click3(){
                    cardbgHolder[3].src=choices[0][1];
                    }

   }
 

   else if(randomly===2){
  

    function click0(){
        cardbgHolder[0].src=choices[0][1];
        }
        function click1(){
            cardbgHolder[1].src=choices[1][1];
            }
            function click2(){
                cardbgHolder[2].src=choices[0][1];
                }
                function click3(){
                    cardbgHolder[3].src=choices[1][1];
                    }

   }

   else if(randomly===3){
   

  
   function click0(){
    cardbgHolder[0].src=choices[1][1];
    }
    function click1(){
        cardbgHolder[1].src=choices[1][1];
        }
        function click2(){
            cardbgHolder[2].src=choices[0][1];
            }
            function click3(){
                cardbgHolder[3].src=choices[0][1];
                }
            }
   
   
}
   


   // // console.log(randomDeck);
// console.log


// //shuffle array of cards
// //shuffle how cards appear on board




//only 2 pairs matching

console.log(choices[i][i])
}

// }


cardbg1.addEventListener('click',click0)
cardbg2.addEventListener('click',click1)
cardbg3.addEventListener('click',click2)
cardbg4.addEventListener('click',click3)
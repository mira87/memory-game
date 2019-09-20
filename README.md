# Japan Memory Duel

## This is a flash card game that tests your memory. Match pairs and receive 1 point.

---

![](readimg/screenshot1.png)


---
###Motivation

The motivation of this game was based on the fact I wanted it to look appealing and for viewers to see it and become interested in playing it. I wanted the images to draw the viewer and of course I wanted them to enjoy my handy work.
:+1: 

---
##Coding Languages Used

The coding languages used were HTML, CSS, and JavaScript. 

The HTML was used to lay the skeleteon of the game. It was used to link the files, and to set nodes that could be grabbed with my JavaScript. The Japan logo was added directly in the HTML. The cards were as well. They were styled of course in the CSS. I was actually able to determine if a card appeared as the background or front facing by using the following syntax in my HTML.

```
                <img alt="dino" name="dino" data-img="img/jcg_dino_red@3x.png"  src="img/jcg_bg_red@3x.png" src class="dino faceCard">



```

All cards by default appeared as background cards. However, I was able to  allow it to change upon click may adding the following code in my JavaScript.

```
        e.target.src=e.target.dataset.img;


```

![](readimg/screenshot3.png)
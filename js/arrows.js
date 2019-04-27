function moveRect(e){
     
    var pigeonRect = document.getElementById("pigeon");
    // получаем стиль для goluba
    var cs = window.getComputedStyle(pigeonRect);
    // исходные координаты по маржину 
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
    var food = document.getElementsByClassName("food");
    var fieldWidth = document.getElementById("field").scrollWidth;  //1000;
    var fieldHeight = document.getElementById("field").scrollHeight; //400;

    //Shagaet
    function pictRight(){    
         
        if (food.length == 0) return;  
        if (pigeonRect.style.backgroundImage == 'url("/img/left_leg.jpg")') {
            pigeonRect.style.backgroundImage = 'url("/img/right_leg.jpg")';
        } else 
            pigeonRect.style.backgroundImage = 'url("/img/left_leg.jpg")';         
    }

    function pictLeft(){   
        
        if (food.length == 0) return;       
        if (pigeonRect.style.backgroundImage == 'url("/img/dir_left_left.jpg")'){
            pigeonRect.style.backgroundImage = 'url("/img/dir_left_right.jpg")';
        } else 
            pigeonRect.style.backgroundImage = 'url("/img/dir_left_left.jpg")';         
    }

//Zhret
    function gotAFood(){
       
        //Kogda konchilas eda smotrit po storonam :)
        if (food.length == 0 && pigeonRect.style.backgroundImage == 'url("/img/glance_left.jpg")')
            pigeonRect.style.backgroundImage = 'url("/img/glance_right.jpg")';
            else if  (food.length == 0)
                pigeonRect.style.backgroundImage = 'url("/img/glance_left.jpg")';
         //Kogda nahodit edu - est   
        for (var i = 0; i < food.length; i++){            
            if (left == parseInt(food[i].style.marginLeft) && 
                top == parseInt(food[i].style.marginTop)) {
                food[i].parentNode.removeChild(food[i]);
                pigeonRect.style.backgroundImage = 'url("/img/v2/8.jpg")';                
            }
        }
    }


//KNOPKI

    switch(e.keyCode){         
        case 37:  // если нажата клавиша влево
            if(left>0) 
                pigeonRect.style.marginLeft = left - 10 + "px";
                pictLeft(); 
                gotAFood();           
            break;
        case 38:   // если нажата клавиша вверх
            if(top>0)
                pigeonRect.style.marginTop = top - 10 + "px";
                gotAFood();
            break;
        case 39:   // если нажата клавиша вправо
        
            if(left < fieldWidth - 50)
                pigeonRect.style.marginLeft = left + 10 + "px";
                pictRight();
                gotAFood();            
            break;
        case 40:   // если нажата клавиша вниз
            if(top < fieldHeight - 50) 
                pigeonRect.style.marginTop = top + 10 + "px";
                gotAFood();
            break;
    }
}
 //if(top < document.documentElement.clientHeight - 100) togda po wsemu viewportu budet hodit'
 //if(left < document.documentElement.clientWidth - 100) 
addEventListener("keydown", moveRect);
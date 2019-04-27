function start(){
	document.getElementById("pigeon").style.display = "block";
    document.getElementById("field").style.display = "block";
    document.getElementById("foodDeployBtn").style.display = "inline-block";
    document.getElementById("stop").style.display = "inline-block";
    var header = document.getElementsByTagName("header");
    header[0].style.display = "none";
   foodDel();
} 
	 
function stop(){
	document.getElementById("pigeon").style.display = "none";
    document.getElementById("field").style.display = "none";
    document.getElementById("foodDeployBtn").style.display = "none";
    document.getElementById("stop").style.display = "none";
    var header = document.getElementsByTagName("header");
    header[0].style.display = "block";
    document.getElementById("pigeon").style.marginTop = 0;
    document.getElementById("pigeon").style.marginLeft = 0;
    foodDel();
}

function foodDeploy(){    //RAZMESSHENIE EDY
    var field, food, att;
    field = document.getElementById("field");    
    for (var i=0; i < 10; i++){        
        food = document.createElement("DIV"); 
        att = document.createAttribute("class");
        att.value = "food";       
        food.setAttributeNode(att);
        field.appendChild(food);
    }
    var top;
    var left;
    var setFoodCoord = document.getElementsByClassName("food");    
    for (i = 0; i<setFoodCoord.length; i++) { 
        top = Math.floor(Math.random() * 36) * 10; //within 0 - 350 step 10
        left = Math.floor(Math.random() * 96) * 10;  //  within 0 - 950 step 10  
        setFoodCoord[i].style.marginLeft = left + "px";
        setFoodCoord[i].style.marginTop = top + "px";
        setFoodCoord[i].style.display = "block";
    }   
}

function foodDel(){
    var food = document.getElementsByClassName("food");
    while (food.length > 0){
        var i = food.length - 1;
        food[i].parentNode.removeChild(food[i]);
    }
}
var attackcount = 0


function init() {
  dstand(); 
  
}



function dstand() {
  var don = "<img src='images/don.gif'>"
  var ok = document.getElementById("donatello").innerHTML = don;

  var mikey = "<img src='images/mikestand.png' height='125px' width='100px'>"
  var ok2 = document.getElementById("mikey").innerHTML = mikey;
}

function dattack1() {

  if (attackcount === 0) {
    document.getElementById("donatello").innerHTML= "<img src='images/donattack1.gif'>"; 
    var ok = setTimeout(function(){dstand("donatello")},1680); 
    attackcount = 1
    } else if (attackcount === 1) {
    document.getElementById("donatello").innerHTML= "<img src='images/donattack2.gif'>"; 
    var ok = setTimeout(function(){dstand("donatello")},1680); 
    attackcount = 2
    } else if (attackcount === 2) {
    document.getElementById("donatello").innerHTML= "<img src='images/donattack3.gif'>"; 
    var ok = setTimeout(function(){dstand("donatello")},1680); 
    attackcount = 0
    }
};

function mattack1() {
  document.getElementById("mikey").innerHTML= "<img src='images/mikeattack.gif' height='125px' width='100px'>"; 
  var ok = setTimeout(function(){dstand("mikey")},2000); 

   
}






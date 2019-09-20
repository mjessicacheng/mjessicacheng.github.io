  
  window.onload = function() {

    document.getElementsByClassName('spinning')[0].style.animation = "forwards infinite";
    document.getElementsByClassName('spinning')[0].style.animationPlayState = "paused";


    var items = document.querySelectorAll('figure')
    for (index = 0, length = items.length ; index < length; index++) {
      items[index].style.color = "rgba(0,0,0,1)";
    }

    document.getElementsByClassName('links')[0].style.visibility = "visible";
    document.getElementsByClassName('links')[0].style.opacity = "1";
    document.getElementById("sidebar").style.borderLeft = "1px solid rgba(0,0,0,0.6)";

    document.getElementsByClassName("areyoukiddingme")[0].style.opacity = "1";
    document.getElementsByClassName("yeah")[0].style.opacity = "1";
    document.getElementsByClassName("yeah")[0].style.transform = "rotate(-5deg)";
    
  };  





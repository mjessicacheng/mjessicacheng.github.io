// function createCookie(name,value,days) {
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime()+(1*24*60*60*1000));
//     var expires = "; expires="+date.toGMTString();
//   }
//   else var expires = "";
//   document.cookie = name+"="+value+expires+"; path=/";
// }

// function readCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for(var i=0;i < ca.length;i++) {
//     var c = ca[i];
//     while (c.charAt(0)==' ') c = c.substring(1,c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//   }
//   return null;
// }

// function eraseCookie(name) {
//   createCookie(name,"",-1);
// }

// if (!readCookie('alreadyShown')) {

//   window.onload = function(){

//     setTimeout(function(){
//     document.getElementsByClassName('spinning')[0].style.WebkitTransform = "translateZ( -100px )";
//     var items = document.querySelectorAll('figure')
//     for (index = 0, length = items.length ; index < length; index++) {
//       items[index].style.color = "rgba(0,0,0,1)";
//     }
//     document.getElementsByClassName('links')[0].style.visibility = "visible";
//     document.getElementsByClassName('links')[0].style.opacity = "1.0";
//     document.getElementById("sidebar").style.borderLeft = "1px solid rgba(0,0,0,0.6)";

//     document.getElementsByClassName("areyoukiddingme")[0].style.opacity = "1";
//     document.getElementsByClassName("yeah")[0].style.opacity = "1";
//     document.getElementsByClassName("yeah")[0].style.transform = "rotate(-5deg)";
//   }, 4000);
// };
// createCookie('alreadyShown', true);
// }
// else {
  
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
// }




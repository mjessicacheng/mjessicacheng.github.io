function mouseon() {
  document.getElementById('cube').style.WebkitTransform = "rotate3d(1,1,1,0deg)"
  document.getElementById('cube').style.color = "rgba(0,0,0,1)";
  document.getElementsByClassName('front')[0].style.color = "rgba(0,0,0,0)";
  document.getElementsByClassName('front')[0].style.opacity = "0";

  document.getElementsByClassName('top')[0].style.WebkitTransform = "rotateX(-180deg)"
  document.getElementsByClassName('bottom')[0].style.WebkitTransform = "rotateX(180deg)";
  document.getElementsByClassName('left')[0].style.WebkitTransform = "rotateY(0deg) translateX(-100px)";
  document.getElementsByClassName('right')[0].style.WebkitTransform = "rotateY(0deg) translateX(100px)";
  document.getElementsByClassName('front')[0].style.WebkitTransform = "translateZ(50px)";
  document.getElementsByClassName('back')[0].style.WebkitTransform = "translateZ(0px)";

}

function mouseoff() {
  document.getElementById('cube').style.WebkitTransform = "rotate3d(1,1,1,20deg)"
  document.getElementById('cube').style.color = "rgba(0,0,0,0)";
  document.getElementsByClassName('front')[0].style.color = "rgba(0,0,0,1)";
  document.getElementsByClassName('front')[0].style.opacity = "1";

  document.getElementsByClassName('top')[0].style.WebkitTransform = "rotateX(90deg) translateY(50px)";
  document.getElementsByClassName('bottom')[0].style.WebkitTransform = "rotateX(-90deg) translateY(-50px) ";
  document.getElementsByClassName('left')[0].style.WebkitTransform = "rotateY(-90deg) translateX(50px) translateZ(100px)";
  document.getElementsByClassName('right')[0].style.WebkitTransform = "rotateY(90deg) translateX(-50px) translateZ(100px)";
  document.getElementsByClassName('front')[0].style.WebkitTransform = "rotateY(0deg) translateZ(50px)";
  document.getElementsByClassName('back')[0].style.WebkitTransform = "translateZ(-50px)";
}


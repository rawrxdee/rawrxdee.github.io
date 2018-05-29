var i = 0;
var txt = 'We also think we can program.';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function responsiveSize() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
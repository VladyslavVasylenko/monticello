"use strict";

let modal2 = document.getElementById('myModal2');
let btn2 = document.getElementById("myBtn2");
let closed2 = document.getElementsByClassName("closed2")[0];

btn2.onclick = function() {
  modal.style.display = "block";
}

closed2.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}
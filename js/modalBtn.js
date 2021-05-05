"use strict";

let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let closed = document.getElementsByClassName("closed")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closed.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
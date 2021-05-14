"use strict";

let gallery = (`
  <div class="gallery__conteiner">
    <div class="gallery-firstblock">
      <img src="./image/jpeg/scott-webb-176434.jpg" alt="scott-web" class="gallery-firstblock__bgimg">
    </div>

    <div class="gallery-secblock">
      <img src="./image/jpeg/Gphotos-13323p6Bdc0uhr8Bq.jpg" alt="Gphotos" class="gallery-secblock__img">
      <img src="./image/jpeg/Gfuse-brussels-169216.jpg" alt="Gfuse-brussels" class="gallery-secblock__img">
    </div>

    <div class="gallery-thrblock">
      <img src="./image/jpeg/Gecho-grid-156713.jpg" alt="Gecho" class="gallery-thrblock__img">
      <img src="./image/jpeg/Gtu-tram-pham-202263.jpg" alt="Gtu-tram" class="gallery-thrblock__img">
    </div>
  </div>
`);

const noImg = '<p class="gallery__desc">Sorry but we don`t have more image.</p>';

let clicks = 0; 

let btnClick = document.getElementById("btnClick");

btnClick.onclick = function() {
  if(clicks < 3) {
    let element = document.createElement('div');
    element.innerHTML = gallery;
    galleries.appendChild(element);
    clicks++;
  } else {
    let noImage = document.createElement('p');
    noImage.innerHTML = noImg;
    galleries.appendChild(noImage);
    // document.getElementById('galleries').innerHTML = noImg;
  }
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


let videoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}


let i, everyImg, modal, modalImg, captionText,span;
 everyImg=document.getElementById("imgAll",).getElementsByTagName("img");
 modal = document.getElementById('myModal');
 modalImg = document.getElementById("img01");
 captionText = document.getElementById("caption");
 span = document.getElementsByClassName("close");
 for(i=0; i<everyImg.length; i++){ everyImg[i].onclick = process; }

function process(){  
  modal.style.display = "block";    
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  span[0].onclick=function() {
    modal.style.display="none";
  };
  }  




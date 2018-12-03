var measure = document.getElementById('measure');
var birth = document.getElementById('birth');
var fromTop = window.pageYOffset;


// measure.innerHTML = "0";

window.onscroll = function (){
  fromTop = window.pageYOffset;
  console.log(fromTop);
  // measure.style.top = 100 + fromTop + "px";
  // measure.innerHTML = fromTop;

  if(fromTop>300){
    birth.style.left = '50px';
    birth.style.opacity = 1;
  }else {
    birth.style.left = '750px';
    birth.style.opacity = 0;
  }

  if(fromTop>1000){
    mexico.style.right = '50px';
    mexico.style.opacity = 1;
  }else {
    mexico.style.right = '750px'
    mexico.style.opacity = 0;
  }

  if(fromTop>1700){
    sereno1.style.left = '50px';
    sereno1.style.opacity = 1;
  }else{
    sereno1.style.left = '750px';
    sereno1.style.opacity = 0;
  }

  if(fromTop>2350){
    alhambra.style.left = '650px';
    alhambra.style.opacity = 1;
  }else {
    alhambra.style.left = '-50px';
    alhambra.style.opacity = 0;
  }

  if(fromTop>3100){
    terrace.style.right = '650px';
    terrace.style.opacity = 1;
  }else {
    terrace.style.right = '-50px';
    terrace.style.opacity = 0;
  }

  if(fromTop>3750){
    sereno2.style.left = '650px';
    sereno2.style.opacity = 1;
  }else {
    sereno2.style.left = '-50px';
    sereno2.style.opacity = 0;
  }

  if(fromTop>4385){
    highschool.style.right = '650px';
    highschool.style.opacity = 1;
  }else {
    highschool.style.right = '-50px';
    highschool.style.opacity = 0;
  }

  if(fromTop>5000){
    rugby.style.left = '650px';
    rugby.style.opacity = 1;
  }else {
    rugby.style.left = '-50px';
    rugby.style.opacity = 0;
  }

  if(fromTop>5645){
    eastbay.style.right = '650px';
    eastbay.style.opacity = 1;
  }else {
    eastbay.style.right = '-50px';
    eastbay.style.opacity = 0;
  }

  if(fromTop>6245){
    tke.style.left = '650px';
    tke.style.opacity = 1;
  }else {
    tke.style.left = '-50px';
    tke.style.opacity = 0;
  }
}

// Get the modal
var modal = document.getElementById('birthmodal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('birth');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



var modal = document.getElementById('mexicomodal');

var img = document.getElementById('mexico');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('serenomodal');

var img = document.getElementById('sereno1');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('alhambramodal');

var img = document.getElementById('alhambra');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('terracemodal');

var img = document.getElementById('terrace');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('serenomodal2');

var img = document.getElementById('sereno2');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('highmodal');

var img = document.getElementById('highschool');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('rugbymodal');

var img = document.getElementById('rugby');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('eastmodal');

var img = document.getElementById('eastbay');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('tkemodal');

var img = document.getElementById('tke');
var captionText = document.getElementsByClassName("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

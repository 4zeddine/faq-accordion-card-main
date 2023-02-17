var len =document.querySelectorAll(".accordion-question").length;
var i=0;
while(i<len){
  document.querySelectorAll(".accordion-question")[i].addEventListener("click",function (e) {
    this.classList.toggle('open');
    this.parentElement.parentElement.querySelector('.accordion-collapse').classList.toggle('open');
  });
  i++;
}


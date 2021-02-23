function setBodyColor(s,b){
  document.querySelector('body').style.color = s;
  document.querySelector('body').style.backgroundColor = b;
}
function setContentsColor(color){
  for(var i=0; i<100; i++){
  document.getElementsByTagName('h1')[i].style.color = color;
  document.getElementsByTagName('h1')[i].style.borderColor = color;
  document.getElementsByTagName('ol')[i].style.borderColor = color;}
}
function setLinkColor(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length){
    alist[i].style.color = color;
    i = i + 1 ;
  }
}
function nightDay(self){
  if(self.value ==='night') {
    self.value = 'day';
    setBodyColor('yellow','gray');
    setLinkColor('yellow');
    setContentsColor('yellow');
  } else {
    self.value = 'night';
    setBodyColor('black','white');
    setLinkColor('red');
    setContentsColor('pink');
    }
}

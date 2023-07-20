var header = document.getElementById('header')
var headertext = document.getElementById('headertext')
let desc = document.getElementById('description')
let background = document.getElementById('textBackground')
let font = document.getElementById('textFontColor')
const Btnchange = document.getElementById('Btnchange')

// we use name function
Btnchange.onclick=function(){
    // use conditional statement
    if(desc.value.length <= 50){
        headertext.textContent = desc.value;
        header.style.background = background.value;
        header.style.color = font.value;
    }else{
        headertext.innerHTML = '<small> Description is too long please reduce...</small>';
    }
}
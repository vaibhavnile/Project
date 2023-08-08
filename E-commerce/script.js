const navbar=document.getElementById('navbar');
const bar=document.getElementById('bar');

if(bar){
    bar.addEventListener('click', function() {
        navbar.classList.add('active');
    });
}


let close=document.getElementById("close");

if(close){
    close.addEventListener('click',function(){
        navbar.classList.add('unactive');
    })
}
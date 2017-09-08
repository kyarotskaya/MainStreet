var images = document.getElementsByClassName('image');
window.addEventListener('scroll', addAnimation);
function addAnimation(){
    if (window.pageYOffset >= 1820 ){
        for (var i = 0; i < 3; i++){
            images[i].classList.remove('no-animation');
        }
    }
}
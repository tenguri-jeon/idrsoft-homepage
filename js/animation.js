intro();
function intro(params) {
    
    const $introTextWrap = document.getElementsByClassName('intro-text-wrap');
    const $moon = document.getElementsByClassName('moon');
    const $saturn = document.getElementsByClassName('saturn');
    const $earth = document.getElementById('earth');
    const $mainText = document.getElementsByClassName('main-text');
    const $scroll = document.getElementsByClassName('scroll-down');
    const $video = document.querySelector('video');

    window.addEventListener('load', ()=>{
        setTimeout(function(){
            $introTextWrap[0].classList.add('display');
        }, 2000);
        setTimeout(() => {
            $earth.classList.remove('earth-intro')
            $earth.classList.add('earth-rotate')
            $moon[0].classList.remove('display');
            $saturn[0].classList.remove('display');
            $mainText[0].classList.remove('display')
            $scroll[0].classList.remove('display')
            $video.style.opacity = '0'
        }, 8000);
    })
}
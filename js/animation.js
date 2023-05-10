intro();
function intro() {
    
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
        }, 4800);
        gotoTop();
    })


    // 새로고침 시 제일 위로 가게 만드는 함수
    function gotoTop(params) {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

    // 인트로가 진행될 때 화면이 움직이지 않도록 만드는 함수
    introOverflow();
    function introOverflow(params) {
        const body= document.querySelector('body');    
        setTimeout(function(){
            body.style.overflow = 'initial';
            body.style.overflowX = 'hidden';
        },5200);
    }
}
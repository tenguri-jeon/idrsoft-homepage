ScrollOut({});
  
companyIntroduce()
function companyIntroduce(params) {
    
  const $slideWrap = document.getElementsByClassName('work-slide-explane-wrap');
  const $leftButton = document.getElementsByClassName('left-button');
  const $rightButton = document.getElementsByClassName('right-button');
  const $slideContent = document.querySelectorAll('.work-slide-explane-wrap li')
  const slideWidth = 800;
  let count = $slideContent.length;
  let index = 0;
  
  $rightButton[0].addEventListener('click', ()=>{
    index++;
    if (index > count - 1) {
      index = count - 1 ;
    }
    moveslide()
  })
  
  $leftButton[0].addEventListener('click', ()=>{
      index--;
      if(index < 0) {
        index = 0
      }
      moveslide()
    })
    
    moveslide()
    function moveslide() {
      $slideWrap[0].style.transform = `translateX(-${index * slideWidth}px)`;
    }
}

scrollanimation()
  function scrollanimation(params) {
    
    const logoContainer = document.getElementById('logo');
    const logoTop = logoContainer.offsetTop;
    const $logoimg = document.getElementsByClassName('logo-imgs')
    const rightbar = document.getElementsByClassName('right-bar')
    const openwokrsContainer = document.getElementsByClassName('openworks-container');
    const $blueworks = document.getElementsByClassName('blueworks-container');
    const blueworksContainerTop = $blueworks[0].offsetTop;
    const $team = document.querySelector('#team');
    const $triangleBar = document.querySelector('.triangle-bar');
    const $teamIntroduce = document.querySelector('.team-text-wrap');
    const $history = document.querySelector('#history');
    let historyContainerTop = $history.offsetTop;
    let teamContainerTop = $team.offsetTop;
    const $historyExplaneContainer = document.getElementsByClassName('history-explane-container');
    const $histroyWrap = document.getElementsByClassName('hisroty-wrap');
    const $leftbar = document.getElementsByClassName('left-bar');
    const $solutionSliderContainer = document.getElementsByClassName('solution-slide-container');
    let openwokrsContainerTop = openwokrsContainer[0].offsetTop;
    const $idrsoftIntroduce = document.getElementById('idrsoft-introduce');
    let $idrsoftIntroduceTOP = $idrsoftIntroduce.offsetTop;
    const introduceFigure = document.getElementsByClassName('introduce-img-figure');
    const $historyBack = document.getElementsByClassName('history-back');


    // 윈도우 객체에 'scroll' 이벤트 리스너 추가
    window.addEventListener('scroll', () => {
      // 현재 스크롤 위치
    const scrollPosition = window.scrollY;
    const sliderContainer = document.querySelector(".left-bar");

    // 우리는 아이디알 소프트 입니다 페이지
    if (scrollPosition >=  $idrsoftIntroduceTOP) {
      introduceFigure[0].style.transform = "translate(-360%, -200%)";
      introduceFigure[0].classList.remove("opacity");
      introduceFigure[1].style.transform = "translate(-273%, 19%)";
      introduceFigure[1].classList.remove('opacity')      
      introduceFigure[2].style.transform = "translate(390%, -235%)";
      introduceFigure[2].classList.remove('opacity')
      introduceFigure[3].style.transform = "translate(245%, 60%)";
      introduceFigure[3].classList.remove('opacity')   
      introduceFigure[4].style.transform = "translate(260%, -40%)";
      introduceFigure[4].classList.remove('opacity')   
      introduceFigure[5].style.transform = "translate(-555%, -87%)";
      introduceFigure[5].classList.remove('opacity')   
    } else {
      introduceFigure[0].style.transform = "translate(-320%, -180%)";
      introduceFigure[0].classList.add ('opacity');
      introduceFigure[1].style.transform = "translate(-250%, 0%)";
      introduceFigure[1].classList.add ('opacity');
      introduceFigure[2].style.transform = "translate(364%, -205%)";
      introduceFigure[2].classList.add('opacity');
      introduceFigure[3].style.transform = "translate(217%, 40%)";
      introduceFigure[3].classList.add ('opacity');
      introduceFigure[4].style.transform = "translate(240%, -40%)";
      introduceFigure[4].classList.add ('opacity');
      introduceFigure[5].style.transform = "translate(-517%, -90%)";
      introduceFigure[5].classList.add ('opacity');
    }
    
    // 스크롤 위치가 openwokrsContainerTop 이상인 경우 클래스 추가
    // openworks 페이지
    if (scrollPosition >= openwokrsContainerTop) {
      sliderContainer.classList.remove('left-bar-ani');
      $solutionSliderContainer[0].classList.remove('display');
      openwokrsContainer[0].classList.remove('scale');

    } else {
      sliderContainer.classList.add('left-bar-ani');
      $solutionSliderContainer[0].classList.add('display');
      openwokrsContainer[0].classList.add('scale');
    }

    // blueworks페이지
    if (scrollPosition >= blueworksContainerTop) {
      $leftbar[1].classList.remove('left-to-right');
      $solutionSliderContainer[1].classList.remove('display');
      $blueworks[0].classList.remove('scale');
    } else {
      $leftbar[1].classList.add('left-to-right');
      $solutionSliderContainer[1].classList.add('display');
      $blueworks[0].classList.add('scale');
    }

    // logo
    if (scrollPosition >= logoTop) {
      rightbar[0].classList.remove('left-bar-ani');
      $logoimg[0].classList.remove('display');
    } else {
      rightbar[0].classList.add('left-bar-ani');
      $logoimg[0].classList.add('display');
    }

    // idrsoft 연혁
    if (scrollPosition >= historyContainerTop) {
      $historyExplaneContainer[0].classList.remove('display');
      $historyBack[0].classList.remove('left-to-right');
    } else {
      $historyExplaneContainer[0].classList.add('display');
      $historyBack[0].classList.add('left-to-right');
    }

    // 팀소개 애니메이션 
    if (scrollPosition >= teamContainerTop) {
      $triangleBar.classList.add('incline');
      rightbar[0].classList.add('right')
      setTimeout(() => {
        $teamIntroduce.classList.remove('display')
      }, 500);
    }else{
      rightbar[0].classList.remove('right')
      $triangleBar.classList.remove('incline');
      $teamIntroduce.classList.add('display');
    }
  });



}



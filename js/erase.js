ScrollOut({});
  
companyIntroduce()
function companyIntroduce(params) {
    
  const $tittle = document.querySelectorAll('.work-slide-tittle-wrap li');
  const $slideWrap = document.getElementsByClassName('work-slide-explane-wrap');
  const $leftButton = document.getElementsByClassName('left-button');
  const $rightButton = document.getElementsByClassName('right-button');
  const slideWidth = 800;
  let index = 0;
  
  $rightButton[0].addEventListener('click', ()=>{
    index++;
    if(index > $tittle.length - 1){
      index = $tittle.length - 1;
      $tittle[index].classList.remove('active')
    }
    $slideWrap[0].style.transform = `translateX(-${index * slideWidth}px)`;
    moveslide()
    $tittle[index].classList.toggle('active')
    $tittle[index-1].classList.remove('active')
  })
  
  $leftButton[0].addEventListener('click', ()=>{
      index--;
      if(index < 0) {
        index = 0
      }
      console.log(index)
      moveslide()
      $tittle[index].classList.add('active')
      $tittle[index+1].classList.remove('active')
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
    const $logoNumberWrap = document.getElementsByClassName('logo-number-wrap');
    const $historyExplaneContainer = document.getElementsByClassName('history-explane-container');
    const $histroyWrap = document.getElementsByClassName('hisroty-wrap');
    const $leftbar = document.getElementsByClassName('left-bar');
    const $solutionSliderContainer = document.getElementsByClassName('solution-slide-container');
    let openwokrsContainerTop = openwokrsContainer[0].offsetTop;
    
    

    // 윈도우 객체에 'scroll' 이벤트 리스너 추가
    window.addEventListener('scroll', () => {
      // 현재 스크롤 위치
    const scrollPosition = window.scrollY;
    const sliderContainer = document.querySelector(".left-bar");
    
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
      $leftbar[1].classList.remove('left-bar-ani-openworks');
      $solutionSliderContainer[1].classList.remove('display');
      $blueworks[0].classList.remove('scale');
    } else {
      $leftbar[1].classList.add('left-bar-ani-openworks');
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
      setTimeout(() => {
        $logoNumberWrap[0].classList.add('logo-wrap-ani');
      }, 1000);
      setTimeout(() => {
        $historyExplaneContainer[0].classList.remove('display');
      }, 2000);
      // setTimeout(() => {
        $histroyWrap[0].classList.add('hisroty-wrap-ani');
      // }, 2500);
      $logoNumberWrap[0].classList.remove('display');
    } else {
      $historyExplaneContainer[0].classList.add('display');
      $logoNumberWrap[0].classList.add('display');
      $logoNumberWrap[0].classList.remove('logo-wrap-ani');
    }

    // 팀소개 애니메이션 
    if (scrollPosition >= teamContainerTop) {
      $triangleBar.classList.add('incline');
      rightbar[1].classList.add('right')
      setTimeout(() => {
        $teamIntroduce.classList.remove('display')
      }, 500);
    }else{
      rightbar[1].classList.remove('right')
      $triangleBar.classList.remove('incline');
      $teamIntroduce.classList.add('display');
    }
  });



}



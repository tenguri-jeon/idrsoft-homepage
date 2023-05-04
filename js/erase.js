ScrollOut({});

  // 솔루션 설명 스크롤 시 슬라이드되는 코드
  
  // window.addEventListener("scroll", function() {
  //   const scrollPosition = window.scrollY;
  //   const sliderContainerPosition = openwokrsContainer[0].offsetTop;
  //   const slideWidth = sliderItems[1].offsetWidth;
  //   const maxSlidePosition = (sliderItems.length - 1) * (slideWidth + 64);
  //   const slidePosition = Math.min((scrollPosition - sliderContainerPosition) / window.innerWidth * maxSlidePosition, maxSlidePosition);
  //   sliderContainer.style.transform = `translateX(-${slidePosition}px)`;
  // });
  
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
    
    // scrollanimation()
    // function scrollanimation(params) {
  
  const logoContainer = document.getElementById('logo');
  const logoTop = logoContainer.offsetTop;
  const $logoimg = document.getElementsByClassName('logo-imgs')
  const rightbar = document.getElementsByClassName('right-bar')
  const sliderContainer = document.getElementsByClassName(".slider-container");
  const sliderItems = document.querySelectorAll(".slider-item");
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
  const $yearWrap = document.getElementsByClassName('history-number-slide');
  const $historyExplaneContainer = document.getElementsByClassName('history-explane-container');
  const $histroyWrap = document.getElementsByClassName('hisroty-wrap');
  const $leftbar = document.getElementsByClassName('left-bar');
  const $sliderContainer = document.getElementsByClassName('slider-container');
  const $solutionSliderContainer = document.getElementsByClassName('solution-slide-container');
  const slideWidth = sliderItems[1].offsetWidth;
  const sliderLength = document.querySelectorAll('.openworks-container .slider-item');
  const blueworksLength = document.querySelectorAll('.blueworks-container li');
  const maxSlidePosition = (sliderItems.length - 1) * (slideWidth + 64);
  let index = 0;
  let openwokrsContainerTop = openwokrsContainer[0].offsetTop;
  
  openworksSlider();
  function openworksSlider(params) {
    function nextSlide() {
      $sliderContainer[0].style.transform = `translateX(-${ index  * (sliderLength[0].clientWidth + 64)}px)`;
    }

    makeNode();
    function makeNode(params) {
      const contentsNode = sliderLength[0].cloneNode(true);
      $sliderContainer[0].appendChild(contentsNode);
      const temp = [];

      for (let i = 0; i < sliderContainer.length; i++) {
        const makeClone = sliderLength[i].cloneNode(true);
        temp.push(makeClone);    
      }
      for (let i = 0; i< temp.length; i++) {
      $sliderContainer[0].appendChild(temp[i]);
      }
    }


    function infiniteSlide(params) {
      $sliderContainer[0].style.transition = '500ms';

      index++;
      nextSlide()

      if (index ===sliderLength.length -1) {
        setTimeout(() => {
          $sliderContainer[0].style.transition = '0ms';
          index = 0;
          nextSlide()
        }, 500);
      }
    }

    setInterval(() => {
      infiniteSlide();
    }, 5000);
  }

  blueworksSlider();
    function blueworksSlider(params) {
    
      function blueworksNextSlide() {
        $sliderContainer[1].style.transform = `translateX(-${ index  * (blueworksLength[0].clientWidth + 64)}px)`;
      }

      makeNode();
      function makeNode(params) {
        const contentsNode = blueworksLength[0].cloneNode(true);
        $sliderContainer[1].appendChild(contentsNode);
        const slide = [];

        for (let i = 0; i < sliderContainer.length; i++) {
          const makeClone = blueworksLength[i].cloneNode(true);
          slide.push(makeClone);    
        }
        for (let i = 0; i< slide.length; i++) {
        $sliderContainer[1].appendChild(slide[i]);
        }
      }


      function infiniteSlide(params) {
        $sliderContainer[1].style.transition = '500ms';

        index++;
        blueworksNextSlide()
        if (index === blueworksLength.length -1) {
          setTimeout(() => {
            $sliderContainer[1].style.transition = '0ms';
            index = 0;
            blueworksNextSlide()
          }, 500);
        }
      }

      setInterval(() => {
        infiniteSlide();
      }, 5000);
  } 

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



// }



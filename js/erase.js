ScrollOut({});

  const sliderContainer = document.querySelector(".slider-container");
  const sliderItems = document.querySelectorAll(".slider-item");
  const openwokrsContainer = document.getElementsByClassName('openworks-container');
  
  window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const sliderContainerPosition = openwokrsContainer[0].offsetTop;
    const slideWidth = sliderItems[1].offsetWidth;
    const maxSlidePosition = (sliderItems.length - 1) * (slideWidth + 64);
    const slidePosition = Math.min((scrollPosition - sliderContainerPosition) / window.innerWidth * maxSlidePosition, maxSlidePosition);
    sliderContainer.style.transform = `translateX(-${slidePosition}px)`;
  });

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

const openwokrsContainerTop = openwokrsContainer[0].offsetTop;

// 윈도우 객체에 'scroll' 이벤트 리스너 추가
window.addEventListener('scroll', () => {
  // 현재 스크롤 위치
  const scrollPosition = window.scrollY;
  const sliderContainer = document.querySelector(".left-bar");

  // 스크롤 위치가 openwokrsContainerTop 이상인 경우 클래스 추가
  if (scrollPosition >= openwokrsContainerTop) {
    sliderContainer.classList.remove('left-bar-ani');
  } else {
    sliderContainer.classList.add('left-bar-ani');
  }
});

  


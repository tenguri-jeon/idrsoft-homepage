blueworksSlide();
function blueworksSlide(params) {
  
  const blueworksContainerWrapper = document.getElementsByClassName('blueworks-container-wrapper');
  const $content = document.querySelectorAll('.blueworks-container-wrapper li');
  let index = 0;
  let slideWith;

  function nextSlide() {
    blueworksContainerWrapper[0].style.transform = `translateX(-${ index  * ($content[0].clientWidth + 64)}px)`;
  }
  
  blueworksMakeNode();
  function blueworksMakeNode(){
    const contentsNode = $content[0].cloneNode();
    blueworksContainerWrapper[0].appendChild(contentsNode);
    const temp = [];

    for (let i = 0; i < $content.length; i++) {
      const makeClone = $content[i].cloneNode(true);
      temp.push(makeClone);
    }
    for (let i = 0 ; i < temp.length ; i ++ ){
      blueworksContainerWrapper[0].appendChild(temp[i]);
    }
  }

  function blueWorksinfiniteSlide(){
    blueworksContainerWrapper[0].style.transition = `500ms`; 

    index++;
    nextSlide();


    if (index === $content.length - 1 ) {
        setTimeout(() => {
            blueworksContainerWrapper[0].style.transition = `0ms`;
            index = 0;
            nextSlide();
        }, 500);
    }
  }

  setInterval(()=>{
    blueWorksinfiniteSlide();
  },5000)
}

openworksSlide();
function openworksSlide(params) {

    const sliderContainer = document.getElementsByClassName(".slider-container");
    const $sliderContainer = document.getElementsByClassName('slider-container');
    const sliderLength = document.querySelectorAll('.openworks-container .slider-item');
    let index = 0;
    
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
}
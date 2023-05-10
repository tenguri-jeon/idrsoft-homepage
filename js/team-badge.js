badgeAnimation();
function badgeAnimation(params) {
    
const $faceBadge = document.getElementsByClassName('face-badge');
const $teamBadge = document.getElementsByClassName('team-badge');
const $team = document.querySelector('#team');
const $teamBadgeWrap = document.getElementsByClassName('team-badge-wrap');
const $teamCircleWrap = document.getElementsByClassName('team-circle-wrap');
let teamContainerTop = $team.offsetTop;

function faceBadgeAnimation() {
    $faceBadge[0].style.transform = "translate(-35px, -538px)";
    $faceBadge[1].style.transform = "translate(-478px, -267px)";
    $faceBadge[2].style.transform = "translate(-100px, -235px)";
    $faceBadge[3].style.transform = "translate(-146px, 349px)";
    $faceBadge[4].style.transform = "transform: translate(207px, -484px)";
    $faceBadge[5].style.transform = "translate(-563px, 96px)";
    $faceBadge[6].style.transform = "translate(-824px, -467px)";
    $faceBadge[7].style.transform = "translate(429px, 87px)";
    $faceBadge[8].style.transform = "translate(646px, -451px)";
    $faceBadge[9].style.transform = "translate(-887px, -127px)";
    $faceBadge[10].style.transform = "translate(71px, 0px)";
}

function faceBadgeCircle(params) {
    $faceBadge[0].style.transform = "translate(-59px, -420px)";
    $faceBadge[1].style.transform = "translate(-110px, -175px)";
    $faceBadge[2].style.transform = "translate(74px, -80px)";
    $faceBadge[3].style.transform = "translate(-50px, 242px)";
    $faceBadge[4].style.transform = "translate(98px, -361px)";
    $faceBadge[5].style.transform = "translate(-190px, 11px)";
    $faceBadge[6].style.transform = "translate(-290px, -310px)";
    $faceBadge[7].style.transform = "translate(268px, -53px)";
    $faceBadge[8].style.transform = "translate(191px, -228px)";
    $faceBadge[9].style.transform = "translate(-403px, -127px)";
    $faceBadge[10].style.transform = "translate(133px, 97px)";
}

function teamBadgeAnimation() {
    $teamBadge[0].style.transform = "translate(-396px, -419px)";
    $teamBadge[1].style.transform = "translate(459px, 393px)";
    $teamBadge[2].style.transform = "translate(314px, 313px)";
    $teamBadge[3].style.transform = "translate(-293px, -36px)";
    $teamBadge[4].style.transform = "translate(-449px, 394px)";
    $teamBadge[5].style.transform = "translate(-202px, 147px)";
    $teamBadge[6].style.transform = "translate(161px, 221px)";
    $teamBadge[7].style.transform = "translate(352px, -251px)";
    $teamBadge[8].style.transform = "translate(-615px, -239px)";
}

function teamBadgeCircle() {
    $teamBadge[0].style.transform = "translate(-81px, -274px)";
    $teamBadge[1].style.transform = "translate(314px, 104px)";
    $teamBadge[2].style.transform = "translate(-11px, 5px)";
    $teamBadge[3].style.transform = "translate(-314px, 104px)";
    $teamBadge[4].style.transform = "translate(-254px, 226px)";
    $teamBadge[5].style.transform = "translate(5px, 128px)";
    $teamBadge[6].style.transform = "translate(136px, 275px)";
    $teamBadge[7].style.transform = "translate(61px, -223px)";
    $teamBadge[8].style.transform = "translate(-203px, -134px)";
}

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
if (scrollPosition >= teamContainerTop) {
    
    for (let i = 0; i < $faceBadge.length; i++) {
        $faceBadge[i].classList.remove('display');
    }
    
    for (let i = 0; i < $teamBadge.length; i++) {
        $teamBadge[i].classList.remove('display');
    }
    
    faceBadgeAnimation();
    teamBadgeAnimation()
    
    setTimeout(() => {
        teamBadgeCircle();
        faceBadgeCircle();
    }, 1500);

    // setTimeout(() => {
    //     $teamBadgeWrap[0].classList.remove('team-wrap-ani');
    //     $teamCircleWrap[0].classList.remove('team-wrap-ani');
    // }, 2000);

}else{
      $teamBadgeWrap[0].classList.add('team-wrap-ani');
      $teamCircleWrap[0].classList.add('team-wrap-ani');
    

    for (let i = 0; i < $faceBadge.length; i++) {
        $faceBadge[i].classList.add('display');
    }

    for (let i = 0; i < $teamBadge.length; i++) {
        $teamBadge[i].classList.add('display');
    }
  }
})

}
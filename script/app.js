let tl = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});

tl.set('#Shadow', {
  transformOrigin: '50% 100%',
})
  .fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '-=.75'
  );

let btnSlow = document.querySelector('.js-slow');
let btnNormal = document.querySelector('.js-normal');
let btnFast = document.querySelector('.js-fast');
let btnPause = document.querySelector('.js-pause');

btnSlow.addEventListener('click', () => {
  console.log('slow');
  tl.timeScale(0.5);
});

btnNormal.addEventListener('click', () => {
  console.log('normal');
  tl.timeScale(1);
});

btnFast.addEventListener('click', () => {
  console.log('fast');
  tl.timeScale(2);
});
btnPause.addEventListener('click', () => {
  if (!tl.paused()) {
    tl.pause();
    document.querySelector('.c-play-icon--play').style.display = 'block';
    document.querySelector('.c-play-icon--pause').style.display = 'none';
  } else {
    tl.play();
    document.querySelector('.c-play-icon--pause').style.display = 'block';
    document.querySelector('.c-play-icon--play').style.display = 'none';
  }
});

//document.querySelector('.js-pause').onclick = ()=>tl.repeat = 0;

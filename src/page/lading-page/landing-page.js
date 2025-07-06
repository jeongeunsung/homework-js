/* global gsap */

;(() => {
  let i = 1

  function tweenAnimate() {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 7.5,
      defaults: { opacity: 0, ease: 'back.out(1.4)' },
      onStart: () => {
        i = 1
        imageChange()
      }
    })
    tl
    .from('.wrapper', { ease: 'linear', autoAlpha: 0, })
    .from('.title', { x: 1000, duration: 1 })
    .from('.sub-title', { x: -1000, duration: 1 }, '<')
    .from('.description', { y: 100 }, '-=0.5')
    .from('.basic-button', { y: 150 }, '-=0.4')
    .from('.shape', { scale: 0, transformOrigin: 'center', stagger: 0.1 })
    .from('.grid-vertical', { scale: 0, transformOrigin: 'center' })
    .from('.grid-horizontal', { scale: 0, transformOrigin: 'center' })
  }
  
  
  function imageChange() {
    const total = 17
    const imageIndex = document.querySelector('.image-model img')

    for(let i = 1; i <= total; i++) {
      // if(i === 17) {
      //   i--
      //   console.log(i--)
      // }

      setTimeout(() => {
        imageIndex.src = `../../assets/images/img-model${i}.png`
      }, i * 500)
    }
  }

  tweenAnimate()
})()
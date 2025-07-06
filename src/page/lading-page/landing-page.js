/* global gsap */

;(() => {
  let i = 1

  function tweenAnimate() {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 7.5,
      defaults: { ease: 'back.out(1.4)' },
      onRepeat: () => {
        imageChange(i++)
      },
      onStart: () => {
        imageChange(i)
      }
    })
    tl
      .from('.wrapper', { opacity: 0, ease: 'linear', autoAlpha: 0, })
      .from('.title', { opacity: 0, x: 1000, duration: 1 })
      .from('.sub-title', { opacity: 0, x: -1000, duration: 1 }, '<')
      .from('.description', { opacity: 0, y: 100 }, '-=0.5')
      .from('.basic-button', { opacity: 0, y: 150 }, '-=0.4')
      .from('.shape', { opacity: 0, scale: 0, transformOrigin: 'center', stagger: 0.1 }, '<')
      .from('.shape01', { rotate: 100, duration: 2, ease: "bounce.out" }, 1)
      .from('.shape02', { x: -150, duration: 2, ease: 'bounce.out' }, '<')
      .from('.grid-vertical', { scale: 0, transformOrigin: 'center' })
      .from('.grid-horizontal', { scale: 0, transformOrigin: 'center' })
  }
  
  
  function imageChange() {
    const total = 17
    const imageIndex = document.querySelector('.image-model img')

    for(let i = 1; i <= total; i++) {
      setTimeout(() => {
        imageIndex.src = `../../assets/images/img-model${i}.png`
      }, i * 500)
    }
  }

  tweenAnimate()
})()
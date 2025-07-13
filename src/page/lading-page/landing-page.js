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
})

// 정은님 과제 확인 했습니다. 😊 
// 과제에서 애니메이션을 잘 활용해주셨어요. 수고 많았습니다!

// 과제 회고를 보니 이미지 변경을 반복하고 싶은 걸로 이해했는데요. 
// 아래처럼 코드를 수정하면 이미지가 멈추지 않고 반복할 것입니다.
// 게다가 이미지 위에 마우스를 올리면 애니메이션이 멈추고 
// 마우스가 이미지에서 나가면 애니메이션이 다시 재생될거에요.


;(() => {

  // 이미지 교체 갯수
  const TOTAL = 17
  // 이미지 교체 애니메이션 대기 시간
  const DELAY = 800
  // 이미지 교체 애니메이션 멈춤 함수 참조 변수
  let stopImageChange = null

  const imageIndex = document.querySelector('.image-model img')

  imageIndex.addEventListener('mouseenter', handlePauseLoop)
  imageIndex.addEventListener('mouseleave', handlePlayLoop)

  tweenAnimate()

  function tweenAnimate() {
    const tl = gsap.timeline({
      defaults: { ease: 'back.out(1.4)' },
      onStart: () => {
        stopImageChange = imageChange()
      }
    })
    tl.from('.wrapper', { opacity: 0, ease: 'linear', autoAlpha: 0 })
      .from('.title', { opacity: 0, x: 1000, duration: 1 })
      .from('.sub-title', { opacity: 0, x: -1000, duration: 1 }, '<')
      .from('.description', { opacity: 0, y: 100 }, '-=0.5')
      .from('.basic-button', { opacity: 0, y: 150 }, '-=0.4')
      .from(
        '.shape',
        { opacity: 0, scale: 0, transformOrigin: 'center', stagger: 0.1 },
        '<'
      )
      .from('.shape01', { rotate: 100, duration: 2, ease: 'bounce.out' }, 1)
      .from('.shape02', { x: -150, duration: 2, ease: 'bounce.out' }, '<')
      .from('.grid-vertical', { scale: 0, transformOrigin: 'center' })
      .from('.grid-horizontal', { scale: 0, transformOrigin: 'center' })
  }

  function imageChange() {
    const animateKeys = []

    for (let i = 1; i <= TOTAL; i++) {
      animateKeys.push(setTimeout(() => {
        if (i === TOTAL) imageChange()
        imageIndex.src = `../../assets/images/img-model${i}.png`
      }, i * DELAY))
    }
    
    return () => {
      animateKeys.forEach(clearTimeout)
    }
  }

  function handlePlayLoop() {
    stopImageChange = imageChange()
  }

  function handlePauseLoop() {
    stopImageChange()
  }

})()


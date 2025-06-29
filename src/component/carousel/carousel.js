{
  const carouseContains = document.querySelector('.carousel-contains')
  const carouselList = carouseContains.querySelector('.carousel-list')
  const carouselItems = carouseContains.querySelectorAll('.carousel-item')
  const carouselFooter = document.querySelector('.carousel-footer')
  const prevButton = carouselFooter.querySelector('[aria-label^="이전"]')
  const indicatorCurrentPage = carouselFooter.querySelector('.current-page')
  const indicatorTotalPage = carouselFooter.querySelector('.total-page')
  const nextButton = carouselFooter.querySelector('[aria-label^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

  // 화면의 처음 로드될 때 총 갯수 동적 계산
  const indicatorTotalCounter = carouselItems.length / 2
  indicatorTotalPage.textContent = indicatorTotalCounter

  // 화면의 처음 로드될때 tabindex 적용
  settingTabindexControlFn()

  nextButton.addEventListener('click', function() {
    const selectedList = carouselList.querySelector('.' + SELECTED_CLASSNAME)
    let nextContent = selectedList.nextElementSibling.nextElementSibling

    if (!nextContent) {
      nextContent = carouselItems[0]
    }
    
    let distance = nextContent.offsetLeft

    carouselList.style.setProperty('transform', 'translateX(-'+ distance +'px)')

    selectedList.classList.remove(SELECTED_CLASSNAME)
    nextContent.classList.add(SELECTED_CLASSNAME)

    indicatorCurrentPageFn()
    settingTabindexControlFn()
  })

  prevButton.addEventListener('click', function() {
    const selectedList = carouselList.querySelector('.' + SELECTED_CLASSNAME)

    let prevContent
  
    if (selectedList.previousElementSibling) {
      prevContent = selectedList.previousElementSibling.previousElementSibling
    }

    if (!prevContent) {
      prevContent = carouselItems[carouselItems.length - 2]
    }

    let distance = prevContent.offsetLeft

    carouselList.style.setProperty('transform', 'translateX(-'+ distance +'px)')

    selectedList.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

    indicatorCurrentPageFn()
    settingTabindexControlFn()
  })

  function indicatorCurrentPageFn() {
    carouselItems.forEach((item, index) => {
      if(item.classList.contains(SELECTED_CLASSNAME) && index === 0) {
        indicatorCurrentPage.textContent = '1'
      } else if(item.classList.contains(SELECTED_CLASSNAME) && index === 2) {
        indicatorCurrentPage.textContent = '2'
      } else if (item.classList.contains(SELECTED_CLASSNAME) && index === 4) {
        indicatorCurrentPage.textContent = '3'
      } else if (item.classList.contains(SELECTED_CLASSNAME) && index === 6) {
        indicatorCurrentPage.textContent = '4'
      }      
    })
  }

  function settingTabindexControlFn() {
    //먼저 초기화로 tabindex=-1로 하고 뒤에 tabindex 속성 삭제
    carouselItems.forEach((item) => {
      const outTabIndex = item.querySelector('a')
      if (outTabIndex) {
        outTabIndex.setAttribute('tabindex', '-1')
      }
    })

    carouselItems.forEach((item) => {
      if (item.classList.contains(SELECTED_CLASSNAME)) {
        const currentTabIndex = item.querySelector('a')
        if (currentTabIndex) {
          currentTabIndex.removeAttribute('tabindex')
        }

        const nextSibling = item.nextElementSibling
        if (nextSibling) {
          const nextTabIndex = nextSibling.querySelector('a')
          if (nextTabIndex) {
            nextTabIndex.removeAttribute('tabindex')
          }
        }
      }
    })
  }  
}
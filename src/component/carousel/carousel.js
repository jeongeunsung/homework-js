{
  const carouseContains = document.querySelector('.carousel-contains')
  const carouselList = carouseContains.querySelector('.carousel-list')
  const carouselItems = carouseContains.querySelectorAll('.carousel-item')
  const carouselFooter = document.querySelector('.carousel-footer')
  const prevButton = carouselFooter.querySelector('[title^="이전"]')
  const indicatorCurrentPage = carouselFooter.querySelector('.current-page')
  const indicatorTotalPage = carouselFooter.querySelector('.total-page')
  const nextButton = carouselFooter.querySelector('[title^="다음"]')

  const SELECTED_CLASSNAME = 'is-selected'

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
  })

  prevButton.addEventListener('click', function() {
    const selectedList = carouselList.querySelector('.' + SELECTED_CLASSNAME)

    let prevContent;
  
    if (selectedList.previousElementSibling) {
      prevContent = selectedList.previousElementSibling.previousElementSibling;
    }

    if (!prevContent) {
      prevContent = carouselItems[carouselItems.length - 2]
    }

    let distance = prevContent.offsetLeft

    carouselList.style.setProperty('transform', 'translateX(-'+ distance +'px)')

    selectedList.classList.remove(SELECTED_CLASSNAME)
    prevContent.classList.add(SELECTED_CLASSNAME)

    indicatorCurrentPageFn()
  })

  function indicatorCurrentPageFn() {
    carouselItems.forEach((item, index) => {
      if(item.classList.contains(SELECTED_CLASSNAME) && index === 0) {
        indicatorCurrentPage.innerText = '1'
      } else if(item.classList.contains(SELECTED_CLASSNAME) && index === 2) {
        indicatorCurrentPage.innerText = '2'
      } else if (item.classList.contains(SELECTED_CLASSNAME) && index === 4) {
        indicatorCurrentPage.innerText = '3'
      }
    })
  }

}
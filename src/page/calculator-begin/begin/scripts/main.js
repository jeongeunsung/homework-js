// 직접풀어보기 1
;(() => {
  const container = document.querySelector('.calculator__container')
  const display = container.querySelector('.calculator__display')
  const plusButton = container.querySelector('[data-key="plus"]')
  const numbersButton = container.querySelectorAll('[data-button-type="number"]')

  let inputNumbers = []
  let operator = ''
  let isOperatorClicked = false

  // plus 버튼 클릭시 이벤트
  plusButton.addEventListener('click', function() {
    operator = this.textContent
    display.textContent = operator

    isOperatorClicked = true
  })

  numbersButton.forEach((number) => {
    number.addEventListener('click', function() {
      let numberValue = Number(this.textContent)
      
      if(!isOperatorClicked) {
        console.log(1)
        inputNumbers = [numberValue]
        display.textContent = inputNumbers
      } else {
        inputNumbers.push(numberValue)
        
        const sum = inputNumbers.reduce((acc, cur) => {
          return acc + cur
        }, 0)
        
        display.textContent = sum
        
        console.log(`${inputNumbers[0]} ${operator} ${numberValue} = ${sum}`)
        inputNumbers = [sum]

      }
    })
  })  
})

// 직접풀어보기 2
;(() => {
  const container = document.querySelector('.calculator__container')
  const display = container.querySelector('.calculator__display')
  const plusButton = container.querySelector('[data-key="plus"]')
  const minusButton = container.querySelector('[data-key="minus"]')
  const equalButton = container.querySelector('[data-key="equal"]')
  const clearButton = container.querySelector('[data-key="clear"]')
  const numbersButton = container.querySelectorAll('[data-button-type="number"]')

  let inputNumbers = []
  let operator = ''
  let isOperatorClicked = false
  let currentNumber = ''

  // 숫자 버튼 클릭시 이벤트
  numbersButton.forEach((number) => {
    number.addEventListener('click', function() {
      if (isOperatorClicked) {
        currentNumber = ''
        isOperatorClicked = false
      }

      currentNumber += this.textContent
      console.log(display.textContent = Number(currentNumber))
    })
  })

  // plus 버튼 클릭시 이벤트
  plusButton.addEventListener('click', function() {
    
    if(currentNumber !== '') {
      inputNumbers.push(Number(currentNumber))
      currentNumber = ''
    }

    operator = this.textContent
    display.textContent = operator

    isOperatorClicked = true
  })

  // minus 버튼 클릭시 이벤트
  minusButton.addEventListener('click', function() {
    
    if(currentNumber !== '') {
      inputNumbers.push(Number(currentNumber))
      currentNumber = ''
    }

    operator = this.textContent
    display.textContent = operator

    isOperatorClicked = true
  })
  
  // equal 버튼 클릭시 이벤트
  equalButton.addEventListener('click', function() {

    if (!operator) {
      display.textContent = currentNumber || inputNumbers[0] || 0
      currentNumber = '' 
      return 
    }

    if(currentNumber !== '') {
      inputNumbers.push(Number(currentNumber))
    }

    if (inputNumbers.length >= 2) {
      const sum = inputNumbers.reduce((acc, cur) => {
        return acc + cur
      }, 0)
      
      display.textContent = sum
      
      console.log(`${inputNumbers[0]} ${operator} ${Number(currentNumber)} = ${sum}`)
      
      inputNumbers = [sum]
      currentNumber = ''
      operator = ''
      isOperatorClicked = false
    }
  })
  
  // clear 버튼 클릭시 이벤트
  clearButton.addEventListener('click', function() {
    currentNumber = 0
    inputNumbers = [currentNumber]
    display.textContent = currentNumber
  }) 
  
})

// 쌤 계산기 따라하기
;(() => {
  const PRESSED_CLASSNAME = 'is-pressed'
  const calculator = document.querySelector('.calculator')
  const calculatorDisplay = calculator.querySelector('.calculator__display')
  const calculatorKeys = calculator.querySelector('.calculator__keys')

  const allKeys = [...calculatorKeys.children]
  const operatorKeys = allKeys.filter((key) => {
    return key.dataset.buttonType === 'operator'
  })
  const clearButton = allKeys.find((key) => {
    return key.dataset.buttonType === 'clear'
  })

  const twoKey = allKeys.find((key) => {
    return key.dataset.key === '2'
  })

  calculatorKeys.addEventListener('click', (e) => {
    const button = e.target.closest('button')
    if (!button) return

    const { buttonType, key } = button.dataset
    const result = calculatorDisplay.textContent

    removePressedClassName()

    const { previousButtonType } = calculator.dataset

    if (buttonType === 'number') {
      if (result === '0') {
        calculatorDisplay.textContent = key
      } else {
        calculatorDisplay.textContent = result + key
      }

      console.log('디스플레이 값:', calculatorDisplay.textContent)
      console.assert(result === '2', '2 입력 결과')

      if (previousButtonType === 'operator') {
        calculatorDisplay.textContent = key
      }

    }
    
    if (buttonType === 'operator') {
      button.classList.add(PRESSED_CLASSNAME)
      calculator.dataset.firstValue = result
      calculator.dataset.operator = button.dataset.key
    }
        
    if (buttonType === 'decimal') {
      calculatorDisplay.textContent = result + '.'
    }

    if (buttonType === 'clear') {
      if (button.textContent === 'AC') {
        delete calculator.dataset.firstValue
        delete calculator.dataset.operator
      }
      
      calculatorDisplay.textContent = 0
      button.textContent = 'AC'
    } else {
      if (clearButton.textContent === 'AC') {
        clearButton.textContent = 'CE'
      }
    }

    if (buttonType === 'equal') {
      let { firstValue, operator } = calculator.dataset
      firstValue = parseFloat(firstValue, 10)
      let secondValue = parseFloat(result, 10)

      let newResult

      if (operator === '+' || operator === 'plus') {
        newResult = firstValue + secondValue
      }
      
      if(operator === '-' || operator === 'minus') {
        newResult = firstValue - secondValue
      }

      if(operator === '*' || operator === 'times') {
        newResult = firstValue * secondValue
      }

      if(operator === '/' || operator === 'divide') {
        newResult = firstValue / secondValue
      }

      calculatorDisplay.textContent = newResult

      pressKey('1')
      console.assert(getDisplayValue() === '1', '1 입력 결과')

      resetCalculator()
    }

    calculator.dataset.previousButtonType = buttonType
  })

  twoKey.click()
  
  function removePressedClassName() {
    for (const key of operatorKeys) {
      if (key.classList.contains(PRESSED_CLASSNAME)) {
        key.classList.remove(PRESSED_CLASSNAME)
        break
      }
    }
  }

  function resetCalculator() {
    clearButton.click()
    clearButton.click()

    console.assert(getDisplayValue() === '0', '디스플레이 초기화')
    console.assert(!calculator.dataset.firstValue , '초기화 후: 첫번째 값 제거')
    console.assert(!calculator.dataset.operator , '초기화 후: 연산자 값 제거')
  }

  function pressKey(key) {
    const button = allKeys.find((k) => k.dataset.key === key)
    button.click()
  }

  function getDisplayValue() {
    return calculatorDisplay.textContent
  }  
})

// 쌤 계산기 따라하기(리팩토링I)
;(() => {
  const PRESSED_CLASSNAME = 'is-pressed'
  const calculator = document.querySelector('.calculator')
  const calculatorDisplay = calculator.querySelector('.calculator__display')
  const calculatorKeys = calculator.querySelector('.calculator__keys')

  const allKeys = [...calculatorKeys.children]
  const operatorKeys = allKeys.filter((key) => key.dataset.buttonType === 'operator')
  const clearButton = allKeys.find((key) => key.dataset.buttonType === 'clear')

  calculatorKeys.addEventListener('click', (e) => {
    const button = e.target.closest('button')
    if (!button) return

    const { buttonType, key } = button.dataset
    const result = calculatorDisplay.textContent
    const { previousButtonType } = calculator.dataset

    removePressedClassName()

    if (buttonType === 'number') {
      if (result === '0') {
        calculatorDisplay.textContent = key
      } else {
        calculatorDisplay.textContent = result + key
      }

      if (previousButtonType === 'operator') {
        calculatorDisplay.textContent = key
      }

    }
    
    if (buttonType === 'operator') {
      button.classList.add(PRESSED_CLASSNAME)
      calculator.dataset.firstValue = result
      calculator.dataset.operator = button.dataset.key

      const { firstValue, operator } = calculator.dataset
      const secondValue = result

      if (
        previousButtonType !== 'equal' &&
        previousButtonType !== 'operator' && 
        // typeof로 숫자 체크도 필요 없음
        firstValue && operator
      ) {
        let newResult = calculate(firstValue, operator, secondValue)
        calculatorDisplay.textContent = newResult
        calculator.dataset.firstValue = newResult
      }
    }
        
    if (buttonType === 'decimal') {
      calculatorDisplay.textContent = result + '.'
    }

    if (buttonType === 'clear') {
      if (button.textContent === 'AC') {
        delete calculator.dataset.firstValue
        delete calculator.dataset.operator
      }
      
      calculatorDisplay.textContent = 0
      button.textContent = 'AC'
    } else {
      if (clearButton.textContent === 'AC') {
        clearButton.textContent = 'CE'
      }
    }

    if (buttonType === 'equal') {
      const { firstValue, operator, modifierValue } = calculator.dataset
      // parseFloat 생략
      const secondValue = modifierValue || result

      // typeof로 숫자 체크도 필요 없음
      if (firstValue && operator) {
        let newResult = calculate(firstValue, operator, secondValue)
        calculatorDisplay.textContent = newResult
        calculator.dataset.firstValue = newResult
        calculator.dataset.modifierValue = secondValue
      }

      // calculatorDisplay.textContent = newResult

      resetCalculator()
    }

    calculator.dataset.previousButtonType = buttonType
  })

  function calculate(firstValue, operator, secondValue) {
    firstValue = parseFloat(firstValue, 10)
    secondValue = parseFloat(secondValue, 10)
    if (operator === '+' || operator === 'plus') return firstValue + secondValue
    if(operator === '-' || operator === 'minus') return firstValue - secondValue
    if(operator === '*' || operator === 'times') return firstValue * secondValue
    if(operator === '/' || operator === 'divide') return firstValue / secondValue
  }

  
  function removePressedClassName() {
    for (const key of operatorKeys) {
      if (key.classList.contains(PRESSED_CLASSNAME)) {
        key.classList.remove(PRESSED_CLASSNAME)
        break
      }
    }
  }

  function resetCalculator() {
    clearButton.click()
    clearButton.click()
  }

  function pressKey(key) {
    const button = allKeys.find((k) => k.dataset.key === key)
    button.click()
  }

  function getDisplayValue() {
    return calculatorDisplay.textContent
  }  
})()

// --------------------------------------------------------------------------------------
// 변수, 상수 작성 과제
// 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.
// --------------------------------------------------------------------------------------

// 1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
let userName = '성정은'
console.log(userName)
// 2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const ABSOLUTE_ZERO = -273.15
console.log('절대 영도(온도의 최저 한계)인 ' + ABSOLUTE_ZERO + '°C')
// 3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
let isLoggedIn = true
let isLoggedOut = false

console.log('로그인 여부: ' + isLoggedIn)
console.log('로그인 여부: ' + isLoggedOut)
// 4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
let userAge = 30
console.log('사용자 나이: ' + userAge + '세')
// 5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
let productPrice = 39_900
console.log('상품 가격(예: ' + productPrice.toLocaleString() + '원)')
// 6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
const BROWSER_BACKGROUND = '#000000'
console.log('배경색: ' + BROWSER_BACKGROUND)
// 7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
let userCommentCount = 12
console.log('댓글 수(예: ' + userCommentCount + ')')
// 8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let currentPageNumber = 3
console.log('현재 페이지 번호(예: ' + currentPageNumber + ')')
// 9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
let membershipGrade = 'VIP'
console.log('회원 등급: ' + membershipGrade)
// 10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isClickedButton = true
let isNotClickedButton = false

console.log('버튼 클릭 여부: ' + isClickedButton)
console.log('버튼 클릭 여부: ' + isNotClickedButton)


// --------------------------------------------------------------------------------------
// 함수 작성 과제
// --------------------------------------------------------------------------------------
// 1. 인사말 메시지
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
// 함수이름: greetUser, 매개변수: username, 기능: 인사말 메시지 "안녕하세요! {이름}님. 좋은 하루되세요!"를 문자열로 반환, 반환값 타입: String, 비고: 함수 선언으로 작성
// --------------------------------------------------------------------------------------

// 1) 문제 분석
// 함수 선언 방법: 함수 선언(function(){})
// 입력값: 이름, username
// 출력값: "안녕하세요! {이름}님. 좋은 하루되세요!"

// 2) 함수 선언하기
// function greetUser() {}

// 3) 매개변수를 통해 사용자로부터 이름을 입력받아 문자열로 반환. 반환값 타입: String
// function greetUser(username) {
//   console.log('안녕하세요! ' + username + '님. 좋은 하루되세요!')
// }

// 4) 인사말을 출력한다.
function greetUser(username) {
  return '안녕하세요! ' + username + '님. 좋은 하루되세요!'
}

console.log(greetUser('성정은'))

// --------------------------------------------------------------------------------------
// 2. 원가 계산
// 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
// 판매가(세후 금액)에서 원가(세전 금액)를 계산하려면 판매가를 "100% + 세금 비율"로 나눠야 합니다.
// 해당 품목의 세금 비율은 3.3%입니다.
// 함수이름: calculateOriginalPrice, 매개변수: priceWithTax, 기능: 판매 가격에서 세금을 제외한 원가 반환, 반환값 타입: Number, 비고: 함수 표현식으로 작성
// --------------------------------------------------------------------------------------

// 1) 문제 분석
// 함수 선언 방법: 함수 표현식(let example = function(){})
// 입력값: 판매가(세후 금액), priceWithTax
// 세금 비율: 3.3% => 3.3 / 100 => 0.033, TAX_RATE
// 계산 방법: 판매가 / 100% + 세금비율 => (100% + 0.033 = (100 / 100) + 0.033 = 1 + 0.033 = 1.033)
// 출력값: 원가(세전 금액)

// 2) 판매가를 입력 받아 원가를 계산하는 함수 표현식을 작성한다.
// let calculateOriginalPrice = function() {}

// 3) 판매가(세후 금액)에서 원가(세전 금액)를 계산하려면 판매가를 "100% + 세금 비율"로 나눈다.
// const TAX_RATE = 3.3 / 100
// console.log(10000 / (1 + TAX_RATE))

// 4) calculateOriginalPrice 함수명을 이용하여 priceWithTax 매개변수를 받아 함수 표현식에 넣어보았다.
// let calculateOriginalPrice = function(priceWithTax) {
//   const TAX_RATE = 3.3 / 100

//   console.log(priceWithTax / (1 + TAX_RATE))
// }

// 5) 원가를 반환하고, 함수를 호출하였다/
let calculateOriginalPrice = function(priceWithTax) {
  const TAX_RATE = 3.3 / 100

  return priceWithTax / (1 + TAX_RATE)
}

console.log(parseInt(calculateOriginalPrice(10000)))


// --------------------------------------------------------------------------------------
// 3. 주류 판매 가능 여부
// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
// 19세 이상 주류 구매가 가능합니다.
// 함수이름: canSellAlcohol, 매개변수: registrationCard, 기능: 신분증의 나이를 확인해 주류 판매 가능 여부를 불리언 타입으로 반환, 반환값 타입: Boolean, 비고: 화살표 함수 표현식으로 작성
// 객체 이름: registrationCard, 속성: 이름(name), 속성: 나이(age), 속성: 성별(gender)
// --------------------------------------------------------------------------------------

// 1) 문제 분석
// 함수 선언 방법: 화살표 함수 표현식(let example = () => {})
// 입력값: 신분증의 나이 확인
// 계산방법: 신분증의 나이가 19세 이상일 경우(신분증의 나이 >= 19) 일 경우 true, 신분증의 나이가 19세 미만(신분증의 나이 < 19)일 경우 false
// 출력값: '주류 판매 가능 여부: true' 또는 '주류 판매 가능 여부: false'

// 2) 신분증의 나이를 확인하는 화살표 함수 표현식을 작성한다
// let canSellAlcohol = () => {}

// 3) 매개변수를 받아 신분증의 나이를 확인해 주류 판매 가능 여부를 불리언 타입으로 입력해본다. if, else를 사용한다. 호출하여 값이 맞는지 확인한다.
// let canSellAlcohol = (registrationCard) => {
//   if(registrationCard >= 19) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }

// console.log(canSellAlcohol(30))

// 4) registrationCard 객체를 작성한다.

// let registrationCard = {
//   name: '성정은',
//   age: 30,
//   gender: 'female'
// }

// 5) 객체를 이용해서 함수 호출을 하고 값을 반환한다.
 let canSellAlcohol = (registrationCard) => {
  if(registrationCard >= 19) {
    return true
  } else {
    return false
  }
}

let registrationCard = {
  name: '성정은',
  age: 30,
  gender: 'female'
}

console.log(canSellAlcohol(registrationCard.age))


// --------------------------------------------------------------------------------------
// 4. 할인가 계산
// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
// [예] 판매가가 18,700원이고, 할인율이 20%인 경우 계산된 할인가는 14,960원입니다.
// 함수이름: getDiscountedPrice, 매개변수: originalPrice, discountPercent, 기능: 판매가에서 할인율을 적용한 할인가를 반환, 반환값 타입: Number
// --------------------------------------------------------------------------------------

// 1) 문제 분석
// 함수 선언 방법: 함수 선언(function(){})
// 입력값: 판매가와 할인 비율(%), originalPrice & discountPercent
// 할인율: 20%(20 / 100 = 0.2), discountPercent / 100
// 판매가에서 할인비율을 뺀 총 할인금액: originalPrice * discountPercent / 100, totalDiscountPrice
// 계산 방법: 판매가 - 할인율
// 출력값: 할인가

// 2) 판매가와 할인 비율(%)을 매개변수로 입력받아 함수를 선언하고 getDiscountedPrice 호출한다.
// function getDiscountedPrice(originalPrice, discountPercent) {}

// console.log(getDiscountedPrice())

// 3) 할인율을 변수에 담아 계산식 넣는다.
// function getDiscountedPrice(originalPrice, discountPercent) {
//   let discountPrice = originalPrice * discountPercent / 100
//   // console.log(discountPrice = originalPrice * discountPercent / 100)
// }

// console.log(getDiscountedPrice(18700, 20))

// 4) getDiscountedPrice 함수 선언 내부에 할인가 계산식을 로그로 찍어본다
// function getDiscountedPrice(originalPrice, discountPercent) {
//   let discountPrice = originalPrice * discountPercent / 100
//   // console.log(discountPrice = originalPrice * discountPercent / 100)
//   console.log(originalPrice - discountPrice)
// }

// console.log(getDiscountedPrice(18700, 20))

// 5) 원가 값을 반환한다. 반환값 타입이 Number 확인함
// function getDiscountedPrice(originalPrice, discountPercent) {
//   let discountPrice = originalPrice * discountPercent / 100

//   return totalDiscountPrice = originalPrice - discountPrice
// }

// console.log(getDiscountedPrice(18700, 20))

// 6) 원가값을 변수에 담고 총 반환해야 하는 문구를 넣는다.
function getDiscountedPrice(originalPrice, discountPercent) {
  let discountPrice = originalPrice * discountPercent / 100
  let totalDiscountPrice = originalPrice - discountPrice

  return '판매가가 ' + originalPrice + '원이고, 할인율이 ' + discountPercent + '%인 경우 계산된 할인가는 ' + totalDiscountPrice + '원입니다.'
}

console.log(getDiscountedPrice(18700, 20))

// --------------------------------------------------------------------------------------
// 5. 등급 판단
// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
// 점수 범위: 90 ~ 100점, 등급(Grade): A, 설명: 매우 우수
// 점수 범위: 80 ~ 89점, 등급(Grade): B, 설명: 우수
// 점수 범위: 70 ~ 79점, 등급(Grade): C, 설명: 보통
// 점수 범위: 60 ~ 69점, 등급(Grade): D, 설명: 미달, 통과 기준 근접
// 점수 범위: 0 ~ 59점, 등급(Grade): F, 설명: 낙제
// 함수가 반환해야 할 결과 값은 아래 포멧(format)입니다.
// { score: 87, grade: 'B', description: '우수' }
// --------------------------------------------------------------------------------------

// 1) 문제 분석
// 함수명: gradeJudgment
// 함수 표현 방법: 화살표 함수 표현식(let example = () => {})
// 입력값: 점수, score
// 점수 계산 범위: 90 ~ 100점(90 <= score && score <= 100), 80 ~ 89점(score >= 89) , 70 ~ 79점(score >= 79), 60 ~ 69점(score >= 69)
// 출력값: { score: 87, grade: 'B', description: '우수' } 객체를 반환

// 2) 점수를 전달 받는 화살표 함수 표현식을 만든다
// const GRADE_JUDGMENT = (score) => {}

// console.log(GRADE_JUDGMENT(91))

// 3) 함수 내 if, elseif, else를 사용하여 표현식을 만들어 boolean으로 호출한 매개변수가 제대로 작동하는지 확인한다.
// const GRADE_JUDGMENT = (score) => {
//   if(score >= 90 && score <= 100) {
//     console.log(true)
//   } else if (score >= 89) {
//     console.log(true)
//   } else if (score >= 79) {
//     console.log(true)
//   } else if (score >= 69) {
//     console.log(true)
//   } else {
//     console.log(true)
//   }
// }

// console.log(GRADE_JUDGMENT(89))

// 4) 호출한 점수가 제대로 작동하면 객체로 바꿔서 return으로 반환한다.
const GRADE_JUDGMENT = (score) => {
  if(90 <= score && score <= 100) {
    return {
      score: score,
      grade: 'A',
      description: '매우 우수'
    }
  } else if (score >= 89) {
    return {
      score: score,
      grade: 'B',
      description: '우수'
    }
  } else if (score >= 79) {
    return {
      score: score,
      grade: 'C',
      description: '보통'
    }
  } else if (score >= 69) {
    return {
      score: score,
      grade: 'D',
      description: '미달, 통과 기준 근접'
    }
  } else {
    return {
      score: score,
      grade: 'F',
      description: '낙제'
    }
  }
}

console.log(GRADE_JUDGMENT(87))
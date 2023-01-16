// function logText(text) {
//   console.log(text)
//   return text
// }
// logText(10)  // 숫자 10
// logText('하이') // 문자열 하이
// logText(true) // 진위값 true

// function logText<T>(text:T):T {
//   console.log(text)
//   return text
// }
// logText<string>('하이') // logText에 string이라는 타입을  넘기겠다 !


// function logText(text: string) {
//   console.log(text)
//   // text.split('').reverse().join('')
//   return text
// }

// function logNumber(num: number) { // 이렇게 하면 string받을 때는 logtext를
//   console.log(num)                // number받을때는 LogNumber를 쓰면 되긴 하나
//   return num                     // 코드적인 측면과 가독성면에서 절대 좋은방법이 아니다.
// }

// logText('하이')
// logNumber(10)

// function logText(text: string | number) { // 유니온 사용 시 문제점
//   console.log(text)
//   return text
// }

// const a =logText('a')
// a.split('')
// logText(10)

// function logText<T>(text: T): T { // 함수를 정의할 때 타입을 비워놓은 상태에서
//   console.log(text)               // 타입에 뭐가 들어갈지를 호출 할 시점에 정의
//   return text                     // 타입을 추론을 해서 최종 반환값까지 붙일 수 있는 것
// }                                 // 이것을 제네릭 이라고 한다.

// const str = logText<string>('abc')
// str.split('')
// const login = logText<boolean>(true)

// //인터페이스에 제네릭을 선언하는  방법
interface Dropdown<T> {
  value: T
  selected: boolean
}

const obj: Dropdown<string> = { value: 'abc', selected: false}

//제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length) // length나 forEach같은 걸 쓰기 위해서
//   text.forEach(function (text) { //제네릭에 추가로 배열같은걸 줄 수 있음.
//     console.log(text)
//   })
//   return text
// }
// logTextLength(['hi', 'abc'])

// //제네릭 타입 제한 2 - 정의된 타입 이용하기
// interface LengthType {
//   length: number
// }
// function logTextLength<T extends LengthType>(text: T): T {
//   text.length // 인터페이스를 이용해서 에러가 안나게 할 수 있다!
//   return text
// }
// logTextLength(10)


//제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string
  price: number
  stock: number
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption // ShoppingItem에 있는 키들중 한가지가 바로 제네릭이 된다.
}
// getShoppingItemOption(10)
// getShoppingItemOption<string>('a')
getShoppingItemOption("name") // ShoppingItem의 키 값들만 들어갈 수 있음
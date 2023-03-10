// 타입 추론 기본 1
var a = 10 

function getB(b = 10) {
  var c = 'hi'
  return b + c
}

10 + '10' // 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T
//   title: string
// }
// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T
  title: string
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string
  tag: K
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a', // Dropdown에도 string이 넘어간다.
  tag: 'a'
}

// Best Common Type
var arr = [1,2,true, 'a'] // arr의 타입은 string | number | boolean이 된다.
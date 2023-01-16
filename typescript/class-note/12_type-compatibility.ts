 // 인터페이스
 interface Developer {
  name: string
  skill: string
 }
//  interface Person {
//   name: string
//  }
class Person {
  name: string
}
var developer: Developer
var person: Person 
// developer = new Person() // 왼쪽에 있는 속성이 더 많은 속성을 가지고있어서 에러
// person = developer // 이건 왼쪽이 더 작기 때문에 가능하다.

//함수
var add = function(a: number) {
//....
}
var sum = function(a: number, b: number) {
//....
}
sum = add
// add = sum // 왼쪽이 더 작기 때문에 호환이 되지 않는다.

//제네릭
interface Empty<T> {
 //..
}
var empty1: Empty<string>
var empty2: Empty<number>
empty1 = empty2 // 원래 에러안뜸
empty2 = empty1

interface NotEmpty<T> {
  data: T
}
var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>
notempty1 = notempty2
notempty2 = notempty1

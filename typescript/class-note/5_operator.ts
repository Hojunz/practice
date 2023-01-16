
var seho: string | number | boolean // 유니온 타입: 하나의 타입 이상 지정 가능

function logMessage(value: string | number) { 
  if (typeof value === 'number') {
    value.toLocaleString() // number에 대한 속성만 사용가능
  }
  if (typeof value === 'string') {
    value.toString() // string만 사용 가능
  } //이걸 <타입가드 : 특정 타입으로 타입의 범위를 좁혀나가는 (필터링 하는) 과정 > 라고 한다.
  throw new TypeError('value must be string or number')
}
logMessage('hello')
logMessage(100)

// ------------------------------------------------------------------
interface Developer {
  name: string
  skill: string   
}

interface Person {
  name: string
  age: number
}

function askSomeone(someone: Developer | Person) { // 이렇게만 하면 공통속성인 name만 접근가능.
  // someone.name, // skill 이나 age 사용하고 싶으면 위에 썼던 타입가드를 사용해야 함.
}
askSomeone({ name: '디벨로퍼', skill: '웹개발'}) //이렇게 쓰면 가능
askSomeone({ name: '디벨로퍼', age: 100})


function askSomeone2(someone: Developer & Person) { //인터색션으로 정의한 코드는 모두 접근가능.
  // someone.name,
  // someone.skill,
  // someone.age 
}
askSomeone2({ name: '디벨로퍼', skill: '웹개발', age: 100 }) 
// askSomeone2({ name: '디벨로퍼', skill: '웹개발' }) // age없어서 오류 발생. 

// -----------------------------------------------------------------------
// var seho: string | number | boolean
// var capt: string & number & boolean 
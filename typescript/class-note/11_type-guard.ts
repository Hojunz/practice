interface Developer {
  name: string
  skill: string
}

interface Person {
  name: string
  age: number
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce()
// console.log(tony.skill)

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill
  console.log(skill)
} else if ((tony as Person).age) {
  var age = (tony as Person).age
  console.log(age)   // 코드 가독성이 굉장히 떨어진다!!!
}

// 타입 가드 정의
function isDevloper(target: Developer | Person): target is Developer { //타입가드는 is해당타입을 많이 쓴다!!
  return(target as Developer).skill !== undefined
} 

if (isDevloper(tony)) {
  console.log(tony.skill)
} else {
  console.log(tony.age)
}

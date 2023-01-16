// 타입 단언(type assertion)
// 타입스크립트보다 개발자가 타입을 더 잘 알고 있다.
var a // any 
a = 20 // number
a = 'a' // string
var b = a as string
// a는 사실 string이지만 any로 띄워지고 있다.
// as string을 붙여주면 b의 타입은 string이 된다.


// DOM API 조작
// <div id='app'>hi</div>

var div = document.querySelector('div')
if (div) {
  div.innerText
}

var div2 = document.querySelector('div') as HTMLDivElement 
div2.innerText
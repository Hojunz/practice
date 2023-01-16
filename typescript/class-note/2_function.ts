// 힘수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b
}
sum(10, 20)

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b
}
sum(10, 20)

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) { // ? 붙여줘서 써도 되고 안써도 되게 함

}
log('hello world') // 두번째 인자에 ? 써줘서 에러가 안난다.
log('hello ts', 'abc')
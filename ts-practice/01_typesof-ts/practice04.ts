/**
 * [unknown타입]
 * 어떤 작업을 하기 전 변수의 타입을 먼저 확인해야한다.
 */
let a9: unknown
// let b9 = a9 + 1 // a의 타입이 unknown이기 때문에 typescript에서 이를 허용해 주지 않는다.
let b9 = 0;
if (typeof a9 === 'number') { // a9의 타입a가 number인지 확인
  b9 = a9 + 1 // 타입이 number인지 확인한 이후 a9의 타입은 number로 변경된다.
}
// b9.toUpperCase() // number타입이므로 대문자 변경 불가능하다.

let b10 = ""
if (typeof a9 === 'string') { // a9의 타입a가 string인지 확인
  b10 = a9 // 타입이 string인지 확인한 이후 a9의 타입은 string으로 변경된다.
}
b10.toUpperCase(); // String타입 이므로 대문자 변경이 가능해진다.

/**
 * [void타입 - function]
 */
function hello() { // function hello(): void
  console.log('x');
}
const a11 = hello();
// a11.toUpperCase(); // void타입은 아무것도 return 하지 않으므로 허용되지 않는다

/**
 * [never 타입] 불가능 (0, 공집합과 비슷)
 * 함수가 절대 return하지 않을 때 발생한다.
 * 예를들어 함수에서 exception(예외) 가 발생할 때 이다.
 */
function hello1(): never {
  // return "X" // never타입이면 return을 허용하지 않는다.
  throw new Error("XXX") // 오류발생은 허용한다. 즉, return하지 않고 오류를 발생시키는 함수로 사용할 수 있다.
}

function hello2(name: string | number) {
  if(typeof name === "string") {
    name  // name: string
  } else if (typeof name === "number") {
    name  // name: number
  } else {
    name // name: never - 절대 실행되지 않아야 한다. 만약 타입이 올바르게 들어왔다면 else블록은 실행되지 않을것이다.
  }

}
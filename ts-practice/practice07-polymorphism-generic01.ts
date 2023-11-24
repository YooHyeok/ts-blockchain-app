/* 다형성 - polymorphism */
type SuperPrint1 = {
  (arr: number[]): void //number타입 배열을 매개변수로 받고 void를 리턴한다.
  (arr: boolean[]): void //boolean타입 배열을 매개변수로 받고 void를 리턴한다.
  (arr: string[]): void //string타입 배열을 매개변수로 받고 void를 리턴한다.
  (arr: (number|boolean)[]): void 
  (arr: (number|boolean|string)[]): void 
  (arr: (any)[]): void 
}
const superPrint1: SuperPrint1 = (arr) => {
  arr.forEach(i => console.log(i))
}
superPrint1([1, 2, 3, 4])
superPrint1([true, false, true])
superPrint1(["a", "b", "c"])

type SuperPrint2 = {
  (arr: (number|boolean)[]): void 
  (arr: (number|boolean|string)[]): void 
  (arr: (any)[]): void 
}
const superPrint2: SuperPrint2 = (arr) => {
  arr.forEach(i => console.log(i))
}
superPrint2([1, false, true, "a"])

/**
 * 콘크리트 concrete type
 * number, boolean, string, void, unknown등
 */

/**
 * Generic
 * call signature를 작성할 때 매개변수의 타입을 확실히 모를경우 사용한다.
 * 콘크리트 타입중 하나이지만 무엇이 들어올지 예측할 수 없을 경우 사용한다.
 * 타입을 추론한 뒤 추론한 타입을 <generic> 제네릭에 적용한다.
 */
type SuperPrint3 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void
}
const superPrint3: SuperPrint3 = (arr) => {
  arr.forEach(i => console.log(i))
}
superPrint3([1, 2, 3, 4]) // <number>(arr: number[])
superPrint3([true, false, true]) // <boolean>(arr: boolean[])
superPrint3(["a", "b", "c"]) // <string>(arr: string[])
superPrint3([1, false, true, "a"]) // <string | number | boolean>(arr: (string | number | boolean)[])

/**
 * Generic은 콘크리트 타입 배열 뿐만 아니라 순수 콘크리트 타입에도 적용이 가능하다.
 */
type SuperPrint4 = {
  <Generic>(data: Generic): void
}
const superPrint4: SuperPrint4 = (data) => {
  console.log(data)
}
superPrint4("하하") // <string>(data: string)
superPrint4(3) // <number>(data: number)
superPrint4(false) // <boolean>(data: boolean)

/**
 * return타입에도 generic을 적용할 수 있다.
 */
type SuperPrint5 = {
  <Generic>(data: Generic): Generic
}
const superPrint5: SuperPrint5 = (data) => {
  return data
}
superPrint5("하하") // <"하하">(data: "하하") => "하하"
superPrint5(3) // <3>(data: 3) => 3
superPrint5(false) // <false>(data: false) => false

type SuperPrint6 = {
  <T>(arr: T[]): T
}
const superPrint6: SuperPrint6 = (arr) => {
  return arr[0]
}
const abc = superPrint6([1, 2, 3, 4]) // <number>(arr: number[])
superPrint6([true, false, true]) // <boolean>(arr: boolean[])
superPrint6(["a", "b", "c"]) // <string>(arr: string[])
superPrint6([1, false, true, "a"]) // <string | number | boolean>(arr: (string | number | boolean)[])
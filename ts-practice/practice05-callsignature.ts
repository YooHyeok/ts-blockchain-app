function add(a: number, b: number) {
  return a + b
}

/**
 * 화살표 함수는 결과(반환) 타입을 추론한다.
 */
const add2 = (a: number, b: number) => a+b

/**
 * [call sigantures]: 마우스를 올렸을 때 출력되는 설명
 * 해당 코드의 변수나 함수의 타입을 알려준다.
 * 타입 지정하지 않아도 타입 스크립트가 해당 코드의 타입을 추론해서 적용해 준다.
 * 함수를 위한 타입을 만들때, 함수가 어떻게 작동하는지 서술하는 용도로 사용한다.
 * 프로그램을 디자인(설계) 하면서 타입을 먼저 생각하고 코드를 구현할때 사용한다.
 */
type Add = (a: number, b: number) => number // 함수의 call siganture 타입
const add3: Add = (a, b) => a+b
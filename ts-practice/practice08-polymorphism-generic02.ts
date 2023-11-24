/* 함수의 기본 제네릭 */
type SuperPrint7 = {
  <T>(arr: T[]): T
}
const superPrint7: SuperPrint7 = (arr) => {
  return arr[0]
}
const aaa = superPrint7([1, 2, 3, 4])
const bbb = superPrint7([true, false, true])
const ccc = superPrint7(["a", "b", "c"])
const ddd = superPrint7([1, false, true, "a"])

/**
 * 1개 이상의 Generic
 * placeholder에 generic을 하나 더 지정해준 뒤 arg의 타입을 추가한 generic으로 지정해준다.
 * 함수 선언부의 ()괄호에 generic을 추가한 변수를 추가하고, 함수 호출시 2개의 매개변수를 전달한다.
 * generic으로 지정하는 변수 타입은
 * 함수 호출부에서 argument를 두개를 넣더라도
 * 함수 선언부에서 argument를 하나만 받고
 * 함수 실행문에서 그 한개의 argument만 사용한다면
 * 함수 호출부에서 넘긴 두번째 arg는 사용되지 않으므로
 * generic에 의해 unknown처리된다.
 * 
 * 만약 두번째 argument를 generic으로 지정하지 않으면 (number|string 등)
 * 함수 선언부에는 무조건적으로 argument를 2개 선언해줘야한다.
 * 
 * 그래서 내린 결론
 * unknown의 역할은 Generic에서 arg를 Optional느낌으로 유연하게 받아 처리할수있는 역할로서도 사용된다.
 */
type SuperPrint8 = {
  <T, M>(arr: T[], b: M): T
}
const superPrint8: SuperPrint8 = (arr) => {
  return arr[0]
}
const aaa1 = superPrint8([1, 2, 3, 4], "a")
const bbb1 = superPrint8([true, false, true], 1)
const ccc1 = superPrint8(["a", "b", "c"], true)
const ddd1 = superPrint8([1, false, true, "a"], false)
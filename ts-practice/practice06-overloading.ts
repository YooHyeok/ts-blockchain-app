/* [오버로딩] */

type Add2 = (a: number, b: number) => number
const add4: Add2 = (a, b) => a+b

type Add3 = { //call signature를 길게 작성하는 방식 - 오버로딩 하기 위해 사용하는 작성방식
    (a: number, b: number): number
  }

/**
 * 오버로딩 이란?
 * 함수가 서로 다른 여러개의 call signatures를 가지고 있을 때 발생한다.
 */
//call signature를 길게 작성하는 방식 - 오버로딩 하기 위해 사용하는 작성방식
type Add4 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
}

type Add5 = (a: number, b: string) => number;
type Add6 = (a: number, b: number) => number;

type Add7 = Add5 & Add6
// const add5: Add4 = (a, b) => a+b
const add5: Add7 | Add4 = (a, b) => { //원래는 string|number 로 나와야야 하는데 any로 나옴. npm이 원인일수도?
  if (typeof b === 'string') return a
  return a+b
}

/**
 * 예시 1_1) Next.js의 Router.push()를 구현해본다.
 * 패키지나 라이브러리를 디자인 할 때 많은 사람들이 사용한다.
 */
type Config = {
  path: string,
  state: object
}
type Push = {
  (path: string): void
  (config: Config): void
}
const push: Push = (arg) => {
  if (typeof arg === 'string') console.log(arg)
  else console.log(arg.path, arg.state) // 이것 역시 any가 아닌 Config 타입으로 보여줘야함.
}
push("/home")
push({
    path: "/home",
    state: {state:1} 
})

/**
 * 예시 1_2) 단수, 복수 매개변수 시그네쳐
 * 단수 매개변수 시그네쳐와 복수 매게변수 시그네쳐를 선언한 뒤
 * 함수 선언부에서 들어오지않을 수 있는 인자 뒤에 옵셔널 처리 즉, ?물음표를 붙힌다.
 * 또한 물음표만 붙히는게 아니라 타입도 함께 지정해줘야만 한다.
 */
type Add8 = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}
const add6: Add8 = (a, b, c?: number) => {
  // if(c === undefined) return a+b
  // return a+b+c
  if(c) return a+b+c
  return a+b
}
add6(1,2)
add6(1,2,3)

/**
 * 예시 1_2를 Next.js의 Router.push()와 같이 적용해보기.
 */
type Push2 = {
  (path: string): void
  (path: string, state: number): void
}
const push2: Push2 = (path, state?: number) => {
  // if (state === undefined) console.log(path)
  // else console.log(path, state)
  if (state) console.log(path, state)
  else console.log(path)
}
push2("/home")
push2("/home", 1)
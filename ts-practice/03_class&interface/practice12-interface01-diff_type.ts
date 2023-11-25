/**
 * Value 타입
 */
type Team = "read" | "blue" | "yellow" // 타입을 특정한 string value로 지정한다.
type Health = 1 | 5 | 10

type Player10 = {
  nickname: string
  team: Team // string 타입이면 "read", "blue", "yellow" 라는 문자열만 저장할수 있다.
  health: Health
}

const nico7: Player10 = {
  nickname: "nico",
  team: "blue", // 타입 선언시 입력한 선택지에 있는것만 가능
  health: 5 // 타입 선언시 입력한 선택지에 있는것만 가능
}

/**
 * 인터페이스
 * 오브젝트의 모양을 설정한다.
 * 인터페이스는 "오브젝트 모양을 특정해준다"는 오직 한가지 용도만을 가지고 있다.
 * React.js를 사용할때 많이 사용할것이다.
 * <type> 지정과의 [공통점]은 타입스크립트에게 오브젝트 모양을 알려준다.
 * <type> 지정과의 [차이점]은 type 키워드는 interface 키워드에 비해 좀 더 활용할 수 있는게 많다.
 *  ㄴ ex) interface Hello = string (X) 불가능
 *    ㄴ 오직 오브젝트의 모양을 타입스크립트에게 설명해 주기 위해서만 사용되는 키워드이다.
 * 니꼴라스의 취향은 = 이퀄기호를 생략하는 인터페이스 선언방식이 훨씬 생략되는 기분이라고 한다.
 * 니꼴라스왈 : '문법적으로는 type이 훨씬 많이 사용된다. but 인터페이스를 다루는게 클래스를 다루는 듯한 느낌이라 더 쉽다'
 * 
 */

interface Player11 {
  nickname: string
  team: Team // string 타입이면 "read", "blue", "yellow" 라는 문자열만 저장할수 있다.
  health: Health
}

const nico8: Player11 = {
  nickname: "nico",
  team: "blue", // 타입 선언시 입력한 선택지에 있는것만 가능
  health: 5 // 타입 선언시 입력한 선택지에 있는것만 가능
}

/**
 * interface 간의 상속
 * 클래스와 매우 유사하다.
 */
interface User {
  // name: string
  readonly name: string
}

interface Player12 extends User {
}

const nico9: Player12 = {
  name: "nico"
}

/**
 * type으로 표현해 본다면?
 * interface간의 상속과 똑같이 동작한다
 * 각 타입간의 비교연산자와 마지막에 선언한 & 연산자를 붙혀준다.
 * 가독성 면에서는 기호보다는 기호를 대체하는 의미를가진 extends 키워드가 편한거같다
 *  ㄴ 문법구조가 객체지향 프로그래밍과 매우 유사하다.
 */
type User2 = {
  name: string
}

type Player13 = User & {
}

const nico10: Player13 = {
  name: "nico"
}

/**
 * interface 활용 - property 축적 시키기
 * 같은 이름으로 인터페이스를 선언하게되면
 * 각각의 인터페이스가 하나로 축적되어 모든 property를 다 갖게된다.
 * 타입스크립트가 알아서 하나로 합쳐준다!
 * 타입으로는 불가능하다. - 중복된 이름의 타입이라는 컴파일 에러 발생한다
 */
interface User3 {
  name: string
}
interface User3 {
  lastname: string
}
interface User3 {
  health: number
}

const nico11: User3 = {
  name: "nico",
  lastname: "n",
  health: 1
}
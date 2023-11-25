/* [기본타입 명시적 선언 타입스크립트 코드] */
let a2: number = 1
let b2: string = "li"
let c2: boolean = true

/* [배열타입 명시적 선언 타입스크립트 코드] */
let a3: number[] = [1, 2]
let b3: string[] = ["li", "1"]
let c3: boolean[] = [true, false]

/* [배열타입 타입 추론 방식] */
let a4 = [1, 2]
let b4 = ["li", "1"]
let c4 = [true, false]

/* [object 속성 타입 추론] */
const player2 = {
  name: "nico"
}
// player2.name = 1 // 에러: player2 object의 name속성의 타입이 string이라는것을 TypeChecker가 추론해준다.
player2.name="1" // 정상

/** 
 * [object 속성 명시적 타입 선언]
 * const 객체명: {속성별타입} = {속성과값} 형태
 */
const player3: {
  name: string
  age: number
} = {
  name: "",
  age: 0 // 생략할 수 없다.
}
player3.name = "nico" // 속성에 값 "nico" 초기화
player3.age

/** 
 * [optional] 선택적 타입 (특정 속성을 자체를 갖거나 갖지 않게한다.)
 * ex)모든 player는 name을 갖지만 age에 대해서는 몇명은 가지고 몇명은 가지지 않는경우 age에 한해 사용한다.
 * object에 대한 각 속성별 타입 지정시 age라는 속성명 뒤에 ? 물음표를 선언한다.
 * age?: number | undefined; 즉, number타입 혹은 undefined만 허용한다.
 */
const player4: {
  name: string
  age?: number
} = {
  name: "",
  // age: 0 // 생략이 가능해진다.
}
player4.name = "nico" // 속성에 값 "nico" 초기화


const player5: {
  name: string
  age?: number
} = {
  name: ""
}
player5.name = "nico" // 속성에 값 "nico" 초기화

// if(player5.age < 10) {} // undefined가 들어올수도 있기 때문에 undefined가 아닌 조건을 추가해줘야한다.
if(player5.age && player5.age < 10) {}

const player6: {
  name: string
  age?: number
} = {
  name: ""
}
player6.age = 1 //선언 자체에서는 없었지만 속성 타입에 지정했으므로 값 초기화가 가능해진다(속성이 사용하게 된다)
if(player6.age < 10) {}

/**
 * [Alias 별칭 타입]
 * 하나의 object 타입을 서로 다른 object의 반복해서 사용할 경우
 */
const playerNico1: {
  name: string
  age?: number
} = {
  name: "",
}

const playerLyyn1: {
  name: string
  age?: number
} = {
  name: "",
}

type Player = { // 타입을 추출하여 별칭을 지정한다!
  name: string
  age?: number
}

const playerNico2: Player = { // 타입선언위치에 별칭을 선언한다!
  name: "",
}

const playerLyyn2: Player = {
  name: "",
}

/**
 * [별칭안의 별칭타입 지정]
 * 코드가 깔끔하고 명확해 질 때까지만 하는것을 추천한다.
 */
type Age = number // 기본타입 별칭 지정
type Name = string // 기본타입 별칭 지정
type Player2 = { // 별칭타입의 속성에 별칭타입 지정 가능
  name: Name
  age?: Age 
}

/**
 * [함수의 매개변수, return에 타입 지정]
 */
function playerMaker(name: string) {
  return {
    // name: name
    name //속성의 key와 value에서 value값에 변수를 지정하였을때 변수이름과 key이름이 일치하면 단일로 선언할 수 있다.
  }
}
const nico = playerMaker("nico")
// nico.age = 12 //에러 발생 : playerMaker() 함수가 return하는 object는 name속성만 지니고있기 때문

function playerMaker2(name: string): Player {
  return {
    name
  }
}
const nico2 = playerMaker2("nico")
nico2.age = 12 // 반환타입으로 사용된 type Player에는 age속성이 Optional로 존재하기 때문에 반환받은 Object에 속성 추가 및 초기화 가능





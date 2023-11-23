/**
 * [readonly property 타입]
 * 해당 속성이 읽기 전용이된다.
 * 즉, 수정할 수 없게된다.
 * array의 경우 push외의 filter나 map도 사용할 수 없다.
 * immutablity 즉 불변성을 갖기 때문에 array자체를 수정할수 없기 때문이다.
 */
type Age2 = number;
type Name2 = string;
type Player3 = {
  // name: Name2 // nico3.name = "las" 초기화시 정상작동
  readonly name: Name2 // nico3.name = "las" 초기화시 애러발생
  age?: Age2
}
const playerMaker3 = (name: string) : Player3 => ({name})
/* playerMaker3의 상세 형태 */
const playerMaker4 = (name: string) : Player3 => {
  return {
    name:name
  }
}
const nico3 = playerMaker3("nick")
nico3.age = 12
// nico3.name = "las" // playerMaker3의 반환타입인 Player3의 name속성읜 readonly property이므로 수정 불가능하다.

const numbers1: number[] = [1, 2, 3, 4]
numbers1.push(1)
const number2: readonly number[] = [1, 2, 3, 4]
// numbers2.push(1) // number[] 타입이 readonly 이므로 push할수없다.

const names1: string[] = ["1", "2", "3", "4"]
names1.push("1")
const names2: readonly string[] = ["1", "2", "3", "4"]
// names2.push("1") // number[] 타입이 readonly 이므로 push할수없다.

// const strVal: readonly string = "하이" // 기본타입에서는 readonly사용 불가 배열 혹은 튜플의 리터럴(속성)에만 허용한다.

/**
 * [Tuple] 자바스크립트에서는 존재하지 않는다.
 * Tuple은 Array를 생성할 수 있게 하는데 최소한의 길이를 가져야 하고, 특정 위치에 특정 타입이 있어야 한다.
 * js-ex) const player = ["nico", 12, true]
 * ts-ex) const player: [string, number, boolean]
 */
// const player7: [string, number, boolean] = [] //오류발생 3개의 요소를 필요로 한데 아무것도 없기 때문이다. 즉, 3개의 요소를 초기화 해야 하고, 각 요소의 타입이 string, number, boolean의 순서대로 저장되어야한다.
const player8: [string, number, boolean] = ["재혁", 32, true] 
// player8[0] = 1 // 튜플 player8의 첫번째 인덱스 요소의 타입은 string이므로 정수 초기화를 허용하지 않는다.

/* readonly property 적용 가능 */
const player9: readonly [string, number, boolean] = ["재혁", 32, true] 
// player9[0] = "1" // readonly property이므로 올바른 타입으로 저장하려 하여도 초기화 자체가 안된다.

/* undefined타입과 null타입 */
let a5: undefined = undefined;
let a6: null = null;

/**
 * [any] 비어있는 값의 기본 타입
 * 즉 typescript로부터 빠져나올때 쓰는 타입 - javascript타입
 * 말 그대로 아무 타입이나 들어올 수 있게 된다.
 * js-ex) let a = []
 * ts-ex) let a: any = []
 */
let a7: any = []
a7.push(1)

const a8: any[] = [1, 2, 3, 4]
const b8: any = true

let c5 = a+b; // 배열과 boolean타입을 더했는데 계산되어버린다.... any로 지정했기때문에...
console.log(c5); // "1, 2, 3, 4true"
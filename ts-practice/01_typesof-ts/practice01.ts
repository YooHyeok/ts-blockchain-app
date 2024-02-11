/**
 * 1. 추론적인 js방식의 변수 선언
 * ts는 a의 타입을 String으로 추론해준다. ( let a:string )
 * ts는 a가 string이어야 한다는것을 알게 된다.
 * TypeScript의 TypeChecker에게 타입 추론을 허용한다면 이 방식을 사용한다.
 * 코드가 짧아지면서 가독성이 좋아진다.
 */
let a = "hello"
a = 1 // Type 'number' is not assignable to type 'string' 오류 발생
a = "bye" // a를 string에서 string으로 초기화 했기 때문에 아무 문제가 없다.

/**
 * 2. 명시적인 ts방식의 변수 선언
 * Type Checker가 타입을 체크한다.
 * boolean타입을 미리 지정해둔다면 boolean타입 이외의 타입값이 들어올 경우 컴파일 에러 발생
 * 1번의 추론적 방식과 결과는 같다.
 */
// let b: boolean = 'false' // 문자열이 boolean타입 변수에 들어올 수 없다.
let b: boolean = false // 정상 작동


/**
 * 3. js방식의 추론적 array TypeCheck
 */
let c = [1, 2, 3]
c.push("1") // Type Checker에 의해 string을 number타입의 array에 추가하려 하므로 컴파일 에러 발생
c.push(1)

/**
 * 4. ts방식의 명시적 array  TypeCheck
 * 만약 배열이 비어있는 상황이라면 명시적으로 타입을 선언해야한다.
 * 일반적으로 Typescript의 TypeCheker에 의해 추론되는게 더 낫기 때문에 
 * 명시적 표현은 최소한으로 사용하는것이 좋지만, 아래와 같이 초기 배열이 비어있는 상황에서는 꼭 사용해야만 한다.
 * 
 */
let c2 : number[] = []
c2.push("1") //string을 number타입의 array에 추가하려 하므로 컴파일 에러 발생
c2.push(1)

/**
 * 5. 로컬 영역과 전역 영역 타입이 동기화 문제
 * TypeScript에서는 함수 내부의 로컬 영역에서 변수의 타입을 변경하더라도 해당 변수의 전역 영역에서의 타입은 변경되지 않는다. 
 * 함수 내부에서 변수의 타입이 변경되더라도, 그것은 함수 내에서만 유효한 범위의 변경이다.
 * 따라서 함수가 실행된 이후에도 해당 변수의 전역 영역에서는 이러한 변경이 반영되지 않는다. 
 * 함수 외부에서는 해당 변수의 타입이 초기에 선언된 타입으로 유지된다.
 * 이는 TypeScript의 타입 추론 및 타입 시스템의 특성 중 하나이며, 
 * 함수의 로컬 스코프와 전역 스코프 사이의 타입 변경은 서로 독립적으로 이루어진다.
 * 
 * 아래와 같이 초기화 값이 없는 단순히 배열을 선언해 놓은 뒤 
 * 함수호출에 의해 동적으로 배열을 생성해 데이터를 넣게되면
 * 초기화값이 없는 배열로 초기에 선언했기 때문에, 타입스크립트에서 추론을 할 수 없게 된다.
 * 이와 같은 상황에서 4번과 같이 명시적 추론을 사용하는것이다.
 */
let c3 = [];
// let c3: number[] = []; // initfetch 함수를 거쳐 초기화하게 되면 글로벌영역에서 타입변경된게 확인되지 않으므로 변수 선언시 필수로 명시적 처리를 해줘야한다.
function initfetch() {
	c3 = [2]
}
function fetchString(): string {
  return "2";
}
initfetch() // 함수가 호출되므로써 로컬영역 즉, 함수블록 내에서 c3의 타입은 number[]로 바뀌게된다. 
c3.push(fetchString()); // 그러나 글로벌영역에서는 c3의 타입 타입이 number[]로 바뀐것을 확인할 수 없다. 따라서 c3는 any이다.

/**
 * 5-1 로컬영역 함수블록..
 */
let c4;
function fetchString1(): string {
  return "2";
}
function initfetch1(){
	c4 = [2] // any타입을 number[] 타입으로 변경
  c4.push(fetchString1());
}
initfetch()

/**
 * 7. never 타입 array
 * 아래의 두 예시와 같이 아무런 타입을 선언하지 않는다면 TypeChecker는 never타입으로 추론하게 된다.
 * Argument of type 'string' is not assignable to parameter of type 'never'.ts(2345)
 */
let d = []
// d.push("1") // 아무런 타입을 지정하지 않은 never 타입이므로 String타입 요소 추가시 에러 발생
let e:[] = []
// e.push("1") // 아무런 타입을 지정하지 않은 never 타입이므로 String타입 요소 추가시 에러 발생

/**
 * 8. String 타입 array
 * string이 아닌 타입을 요소로 추가하게되면 에러가 발생한다.
 * 복수개의 데이터를 담아주는 컬렉션을 사용하게 될 경우에는 미리 타입을 지정하는 명시적 변수선언을 사용한다.
 * (TypeScript가 추론하지 못할 때)
 * 보통의 경우 명시적 표현은 최소한으로 사용하고, 타입스크립트가 타입을 추론하도록 하는게 좋다.
 * 
 */
let f: string[] = []
f.push("1")
// f.push(2) //타입이 맞지 않으므로 에러 발생

/**
 * 9. object 타입에서의 타입추론
 */
const player = {
  name: "nico" // name 타입은 string으로 추론된다.
}
// player.name = 1 //name 타입이 string이므로 컴파일 에러 발생
// player.hello() //player에 hello()가 없으므로 컴파일 에러 발생 - 추후 optional타입으로 해결 가능.
player.name = "1"
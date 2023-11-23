/**
 * 1. 추론적인 js방식의 변수 선언
 * ts는 a의 타입을 String으로 추론해준다. ( let a:string )
 * ts는 a가 string이어야 한다는것을 알게 된다.
 * TypeScript의 TypeChecker에게 타입 추론을 허용한다면 이 방식을 사용한다.
 * 코드가 짧아지면서 가독성이 좋아진다.
 */
let a = "hello"
a = "bye" // a를 string에서 string으로 초기화 했기 때문에 아무 문제가 없다.
a = 1 // Type 'number' is not assignable to type 'string' 오류 발생

/**
 * 2. 명시적인 ts방식의 변수 선언
 * Type Checker가 타입을 체크한다.
 * boolean타입을 미리 지정해둔다면 boolean타입 이외의 타입값이 들어올 경우 컴파일 에러 발생
 * 1번의 추론적 방식과 결과는 같다.
 */
let b: boolean = 'false' // 문자열이 boolean타입 변수에 들어올 수 없다.
let b: boolean = false // 정상 작동


/**
 * 3. js방식의 array TypeCheck
 */
let c = [1, 2, 3]
c.push("1") //string을 number타입의 array에 추가하려 하므로 컴파일 에러 발생

/**
 * 4. never 타입 array
 * 아래의 두 예시와 같이 아무런 타입을 선언하지 않는다면 TypeChecker는 never타입으로 추론하게 된다.
 * Argument of type 'string' is not assignable to parameter of type 'never'.ts(2345)
 */
let d = []
d.push("1") // 아무런 타입을 지정하지 않은 never 타입이므로 String타입 요소 추가시 에러 발생
let e:[] = []
e.push("1") // 아무런 타입을 지정하지 않은 never 타입이므로 String타입 요소 추가시 에러 발생

/**
 * 5. String 타입 array
 * string이 아닌 타입을 요소로 추가하게되면 에러가 발생한다.
 * 복수개의 데이터를 담아주는 컬렉션을 사용하게 될 경우에는 미리 타입을 지정하는 명시적 변수선언을 사용한다.
 * (TypeScript가 추론하지 못할 때)
 * 보통의 경우 명시적 표현은 최소한으로 사용하고, 타입스크립트가 타입을 추론하도록 하는게 좋다.
 * 
 */
let f: string[] = []
f.push("1")
f.push(2) //타입이 맞지 않으므로 에러 발생

/**
 * 6. object 타입에서의 타입추론
 */
const player = {
  name: "nico" // name 타입은 string으로 추론된다.
}
player.name = 1 //name 타입이 string이므로 컴파일 에러 발생
player.hello() //player에 hello()가 없으므로 컴파일 에러 발생 - 추후 optional타입으로 해결 가능.
type SuperPrint9 = <T>(a: T[]) => T

const superPrint9: SuperPrint9 = (a) => a[0]

const aa1 = superPrint9([1, 2, ,3, 4])
const bb1 = superPrint9([true, false, true])
const cc1 = superPrint9(["a", "b", "c"])
const dd1 = superPrint9([1, false, true, "a"])

/**
 * 일반 함수 선언에서의 Generic사용
 */
function superPrint10<T> (a: T[]) {
  return a[0]
}
const aa2 = superPrint10<number>([1, 2, 3, 4]) // 타입을 직접 전달할 수 도 있으나, 잘 사용하지 않는다.
const bb2 = superPrint10<boolean>([true, false, true])
const cc2 = superPrint10(["a", "b", "c"])
const dd2 = superPrint10([1, false, true, "a"])

type Player4<E> = {
  name: string
  extraInfo: E //any대신 Generic 사용
}
const nico4: Player4<{favFood: string}> = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi"
  }
}

/**
 * 제네릭이 추가된 타입을 타입으로 추출
 */
type NicoPlayer = Player4<{favFood: string}>
const nico5: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi"
  }
}

/**
 * placeholder 타입으로 추출
 */
type NicoExtra = {
  favFood: string;
}
type NicoPlayer2 = Player4<NicoExtra>
const nico6: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi"
  }
}

/**
 * 타입의 재사용
 */
const lyyn: Player4<null> = {
  name: "lyyn",
  extraInfo: null
}

/**
 * 기본적인 타입스크립트의 타입
 */
type A = Array<number>
let x: A = [1, 2, 3, 4]

function printAllNumbers1(arr: number[]) {}
function printAllNumbers2(arr: Array<number>) {}
function printAllNumbers3(arr: A) {}

function printAllNumbers4<T>(arr: T[]) {}
function printAllNumbers5<T>(arr: Array<T>) {}

printAllNumbers1(x);
printAllNumbers2(x);
printAllNumbers3(x);

printAllNumbers4(x);
printAllNumbers5(x);

printAllNumbers4([true, false, false, true]);
printAllNumbers5([true, false, false, true]);

printAllNumbers4(["true", "false", "false", "true"]);
printAllNumbers5(["true", "false", "false", "true"]);


/**
 * react js의 useState
 */
// useState<number>()
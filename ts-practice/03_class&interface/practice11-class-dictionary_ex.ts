/**
 * Object Type 예시
 */
type exObjType = {
  [key: number]: string // Object타입: key는 number, value는 string으로 가지는 오브젝트를 의미하는 타입
}

let exObj: exObjType = {
  1: "Food",
  2: "Also food"
}

/**
 * obj Type Words
 */
type Words = {
  [key: string]: string // Object타입: string만을 property로 가지는 오브젝트를 의미하는 타입
}

/**
 * Words타입을 지정(적용)한 dict Object
 */
let exDict: Words = {
  "potatio": "Food",
  "rice": "Also food"
}

/**
 * 사전 클래스
 */
class Dict {
  private words: Words // 초기화 하지 않았으므로, 에러 발생 - Property 'words' has no initializer and is not definitely assigned in the constructor. 
  constructor() {
    this.words = {} //수동 초기화 에러해결
  }
  add(word: Word) {
    if (! this.words[word.term]) {// undefined라면 (주어진 키가 아직 사전에 존재하지 않음)
      this.words[word.term] = word.def // { term : def } 형태로 property가 추가된다.
    }   
  }
  getDef(term: string) {
    return this.words[term]
  }
  /**
   * 코드 챌린지
   * 1. 단어 삭제
   * 2. 단어 수정
   */
}

/**
 * 단어 클래스
 */
class Word {
  /* constructor(
    public term: string,
    public def: string; 
  ) {} */

  public term: string;
  public def: string;

  constructor(
    term?: string, //이름
    def?: string //정의 (define)
  ) {}
    /**
   * 코드 챌린지
   * 1. 단어 정의 추가
   * 2. 단어 정의 수정
   * 3. 단어 출력
   */
  setTerm(term: string) {
    this.term = term
  }
  getTerm() {
    return this.term
  }
  setDef(def: string) {
    this.def = def
  }
  getDef() {
    return this.def
  }
  printWord() {
    console.log(this)
  }
}

const kimchi = new Word("kimchi", "한국의 음식")

const word = new Word();

const dict = new Dict()
dict.add(kimchi) // Word클래스를 Dict object 인스턴스화 한다.
dict.getDef("kimchi")
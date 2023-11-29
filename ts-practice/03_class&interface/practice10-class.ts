/* 
 * ES6 자바스크립트의 Class 선언 및 필드 초기화
class Player_j {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
} 
*/

/**
 * 타입스크립트의 클래스 선언
 * 생성자 함수를 통해 필드를 초기화하는데,
 * 이때 매개변수에서 접근지정자를 포함한 선언 및 타입지정, 초기화까지 한번에 처리된다.
 */
class Player_T {
  //생성자 함수
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}
const yooHyeok = new Player_T("유","혁","유혁스쿨");
// yooHyeok.firstName = "first" //private이라 접근 안됨.
// yooHyeok.lastName = "last"
yooHyeok.nickname = "nick"

/**
 * 매개변수 없는 인스턴스 생성을 위한 생성자 선언법
 * new Instance(매개변수 없음)
 * 필드를 바로 '' 혹은 0, [] {} 등으로 초기화해주기
 */
class Player_T2 {
  //생성자 함수
  constructor(
    private firstName: string = '',
    private lastName: string = '',
    public nickname: string = ''
  ) {}
}
const unknwon = new Player_T2()
unknwon.nickname = '유혁스쿨'

/**
 * 매개변수 없는 인스턴스 생성을 위한 생성자 선언법2
 * new Instance(매개변수 없음)
 * 타입을 지정한 필드 선언 후 constructor의 {중괄호}에서 this 키워드를 통해 필드에 접근하여 초기화한다.
 */
class Player_T3 {
  private firstName: string
  private lastName: string
  public nickname: string
  //생성자 함수
  constructor() {
    this.firstName = ''
    this.lastName = ''
    this.nickname = ''
  }
}
const unknwon2 = new Player_T3()
unknwon2.nickname = '유혁스쿨'

/**
 * 클래스의 함수 선언
 * 기본함수, static함수
 */
class FuncEx {

  basicFunc() {
    // 실행 블록
    return null;
  }
  static staticBasicFunc() {
    return null;
  }
}

new FuncEx().basicFunc(); // 인스턴스 생성을 통한 접근만 가능
FuncEx.staticBasicFunc(); //클래스 선언후 바로 접근 가능

/**
 * 타입스크립트의 추상 클래스
 * 다른 클래스가 상속 받을 수 있는 클래스이다.
 * 하지만 이 클래스는 직접 새로운 인스턴스를 생성할 수 없다.
 * 상속을 통해서 상속받은 클래스만 인스턴스를 생성할 수 있다.
 * 한마디로 틀로 사용할 수 있는 껍대기이다.
 */
abstract class User_f {
  //생성자 함수
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}
// const yooHyeok2 = new User("유","혁","유혁스쿨"); // 직접적으로 인스턴스 생성 불가능하다.
class Player_Ex1 extends User_f{
  
}
const yooHyeok2 = new Player_Ex1("유","혁","유혁스쿨"); // 상속받은 클래스로 인스턴스 생성
yooHyeok2.nickname // 닉네임만 접근 가능하다.

/**
 * 타입스크립트 추상 클래스2
 * 메소드와 추상 메소드
 * 추상메소드는 call signature만 작성한다.
 * protected : 외부로부터는 보호되지만 다른 자식클래스에서 사용가능한 접근지정자.
 */
abstract class User_m {
  
  //생성자 함수
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}

  //일반 메소드
  getFullName() {
    // return this.firstName + this.lastName
    return `${this.firstName} ${this.lastName}`
  }
  abstract getNickname():void // call signature로 선언 (no argument이다.)
}

/**
 * 추상클래스에 추상메소드가 선언되었다면, 상속받은 클래스는 추상클래스를 구현해줘야 한다.
 */
class Player_Ex2 extends User_m {

  // User_m 추상클래스의 추상메소드 getNickname() 구현
  getNickname() {
    console.log(this.nickname)
  }

}
const yooHyeok3 = new Player_Ex2("유","혁","유혁스쿨"); // 상속받은 클래스로 인스턴스 생성
yooHyeok3.getFullName(); // 메소드를 접근할 수 있다.

/**
 * 추상클래스는 다른 클래스가 가져야할 property와 메소드를 명시할 수 있도록 도와준다.
 * 다른 클래스들이 표준화 된 모양 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용한다.
 * 즉, 상속받는 클래스가 어떻게 동작해야 할 지 일러주기 위해서 추상클래스를 사용한다.
 *  ㄴ 어떻게 구현해야 할 지에 대해서는 알려주지 않지만 무엇을 구현해야 할 지에 대해서는 알려줄 수 있다.
 * 문제는 일반 자바스크립트에는 abstract키워드가 없다 결과적으로 브라우저상에서 인식할 때는 일반 클래스로 변한다.
 *  ㄴ (상속한 부모 추상 클래스에 선언한 메소드들이 사라진다...)
 *    ㄴ User4가 필요가 없어지게 된다... (직접적으로 선언하지 않고 그냥 User4Impl 클래스만 선언해서 사용해도된다.)
 */
abstract class User4 {
  
  constructor(
    protected firstName: string, // protected는 상속받은 클래스에서 접근 가능하다
    protected lastName: string
  ){}

  abstract sayHi(name: string): string
  abstract fullName(): string
}

type FullName = (name: string) => string

class User4Impl extends User4{

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  /* sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName}`
  } */

  sayHi: FullName = function(name) { //타입 지정으로 사용할수도 있다.
    return `Hello ${name}. My name is ${this.fullName}`
  }
}

/**
 * [인터페이스와 클래스]
 * TypeScript에서 선언한 abstract클래스는 Javascript로 변환하면 abstract키워드만 사라지고 클래스만 남겨두는 반면,
 * 인터페이스의 경우 JavaScript로 변환시 그냥 전체가 사라진다. (파일사이즈 측면에서 더 좋다)
 * <인터페이스는 오브젝트나 클래스의 모양을 묘사한다.>
 *  ㄴ protected키워드와 constructor함수를 생략하고 단순히 필드와 메소드 선언만 해준다.
 * extends대신 implements키워드를 사용한다.
 * 인터페이스를 상속할 때에는 property를 private로 만들 수 없다.
 *  ㄴ 인터페이스를 만들 때 property는 public만 가능하다.(단점)
 */

interface User5 {
  
  firstName: string
  lastName: string

  sayHi(name: string): string
  fullName(): string
}

class User5Impl implements User5{
  constructor(  
    public firstName: string, //public만 가능
    public lastName: string //public만 가능
  ) {}


  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  /* sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName}`
  } */

  sayHi: FullName = function(name) { //타입 지정으로 사용할수도 있다.
    return `Hello ${name}. My name is ${this.fullName}`
  }
}

/**
 * [Type도 Implements 가능하다.]
 * 인터페이스와 동일하게 추상클래스 대체 가능하다
 *  ㄴ (type코드도 생략됨)
 */
type User6 = {
  
  firstName: string
  lastName: string

  sayHi(name: string): string
  fullName(): string
}

class User6Impl implements User6{
  constructor(  
    public firstName: string, //public만 가능
    public lastName: string //public만 가능
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  /* sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName}`
  } */

  sayHi: FullName = function(name) { //타입 지정으로 사용할수도 있다.
    return `Hello ${name}. My name is ${this.fullName}`
  }
}

/**
 * 인터페이스 다중 상속
 * 어댑터 패턴 과 같은 디장ㄴ 패턴을 사용하여 팀과 함께 일할 때
 * 인터페이스를 만들어 두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 하는 방법.
 *  ㄴ 만약 모두가 같은 인터페이스를 사용한다면, 같은 property와 method를 가지게 된다.
 * 
 */
interface animal {
  classification: string // ex)포유류/파충류/양서류 등
  getAnimalClassi(): string
}
interface Human {
  gender: string // 성별
  getHumanGender(): string
}

class Biology implements animal, Human{

  constructor(
    public classification: string,
    public gender: string
  ) {}

  getAnimalClassi() {
    return this.classification
  }

  getHumanGender() {
    return this.gender
  }
}

/**
 * 인터페이스를 타입으로 사용
 */
function makeUser1(user: User5): User5 {
  // return {
  //   firstName: "nico",
  //   lastName: "o",
  //   fullName : () => "xx",
  //   sayHi: (name) => "hi"
  // }
  return new User5Impl(user.firstName, user.lastName)
}

makeUser1({
  firstName: "nico",
  lastName: "o",
  fullName : () => "xx",
  sayHi: (name) => "hi"
})

/**
 * 인터페이스를 타입으로 사용2 
 * 타입지정 후 구현체 클래스 인스턴스 전달
 * (다형성 느낌)
 */
function makeUser2(user: User5): User5 {
  return user
}
const user5 = new User5Impl("nico", "o")
makeUser2(user5)

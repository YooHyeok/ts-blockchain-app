/**
 * [다형성] 클래스,인터페이스에서의 제네릭 활용 - LocalStorageAPI 예제
 */

interface SStorage<T> {
  [key: string]: T //key는 제한되지 않은 object를 정의하게 해주며,
} 

/**
 * LocalStorage를 생성할 때 T를 받은후 storage 필드의 타입에게 물려준다.
 */
class LocalStorage<T> {

  private storage: SStorage<T> = {}

  set(key: string, value: T) {
    this.storage[key] = value
  }

  remove(key: string) {
    delete this.storage[key]
  }

  get(key: string): T {
    return this.storage[key]
  }
  clear() {
    this.storage = {}
  }
}

const stringsStrage = new LocalStorage<string>()
stringsStrage.get("ket")
stringsStrage.set("hello", "how are you")

const booleanStorage = new LocalStorage<boolean>()
booleanStorage.get("xxx")
booleanStorage.set("hello", true)
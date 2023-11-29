/**
 * 블록체인
 * 여러개의 블록이 사슬처럼 묶여있다. 
 * 블록 안에는 보호하고자 하는 데이터가 들어있다.
 * 각 블록들은 사슬처럼 서로 엮여있다.
 * 서로 엮고있는 연결고리는 해쉬값으로 이루어져있다.
 */
// import * as crypto from "crypto"; // crypto의 모든것을 import한다.
import crypto from "crypto"; // crypto의 모든것을 import한다. - 에러가 난다면 npm install -D @types/crypto 실행

interface BlockShape {
  hash: string; // 해쉬 값(: 블록의 고유 서명으로써 prevHash, height, data에 의해 계산된다.)
  prevHash: string; //이전 해쉬 값
  height: number; // 1, 2, 3 같이 블록의 위치를 표시해준다.
  data: string; // 블록이 보호할 데이터 
}

class Block implements BlockShape{
  public hash: string;
  constructor( // 필드선언과 동시에 초기화
    public prevHash: string,
    public height: number,
    public data: string,
  ) { // 필드 초기화 기본 위치
    this.hash = Block.calculateHash(prevHash, height, data)
  }
  static calculateHash(prevHash: string, height: number, data: string): string {//static 함수 : 클래스 안에서 사용하는 함수로 클래스 인스턴스가 없어도 부를 수 있는 함수
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256") // sha-256으로 인코딩
                .update(toHash) // 계산할 대상을 해쉬값으로 계산
                .digest("hex"); // 16진수 hex문자열 형태로 반환
  }
}
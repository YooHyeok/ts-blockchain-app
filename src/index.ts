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
  prevHash: string; //이전 해쉬 값 (이전 블록체인과 사슬처럼 엮고있는 연결고리역할을 해준다.)
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

class Blockchain {
/*   private blocks: Block[]
  constructor() {
    this.blocks = [];
  } */

  constructor(
    private blocks: Block[] = []
  ) {}

  private getPrevHash() {
    if(this.blocks.length === 0) return "" // blocks배열 길이가 0이라면 첫번째 해쉬가 없으므로 "" 반환
    return this.blocks[this.blocks.length-1].hash; // else 마지막 블록의 해쉬값 리턴 (가장 최신의 이전 해쉬값)
  } 
  
  public addBlock(data: string) {
    const newBlock = new Block( // 블록 생성 (const를 사용한 이유는 인스턴스 초기 생성 이후 객채의 값 변동 없이 바로 저장하기 때문에 - 불변을 유지할 예정이므로)
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    )
    this.blocks.push(newBlock) // 블록 추가
  }

  public getBlocks(): readonly Block[] {
    return this.blocks;
    // return [...this.blocks]; // 해킹 방지를 위해 새로운 배열을 반환한다.
  }  
}
const blockchain = new Blockchain()
blockchain.addBlock("First One")
blockchain.addBlock("Second One")
blockchain.addBlock("Third One")
blockchain.addBlock("Fourth One")

/**
 *  [...전개식] 사용 getBlocks는 새로운 배열1을 반환하므로 새로운 배열에 push한다.
 *  반환타입에 readonly 사용시 push할경우 컴파일 에러가 발생한다.
 */
// blockchain.getBlocks().push(new Block("XXXXXX", 111111, "HACKEDDDDDD")) //

/**
 * [...전개식] 사용 getBlocks는 이전 push할때의 배열1이 아닌 새로운 배열이다.
 */
console.log(blockchain.getBlocks()) //

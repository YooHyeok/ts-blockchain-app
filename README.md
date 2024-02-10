# 타입스크립트로 블록체인 만들기
> 타입스크립트 기본 학습
  - type
  - function
  - generic
  - class
  - interface

## *타입스크립트 프로젝트 빌드 및 컴파일 설정*
<details>
  <summary> 세팅 상세보기 </summary>

  * #### `node 프로젝트 디렉토리 초기화 명령어`   
    package.json이 생성된다.
    ```
    > npm init - y
    ```
    
  * #### `TypeScript모듈 설치`
    ```
    > npm install -D typescript
    ```
  
  * #### `개발자 모드`

      * [ TS NODE 설치 ]
        ```
        > npm i -D ts-node
        ```

      * nodemon 설치
        ```
        > npm i nodemon
        ```
        
    ```json
    {
      /* 생략 */
      "scripts": {
        "build": "tsc",
        "dev": "nodemon --exec ts-node src/index.ts",
        "start": "node build/index.js"
      },

      "devDependencies": {
        "ts-node": "^10.9.1",
        "typescript": "^5.3.2"
      },
      "dependencies": {
        "nodemon": "^3.0.1"
      }
    }
    ```
  * #### `tsconfig.json 파일 생성`

    * MacOS 
      ```
      > touch tsconfig.json
      ```
    * WinOS
      ```
      > code tsconfig.json
      ```
    ```json
    {
      "include": ["src", "src(declaration)", "src(jsdoc)", "ts-practice"], // 타입스크립트 파일이 위치한 경로 - 자바스크립트로 컴파일 하고 싶은 모든 디렉터리를 넣는다.
      "compilerOptions": {
        "outDir":"build", // outDir: 컴파일 된 자바스크립트 파일이 생성될 디렉토리 지정
        "target": "ES6", // target: 어떤 버전의 자바스크립트로 컴파일 하고 싶은지 설정 (node.js 버전과 호환되는 버전으로 설정해야한다.)
        "lib": [// lib: bundle(합쳐진) 정의 파일을 특정해주는 역할 - TypeScript는 처음부터 Dom API에 대한 정보를 가지고 있기 않기에, 이를 사용하기 위해 lib에서 유형을 정의해준다.
          "ES6", // ES6: 현재 코드가 어떤 버전으로 동작할지를 알려준다. (ES6를 지원하는 환경에서 실행된다.)
          //  "DOM" // DOM: 브라우저 환경에서 실행된다. - 설정시 t/js파일이 document,localstroage, window등 브라우저 객체들을 지원하게 된다. (자동완성...)
        ],
        "strict": true, // 타입스크립트로 부터 보호받을 수 있게 된다.
        // "allowJs": true, // 자바스크립트를 허용한다. (타입스크립트와 자바스크립트를 함께 사용할 수 있게된다.)
        "esModuleInterop": true, // export-import방식이 아닌 모듈에 대해서 허용...?
        "module": "CommonJS",
        "moduleDetection": "force"
      },
    }
    ```
  * #### `빌드 명렁어`
    package.json의 script에 선언한 tsc에 의해 build폴더가 생성되어 ts파일이 js파일로 변환된다.
      ```
      > npm run build
      ```
  * #### `실행 명령어`
      ```
      > npm run start
      ```

  * #### `빌드 후 실행 명령어`
      ```
      > npm run build && npm start
      ```


  * #### `부록`

      * [ JS NPM 패키지 TYPE declaration 다운 ]
        ```
        > npm i -D @types/`패키지명`
        ```
</details>
 <br/>
 <hr/>

> 타입스크립트 블록체인
* `블록체인이란?`

  * 여러개의 블록이 사슬처럼 묶여있다. 
  * 블록 안에는 보호하고자 하는 데이터가 들어있다.
  * 각 블록들은 사슬처럼 서로 엮여있다.
  * 서로 엮고있는 연결고리는 해쉬값으로 이루어져있다.

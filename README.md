# 타입스크립트로 블록체인 만들기
> 타입스크립트 기본 학습
  - type
  - function
  - generic
  - class
  - interface
> 터미널 명령어
* `타입스크립트 빌드 및 컴파일 설정`
    * [ node 프로젝트 디렉토리 초기화 명령어 ]

      * npm init - y

    * [ TypeScript모듈 설치 ]

      * npm install -D typescript

    * [ tsconfig.json 파일 생성 ]

      * MacOS : touch tsconfig.json
      * WinOS : code tsconfig.json

    * [ 빌드 명렁어 ]

      * npm run build

    * [ 실행 명령어 ]

      * npm run start

    * [ 빌드 후 실행 명령어 ]

      * MacOS : npm run build && npm start
      * WinOS : npm run build && npm start

* `개발자 모드`

    * [ TS NODE 설치 ]

      * npm i -D ts-node

    * nodemon 설치

      * npm i nodemon

* `부록`

    * [ JS NPM 패키지 TYPE declaration 다운 ]

      * npm i -D @types/`패키지명`





> 타입스크립트 블록체인
* 배운것을 활용하여 블록체인 구현해보기.

  * `블록체인이란?`
    * 여러개의 블록이 사슬처럼 묶여있다. 
    * 블록 안에는 보호하고자 하는 데이터가 들어있다.
    * 각 블록들은 사슬처럼 서로 엮여있다.
    * 서로 엮고있는 연결고리는 해쉬값으로 이루어져있다.

> # *타입스크립트 프로젝트 빌드 및 컴파일 설정*
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

> # *타입스크립트란?*
자바스크립트가 가지고 있는 여러 문제를 해결하고 보완하기 위해 만들어진 자바스크립트 기반으로 만들어진 언어이다.   
뿐만 아니라 더나은 개발자 즉, 더 나은 개발 경험을 제공하기도 한다.    

자바나 C# 개발자는 오랫동안 타입을 써왔다.    
해당 언어를 사용하는 개발자는 타입 안정성에 익숙하다.   
두 언어 모두 강타입 언어이고 이러한 강타입 언어를 쓸 수 있으면 좋다.    
자바스크립트는 자바나 C#과 같은 타입 안정성이 없기 때문에 
강타입의 특성을 갖는 타 언어개발자들이    
자바스크립트로 개발해야하는 특정 상황이 생겨
개발을 시작하게 되면 자바스크립트를 싫어하는 경우가 많이 생긴다.    
타입스크립트를 사용하면 타입 안정성에 있어서는 자바나 C#과 비슷한 개발 경험을 가질 수 있다.   
만약 자바스크립트 개발자인데 생산성도 높이고 버그도 줄이고 싶다면 타입스크립트를 쓰면 된다!

> # *타입스크립트가 존재하는 이유는?*
많은 사람들이 자바스크립트를 버리고 타입스크립트로 넘어오는 이유는 안정성 때문이다.   
타입 안정성 덕분에 타입스크립트의 장점을 이용할 수 있게 된다.   
코드에 버그가 줄어들고 런타임 에러가 줄어들고, 생산성도 늘어나게 된다.    
타입 안정성은 타입스크립트가 제공하는 가장 큰 장점이다.   
이름에서도 알 수 있듯, 타입은 타입크립트에 있어서 매우 중요한 부분이다.

가장 먼저 알아야 할 것은 자바스크립트가 매우 유연한 언어라는 것이다.    
개발자가 정신나간 멍청한 코드를 작성해도 개발자를 이해하려고 하고 도와주려고 한다.  

예를들어 자바스크립트에 true/false 같은 boolean타입이 있으며,
number, string 그리고, 배열이나 객체 같은 자료구조도 있다.    
위 타입들은 타입스크립트에서도 똑같이 사용하는 타입들이다.    
차이점은 자바스크립트는 개발자를 이해해 주려고 한다.
에러를 보여주지 않으려고 한다.

예를들어 숫자가 들어있는 배열이 있다고 하자.    
그리고 이 숫자 배열에 boolean타입인 false를 더하려고 한다고 가정해보자.
```js
[1,2,3,4] + false
```
브라우저 개발자도구에 위 코드를 작성하고 엔터를 치면 아래와 같은 결과가 나온다
```
< `1,2,3,4false`
```
숫자 배열에 false를 더하려고 하면 자바스크립트 데이터 타입 강제 변환 규칙에 의해
배열과 boolean 모두 문자열로 변경된 뒤 문자열 결합 연산으로 처리된다.

보통 다른언어는 정적 타입 언어로 이를 허용하지 않아, 컴파일 시점에 타입 검사를 수행하여 에러 메시지를 보여줌으로써 사전에 방지할 수 있다.   
자바스크립트는 동적 타입 언어 이기때문에 변수나 값이 실행중에 어떤 타입인지 결정된다.   
이로인해 유연성은 향상되지만 동시에 예기치않은 결과를 초래할 수 있다.


```js
function divide(a, b) {
	return a / b
}
```
이상적으로 생각하면 divide(2, 3)을 작성했을 때만 실행되어야 한다.   
그러나 divide('a', 'b') 혹은 divide("XXXX")라고 입력하면 `Nan`이라는 결과를 출력한다.   
즉, 자바스크립트가 코드 실행을 막아주고 있지 않다.    
입력값이 2개를 요구하는데 1개를 보냄에도 실행이 되었으며, 
사칙연산중 숫자연산만 가능한 곱,나누기,나머지 중 나머지연산을 했음에도 불구하고 코드가 실행되었다.    
분명 에러가 발생해야 하지만 `NaN`을 리턴하였다.

분명 개발자를 위해 유연하게 처리하지만 좋은것만은 아니다.

자바스크립트는 argument인 a와 b가 무엇인지 전혀 모른다는것이다.   
즉, a와 b가 필수입력값인지, 선택사항인지 숫자인지 문자인지에 대해 전혀 알고있지 않다.   
프로그래밍 언어는 사람과 컴퓨터간의 의사소통하는 방법중 하나이다.   
하지만 위와같은 경우는 의사소통 방식이 매우 단순하다는 것을 알 수 있다.   
우린 컴퓨터에게 a가 숫자여야만 한다고 설명하지 않았다.    
이 때문에 자바스크립트도 마음대로 추축할 수도 없는 노릇이다.    
자바스크립트는 단순히 코드를 실행할 뿐이였고, 어떤 코드인지는 알지 못한다는것이다.    
두 개의 입력값을 요구하는 함수가 있는데 하나만 보내면 이상한 값이 돌아올 뿐이고 에러도 없어서 영문도 모른다.

divide('4', '2')
위와같이 입력하면 숫자 2를 리턴한다.
분명 문자열 4와 2를 입력했는데 이를 정수로 바꿔서 처리해버린다.
바로 동적 언어이기 때문이다.
자동 타입변환을 해주는것이 편리하면서도, 심각한 오류를 초래할 수 있다.

최악의 오류는 런타임 오류이다.    
```js
const hyeok = {name : "hyeok"}
hyeok.hello()
```
위 코드를 실행하면 반갑게도 에러가 발생하지만 코드가 실행된 이후에 발생된다.   

위와 같은 오류는 코드를 실행하기 전에 최소화 시킬 수 있는 에러 중 하나이다.   
hyeok에는 hello라는 함수가 없음애도 자바스크립트는 오류가 날 거라는걸 모르고 그냥 코드를 실행시켜버렸다.    
이상적으로는언어 자체적으로 hyeok객체에는 hello()라는 함수가 없다는것을 코드가 실행되기 전에 미리 알려주는게 좋을것이다.    
좋은 프로그래밍 언어라면 hyeok 객체를 분석해서 hello()라는 함수가 없다는것을 미리 개발자에게 알려주고 실행을 중지시킬 것이다.   
컴파일 실패 말이다.

자바스크립트는 해당 코드를 실행했을 때 비로소 에러가 있다는 것을 알려준다.

위와같은 상황 때문에 개발자들이 타입스크립트를 접목하는것이다.    
일단 타입스크립트는 배열 + boolean과 같은 정신나간 코드를 작성할 수 조차 없다.
또한 타입스크립트로 입력값이 두개인 함수를 작성하면 함수 호출시 입력값을 하나만 보내는걸 결코 허용하지 않는다.    
코드가 실행되기도 전에 타입스크립트가 함수에 입력값이 두 개가 필요하다는 것을 알게될 것이고 숫자여야만 한다는것도 알아채고
함수호출 코드를 선언하는 순간 오류를 뿜을것이다.

즉, 우리의 IDE인 VSCode나 WebStorm에서 코드가 실행되기도 전에 이 코드를 실행하면 어떠한 런타임 에러가 발생할 것이라고
미리 경고할것이다.

자바스크립트에는 이러한 보호장치가 전혀 없는 반면, 타입스크립트에서는 있다.
 <br/>
 <hr/>


> #  *타입스크립트 작동 방식*
타입스크립트는 Strongly typed 즉, 강타입 프로그래밍 언어이다.   
C#, Java, Go, Rust같은 언어를 다뤄봤다면 프로그래밍 언어라 할 때 컴파일러를 떠올릴 것이다.    
이런 코드는 언어를 다 작성하고 나면 코드를 컴파일해서 0101로 바꿔주거나, 어셈블리 혹은 바이트 코드가 되기도 한다.   
기계가 실행할 수 있는 다른 종류의 코드로 변환되는 것이다.   
타입스크립트의 경우 작성한 코드가 자바스크립트로 변환된다.

<a href="https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA">Typescript Playground</a>

위의 링크에서 타입스크립트 코드를 작성하여 타입스크립트가 일반 자바스크립트를 생성하는 것을 확인한다.   
변환하는 이유는, 브라우저가 타입스크립트가 아닌, 자바스크립트를 이해하기 때문이다.    

```ts
const hyeok = { nickname: "yooHyeok" }
hyeok.hello(); /* Property 'hello' does not exist on type '{ nickname: string; }'.(2339) */
```
*`Property 'hello' does not exist on type '{ nickname: string; }'.(2339)`*    
위와같은 오류가 출력된다.   
자바스크립트에서는 위 코드가 그냥 실행되었으나, Playground에서는 타입스크립트가 코드에 에러가 있다고 분명히 알린다.   
코드를 저장하기 전 즉 실행하기도 전에 VSCode에도 이러한 에러가 보일것이다.    

```ts
[1,2,3,4] + false /* Operator '+' cannot be applied to types 'number[]' and 'boolean'.(2365) */
```
*`Operator '+' cannot be applied to types 'number[]' and 'boolean'.(2365)`*   
마찬가지로 자바스크립트에서는 발생하지않는 숫자배열에 boolean을 더할 수 없다는 오류를 띄운다.

자바스크립트에서는 위 두 코드가 실행되게 두었지만, 타입스크립트에서는 컴파일조차 되지 않고 있다.

```ts
function divide(a, b) {/* Parameter 'a' implicitly has an 'any' type.(7006) */
    return a / b
}

divide("hello")/* Expected 2 arguments, but got 1.(2554) 
input.tsx(6, 20): An argument for 'b' was not provided. */
```
위 두 코드는 선언부 매개변수와, 호출부에서 각각 오류를 띄운다.    
 - *`Parameter 'a' implicitly has an 'any' type.(7006)`*   
매개변수 'a'에는 암시적으로 'any' 유형이 있다고 말하고 있으며,    
이는 타입스크립트가 a,와 b가 어떤 데이터 타입인지 모르기 때문에 보호해 줄 수 없다는 의미로 해석할 수 있다.
 - *`Expected 2 arguments, but got 1.(2554) / input.tsx(6, 20): An argument for 'b' was not provided.`*
함수 입력 값이 두 개 필요하다고 표시되었으며, 상세설명에서는 두번째 매개변수가 제공되지 않았다고 한다.

위의 코드에는 두가지 보호장치가 걸려있다.
첫번째는 입력값의 데이터 타입이고, 두번째는 입력값의 갯수이다.

```ts
const player = { age : 12 }
player.age = false; /* Type 'boolean' is not assignable to type 'number'.(2322) */
```
*`Type 'boolean' is not assignable to type 'number'.(2322)`*    
숫자에서 boolean타입으로 바꿀 수 없다고 오류를 알리고있다.    

보다시피 자바스크립트와 다를게 없는 코드지만, 타입스크립트를 통해 보호되고 있다.
타입스크립트의 기능중 하나인 타입 추론에 의해 보호되고 있는 것이다.

 <br/>
 <hr/>

> #  *타입스크립트 기본 학습*
  - type
  - function
  - generic
  - class
  - interface
 <br/>
 <hr/>

> # *블록체인이란?*
    
  * 여러개의 블록이 사슬처럼 묶여있다. 
  * 블록 안에는 보호하고자 하는 데이터가 들어있다.
  * 각 블록들은 사슬처럼 서로 엮여있다.
  * 서로 엮고있는 연결고리는 해쉬값으로 이루어져있다.

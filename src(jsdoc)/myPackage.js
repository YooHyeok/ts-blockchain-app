// @ts-check //타입스크립트 파일에게 현재 자바스크립트 파일을 확인하라는 알림

/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug //config파일 안에는 debug라는 boolean타입의 속성이 존재
 * @param {string} config.url //config파일 안에는 debug라는 boolean타입의 속성이 존재
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
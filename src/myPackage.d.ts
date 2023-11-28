/**
 * 타입스크립트에게 타입을 설명하기위한 정의 파일
 */
interface Config {
  url: string;
}
declare module "myPackage" { // module이름은 t/js파일명과 같아야 import시 해당 정의를 읽어들인다
  function init(config: Config): boolean;
  function exit(code: number): number;
}
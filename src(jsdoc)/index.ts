import {init, exit} from "./myPackage"; // myPackage2.js를 직접 불러온다. (myPackage2.d.ts가 없을경우 에러발생하지않음)

init({
  debug: true,
  url: "true"
})
exit(1)
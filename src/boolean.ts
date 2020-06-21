export {}; // exportを宣言することでモジュール化し、変数がグローバル空間に宣言されないようにする

let isFinished: boolean = false;
isFinished = true;
console.log({ isFinished });

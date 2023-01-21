// for (let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i));
// }
// let a = 10
// console.log(`a = ${a}`)

//vaiables
let hello = "world";
const vasya = "Vasya";
let b;
b = 10;
let c: string;
c = "10";
function getRadomNumber(min:number,max:number) :number {
     return min + Math.floor(min + Math.random() * (max - min + 1));
}
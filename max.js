//Jim and Dela...

/* const m = 69;
const n = 97;

if(m > n) {
    console.log("Jim");
}
else{
    console.log("Dela");
}
 */

//Jim Dela and Chinku...

/* 
const x = 69;
const y = 97;
const z = 99;

if (x > y && x > z) {
    console.log("Jim");
}
else if (x < y && y > z) {
    console.log("Dela");
}
else {
    console.log("Chinku");
}
 */

const maxMarks = (x, y, z) => {
    if (x > y && x > z){
        console.log("Jim");
    }
    else if(y > x && y > z){
        console.log("Dela");
    }
    else {
        console.log("Chinku");
    }
}
let jimMark = 69;
let delaMark = 97;
let chinkuMark = 99;

maxMarks(jimMark, delaMark, chinkuMark);
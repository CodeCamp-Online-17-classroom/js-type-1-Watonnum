let a = undefined;
let b = 2;
let c = a++;

let d = String(a);
let e = String(b);
let f = String(c);

console.log(d);
console.log(e);
console.log(f);

// d = NaN
// e = 2
// f = NaN
// เพราะค่า e เป็น number จึงเป็นตัวแปรเดียวที่สามารถแปลงให้เป็น String ได้
// ปล. NaN = not a number

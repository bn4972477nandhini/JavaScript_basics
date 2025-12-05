// string
// 1.length
let s = "Nandy";
console.log(s.length);  

// 2.toUpperCase
let n = "nandhini";
console.log(n.toUpperCase(n));

// 3.toLowerCase
let m = "NANDHU";
console.log(m.toLowerCase(m));

// 4.trim
let b = "  hello world  ";
console.log(b.trim(b));

// 5.includes
let l = "i love my dad and mom";
console.log(l.includes("mom"));
console.log(l.includes("mam"));

// 6.slice
let v = "my name is nandhini";
console.log(v.slice(1,5));

// Array
// 1.pop
let y = [10,20,30,40,50];
y.pop(50);
console.log(y);

// 2.push
let x =[1,2,3,4,5,6];
x.pop(6);
console.log(x);

// 3.shift
let a = [10,20,30];
a.shift(10);
console.log(a);

// 4.unshift
let c = [10,20,30];
c.unshift(50);
console.log(c);

//5.splice
// 1.remove elements
// 1.Index 1 la eruthu 2 elements remove panu
let o = [10,20,30,40,50]
o.splice(1,2);
console.log(o);

// splice
// 2.add elements
// 2.Index 2 la 100 and 200 add pannunga.
let p = [1,2,3,4,5];
p.splice(2,0,100,200);
console.log(p);

// splice
// 3.replace elements
// 3.Index 3 la irukkura element-ai 999-na replace pannunga
let f=[5,10,15,20,25];
f.splice(3,1,999);
console.log(f)


// 4.Index 2 la irundhu last vara remove pannunga.
let k =[1,2,3,4,5,6,7,8]
k.splice(2);
console.log(k)

// Array start-la 500 add pannunga (splice use panni).
let u =[10,20,30];
u.splice(0,0,500);
console.log(u);

// Array end-la 999 add pannunga (splice use panni).
let q = [2,4,6,8];
q.splice(q.length,0,500);
console.log(q)




// // Q1. Print numbers from 1 to 5
// // Question:

// function onetwofive(m) {
//     for (let i = 1; i <= 5; i++) {
        
//     }
// }
// m=[1,2,3,4,5]
// console.log(m);


// // Q2. Print even numbers 1 to 10
// // Question
// function evennumber(n){
//     for (let i=1;i<=n;i++){
//         if(i%2===0){
//             console.log(i);
//         }
//     }
// }
// evennumber(10);

// Q3. Print odd numbers 1 to 10
// Question:
// function oddnumber(l){
//     for(let i=1;i<=l;i++){
//         if(i%2!==0){
//             console.log(i);
//         }
//     }
// }
// oddnumber(10);  

// Q4. Print each character in a string
// Question:
// input->"cat" output->c a t

// function wordinletter(o){
//     for(let i=0;i<o.length;i++){
//         console.log(o[i])
//     }
// }
// wordinletter("cat")

function sum_of_number(num){
    let sum = 0;
    for(let i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    console.log(sum);
}
sum_of_number([10,20,20])

















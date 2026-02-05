//call back function-ex-1//

function first(a,b,cb){
    sum = a+b
    cb(sum)
}
function second(sum){
    console.log("This sum is: " + sum)
}
first(5,10,second)



//callback ex-2//

function one(a,b,hn){
    sum = c+d
    hn(sum)
}
function two(sum){
    console.log(sum)
}
one(2,4,two)

//callback ex-3 //

function small(name) {
  console.log("Hello " + name);
}

function big(callback) {
  let name = "Nandhini";
  callback(name);
}

big(small);

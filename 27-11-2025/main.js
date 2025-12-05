// 1. Print all elements of a list using index.
function use_index(n){
for(let i=1;i<=n.length;i++ ){
    console.log(i);
}
}
use_index([1,2,3,4,5])

// 2. Print first and last element of a list manually.
function first_and_last_elments(m){
    first=m[0];
    last=m[m.length-1];
    console.log(first);
    console.log(last);
   
}
m=["Han","Kan","Yan","Nan"]
first_and_last_elments(m)

// 3. Calculate sum of all elements in a list (no sum()).

function sum_of_number(l){
  let total=0
    for(let i=1;i<=l.length;i++){
        total+=i
    }
    console.log(total)
}
l=[1,2,3,4,5]
sum_of_number(l)

// 4. Calculate the average of elements in a list.
function list_of_average(k){
    let total=0;
    let ky=0
    for(let i=0;i<k.length;i++){
        total=total+k[i];
      ky= total/k.length
    }
    console.log("Average",ky)
}
// k=[10,20,30,40,50]
list_of_average([10,20,30,40,50])

// 5. Count how many elements are in a list (without len()).

function count_of_elements(x){
    count=0;
    for(let i in x){
        count++;
    }
    console.log(count)
}
x=['a','b','c','d','e','f']
count_of_elements(x)


// 6.Print only even numbers from a list.
function even_number(y){
    for(let i=0;i<y.length;i++){
      if (y[i]%2===0){
        console.log(y[i])
    }
}
}
y=[1,2,3,4,5,6,7,8,9,10]
even_number(y)

// 7. Print only odd numbers from a list.
function odd_of_number(a){
    for(let i=0;i<a.length;i++){
        if (a[i]%2!==0){
            console.log(a[i])
        }
    }
}
a=[1,2,3,4,5,6,7,8,9,10]
odd_of_number(a)
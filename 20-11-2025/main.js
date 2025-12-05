// 1. You are given a number N, you need to print its multiplication table.
// Example 1:
// Input:
// N = 5
// Output:
// 5 10 15 20 25 30 35 40 45 50
// Example 2:
// Input:
// N = 6
// Output:
// 6 12 18 24 30 36 42 48 54 60


n = 5;
for(let i=0;i<10;i++){
    console.log(n*i)
}


// 2. Let's get it more clearly through this question. Given a number x,
//  the task is to print the numbers from x to 0 in decreasing order.

for(let i=10;i>=0;i--){
    console.log(i)
}

// 3. Write a Python function printNumbers(n) that behaves differently
//  based on whether the number is positive, negative, or zero:
// If n is positive, print numbers from n-1 down to 0, separated by spaces.
// If n is negative, print numbers from n up to 0, separated by spaces.
// If n is 0, print "already Zero".


n=0
if(n>0){
    console.log("positive")
}
else if(n<0){
    console.log("negative")    
}
else{
    console.log("already Zero")
}


// 4. Even Odd Game
// You are given a number n.
//  If n is odd, print "You".
//  If n is even, print "Friend".

n=5
if(n%2==0){
    console.log("Friend")
}
else{
    console.log("You")
}

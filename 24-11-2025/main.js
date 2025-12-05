// Challenge: Write a program to determine a student's admission tier based on their GPA and TestScore. This requires a complex if-else if-else chain using && and ||.
// Rules:
// Tier 1 (Accepted): If GPA is 3.8 or higher AND the TestScore is 90 or higher.
// Tier 2 (Waitlist): If GPA is 3.5 or higher OR the TestScore is 80 or higher.
// Tier 3 (Rejected): Otherwise.


// let studentGPA = 3.6;
// let studentTestScore = 95;
let admissionStatus = "";


function cheackscore( studentGPA,studentTestScore){
if (studentGPA >=3.8 && studentTestScore>=90){
    admissionStatus="Accepted";
}
else if(studentGPA >=3.5 ||studentTestScore>=80){
    admissionStatus="Waitlist";
}
else{
    admissionStatus="Rejected";
}
return admissionStatus
}

 let V1=cheackscore(4.2,95)
 console.log(V1)



 // Problem: A player earns points every day, stored in an array called dailyScores. Write a function named calculateTotalScore that accepts this array as an input. Inside the function, use a for loop to iterate over every score in the array and return the final total score.
// Goal: Practice defining a function that takes an array, using a for loop to iterate through the array, and returning a final accumulated value.

// --- Test Cases: Calling the Function ---
// let player1Scores = [10, 25, 5, 40]; // Expected total: 80
// let player2Scores = [100, 50, 200];  // Expected total: 350
// let emptyScores = [];                // Expected total: 0
// console.log("Player 1 Total Score:", calculateTotalScore(player1Scores));
// console.log("Player 2 Total Score:", calculateTotalScore(player2Scores));
// console.log("Empty Score List Total:", calculateTotalScore(emptyScores));



function calculateTotalScore(dailyScores) {
    let total = 0; 
    for (let i = 0; i < dailyScores.length; i++) {
        total += dailyScores[i]; 
    }
    return total; 
}
     

let player1Scores = [10, 25, 5, 40]; 
let player2Scores = [100, 50, 200];  
let emptyScores = []; 
    
console.log("Player 1 Total Score:", calculateTotalScore(player1Scores));
console.log("Player 2 Total Score:", calculateTotalScore(player2Scores));
console.log("Empty Score List Total:", calculateTotalScore(emptyScores));


//HomeWork
// 1.You need to take a starting number and  ending number from the user, and  find the largest number in the arrey.
// example: findMax[10,25,8,40] → 40

function findMax(arr) {
    let max = arr[0];  

    for (let i = 0; i < arr.length; i++) {  
        if (arr[i] > max) {                 
            max = arr[i];                   
        }
    }

    return max; 
}


let numbers = [10, 25, 8, 40];
let largest = findMax(numbers);

console.log("Largest Number:", largest);  


// 2.Write a function to using for loop to check if the number is prime or not.
// example: isPrime(11) → true
// isPrime(12) → false

function isPrime(num) {
    if (num < 2) {
        return false; 
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}
v=isPrime(11)
console.log(v)

// 3.Write a function divisible3and5(n) that prints numbers between 1 and n divisible by both.
// example: divisible3and5(30) → 15, 30

function divisible3and5(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

divisible3and5(15, 30);

// 5.Write a function countPass(marks) that counts how many marks are >= 35.
//  If marks < 35 → fail, do not count.


function countPass(marks) {
    let count = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 35) {
            count++;
        }
    }

    return count;
}
let arr = [10, 35, 40, 22, 90];
let result = countPass(arr);
console.log(result,"students passed");




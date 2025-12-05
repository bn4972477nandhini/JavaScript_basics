// 1.Problem: You have an array of tasks. Write a for loop that prints each task to the console, one by one
// Starter Code:
// let tasks = ['Buy milk', 'Walk the dog', 'Learn JavaScript', 'Eat dinner'];
// YOUR FOR LOOP HERE
// It should log:
// Buy milk
// Walk the dog
// ...etc

let tasks=['Buy milk','Walk the dog','learn JavaScript','Eat dinner']

for(let i=0; i<tasks.length;i++) {
    console.log(tasks[i])
}

// 2.Problem: You have an array of words. Loop through the array and use it to build a single string (a sentence).
// Starter Code:
// let words = ['My', 'name', 'is', 'Suresh'];
// let sentence = ''; // Start with an empty string
// YOUR FOR LOOP HERE
// console.log(sentence);
// Expected Output: "My name is Suresh "


let words=['My','name','is','Suresh']
let sentence="";
for(let i=0;i<words.length;i++){
    sentence +=words[i] + " ";
   
}
console.log('"'+sentance+'"')



// 3.Problem: You have an array of student scores. Loop through the array and check each score. If a score is 90 or above, log a "Congratulations!" message for that student. Hint: You'll need a for loop to go through the array and an if statement inside the loop.
// Starter Code:
// let scores = [82, 95, 71, 90, 68, 100];
// YOUR FOR LOOP HERE
// It should check each score.
// If the score is 90 or more, log:
// "Student with score [score] gets an A!"


let scores = [82, 95, 71, 90, 68, 100];
for(let i=0; i<scores.length;i++){
    if(scores[i]>90){
    console.log("Congratulations")
}
}




// 1. Write the swap algorithm.

let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log(a, b);


// 2. Given two numbers check if their product ends with a 0. 
// For example if a=12 and b = 5 then their product is 60 so it should print YES else NO.

let i = 12;
let j = 5;
if (i % j === 0) {
    console.log("YES");
} else {
    console.log("NO");
}


// 3. Given a value n=5 print the below pattern 1 # 3 # 5

let n = 5;
let result = "";

for (let i = 1; i <= n; i += 2) {
    result=result+i;
    if (i < n - 1) result += " # ";
}

console.log(result);  // 1 # 3 # 5
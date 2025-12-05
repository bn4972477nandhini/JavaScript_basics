// 1st sum
// A cinema charges:
// ₹150 for ages under 18
// ₹250 for ages 18–60
// ₹100 for ages above 60
// Write a program that asks for age and prints the ticket price.
// Sample Input:
// 65
// Sample Output:
// 100

let age=40;   
if(age<18){
    console.log("150")
}
else if(age>18 && age<60){
    console.log("250")
}
else{
    console.log("100")
}


// 2 second sum:
// A stadium sells entry passes with the following rules:
// If age < 12 → Ticket = ₹50
// If age between 12–59 → Ticket = ₹120
// If age ≥ 60 → Ticket = ₹80
// Additionally, if the person’s age is a Even number, give a ₹5 discount.
// Get the input from the user and return the final discounted stadium ticket price.
// Sample Input:
// 59
// Sample Output:
// 120


let ages =60   
let ticket;

if(ages<12){
    ticket=50;
}
else if (ages>12 && ages<59){
   ticket=120;
}
else if(ages>=60){
    ticket=80;
}
if(ages%2==0){
    ticket=ticket-5
}
console.log(ticket)


//3ed sum:
// A shopkeeper has n mangoes.
// He wants to pack them into baskets, with 5 mangoes in each basket.
// Write a program to calculate:
// How many full baskets can be made
// How many mangoes will be left
// Sample Input:
// 23
// Sample Output:
// Full Basket is 4
// Left Over mangoes is 3
let m=23
let full_basket = math.floor(m / 5);
let left =m % 5;
console.log("Full Basket is =",full_basket)
console.log("Left Over Mangoes is",left)



//4th sum
// A child has n candies and eats one candy each day until all are finished.
// Write Python program to print how many candies the child ate and how many are left each day.
// Sample Input:
// 3
// Sample Output:
// Day 1 = 2 left
// Day 2 = 1 left
// Day 3 = 0 left

let candy=3;
for(let day=1;day<=candy;day++){
    let left =candy-day
    console.log("Day",day,"=",left)
}


//5th sum
// An employee gets a monthly salary.
// If sales ≥ 100 units → bonus = 10%
// 50–99 units → bonus = 5%
// <50 → no bonus
// Write a program that asks for salary and sales and prints total salary including bonus.
// Sample Input:
// Enter your salary 40000
// Enter your sales 120
// Sample Output:
// Bonus = 4000
// Total Salary = 44000

let salary=40000;
let sales=120;
let bonus=0;

if(sales>=100){
    bonus=salary*0.10;
}
else if(sales>50 && sales<99){
    bonus=salary*0.05;
}
else{
    bonus=0;
}
ts=salary+bonus;
console.log("Bonus =",bonus)
console.log("TotalSalary = ",ts)


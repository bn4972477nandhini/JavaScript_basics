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
let full_basket = math.floor(m / 5);     //sir
let left =m % 5;
console.log("Full Basket is =",full_basket)
console.log("Left Over Mangoes is",left)



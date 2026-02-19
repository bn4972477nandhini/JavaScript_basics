let arr =[23,45,6,7,8,9,35,,5,4,46,24,];
const evenarr =arr.filter(myFunction)
function myFunction(item){
    if (item % 2 === 0){
        return item
    }
} 
console.log(evenarr)

let packageWeight = 14;
let destinationZone = "C";
let shipping = 0;

if (destinationZone === "A"){
    shipping=10
    console.log(shipping)
}
else if (destinationZone === "B"){
    shippingCost=(packageWeight*3)
    console.log(shipping)
}
else if(destinationZone === "C"){
    if (packageWeight < 10){
        shipping=(packageWeight*5)
        console.log(shipping)
    }
    else{
        shipping=((packageWeight*5)+10)
        console.log(shipping)
    }
}
else{
    shipping=("Sorry Not Value")
    console.log(shipping)
}

    
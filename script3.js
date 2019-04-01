//====Reverse a number ==//
function myReverse(x){
    let z = x.toString();
    let zString = "";
    for (var i = z.length-1; i > -1; i--){
        zString += z[i];
    }
    return parseInt(zString);
}

console.log(myReverse(12345));